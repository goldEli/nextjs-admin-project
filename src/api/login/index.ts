import request from "@/utils/http/request";
import { LoginParams } from "@/type/login";


export const login = async (data: LoginParams) => {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);
  const res = await request.post("/login", formData);
  // set Authorization to cookie
  document.cookie = `Authorization=${res.data.token}; path=/;`;
  return res.data;
};
