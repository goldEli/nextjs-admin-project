'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import { LayoutDashboard, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';

const Sidebar = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const menuItems = [
    { path: '/',  label: t('dashboard') },
    { path: '/users', label: t('userManagement') },
  ];

  return (
    <Paper
      sx={{
        width: 240,
        minHeight: '100vh',
        borderRadius: 0,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ p: 2 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              href={item.path}
              sx={{
                mb: 1,
                borderRadius: 1,
                bgcolor: pathname === item.path ? 'action.selected' : 'transparent',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>1</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default Sidebar;