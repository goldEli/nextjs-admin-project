"use client";

import Box from "@mui/material/Box";
import Header from "./Header";
import SideBar from "./SideBar";
import { Container } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", minWidth: "1300px", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          minWidth: "1300px",
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "rgb(249 250 251)",
        }}
      >
        <SideBar />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Header />
          <Box component="main" sx={{ flex: 1 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
