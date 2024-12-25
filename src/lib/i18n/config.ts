'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Only initialize if it hasn't been initialized already
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: {
        translations: {
          dashboard: 'Dashboard',
          userManagement: 'User Management',
          welcome: 'Welcome',
          totalUsers: 'Total Users',
          activeUsers: 'Active Users',
          newUsers: 'New Users',
          search: 'Search',
          filter: 'Filter',
          name: 'Name',
          email: 'Email',
          role: 'Role',
          status: 'Status',
          actions: 'Actions',
        },
      },
      zh: {
        translations: {
          dashboard: '仪表板',
          userManagement: '用户管理',
          welcome: '欢迎',
          totalUsers: '用户总数',
          activeUsers: '活跃用户',
          newUsers: '新用户',
          search: '搜索',
          filter: '筛选',
          name: '姓名',
          email: '邮箱',
          role: '角色',
          status: '状态',
          actions: '操作',
        },
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });
}

export default i18n;