"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import Menu from "./Menu";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "300px",
        flexShrink: 0,
        height: "100vh",
        borderRadius: 0,
        borderRight: "1px solid",
        borderColor: "divider",
        overflowY: "auto",
      }}
    >
      <Drawer anchor="left" open={true} onClose={() => {}}>
        <Box sx={{ height: "100%" }}>
          <Menu />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
