import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HttpResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

export interface RequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: Record<string, any>;
  timeout?: number;
}

class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 在此处添加通用逻辑，例如添加 Token
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 统一处理响应数据
        return response.data;
      },
      (error) => {
        // 处理错误逻辑
        console.error('HTTP Error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return this.instance.get(url, config);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return this.instance.post(url, data, config);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return this.instance.delete(url, config);
  }
}

// const http = new HttpClient(import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000');
const request = new HttpClient('http://localhost:3000');
export default request;
