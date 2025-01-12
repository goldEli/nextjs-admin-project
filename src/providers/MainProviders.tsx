"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/config";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ReactQueryProvider from "./ReactQueryProvider";
// import SystemThemeProvider from "./SystemThemeProvider";
import AppTheme from "./AppTheme";
import SystemThemeProvider from "./SystemThemeProvider";

export function MainProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AppRouterCacheProvider>
        <I18nextProvider i18n={i18n}>
          <SystemThemeProvider>
          {/* <AppTheme> */}
            {children}
          {/* </AppTheme> */}
          </SystemThemeProvider>  
        </I18nextProvider>
      </AppRouterCacheProvider>
    </ReactQueryProvider>
  );
}
