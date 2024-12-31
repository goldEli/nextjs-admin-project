'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import Menu from './Menu';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '300px',
        flexShrink: 0,
        height: '100vh',
        borderRadius: 0,
        borderRight: '1px solid',
        borderColor: 'divider',
        overflowY: 'auto'
      }}
    >
      <Box sx={{ p: 2 }}>
        <Menu />
      </Box>
    </Box>
  );
};

export default Sidebar;