'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Globe, User } from 'lucide-react';
import UserInfo from '@/components/UserInfo';
import HeaderTabs from './HeaderTabs';
import ColorModeSelect from './ColorModeSelect';
// import ColorModeSelect from './ColorModeSelect';


const Header = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography> */}
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            onClick={(e) => setAnchorEl(e.currentTarget)}
            size="small"
          >
            <Globe />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('zh')}>中文</MenuItem>
          </Menu>
          {/* <ColorModeSelect /> */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <User />
            </Avatar>
            <UserInfo />
          </Box>
        </Box>
      </Toolbar>
      <HeaderTabs />
    </AppBar>
  );
};

export default Header;