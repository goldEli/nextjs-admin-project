"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n/config";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const queryClient = new QueryClient();

export function MainProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </QueryClientProvider>
    </AppRouterCacheProvider>
  );
}
