'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  InputAdornment,
} from '@mui/material';
// import { Search, Edit, Trash2 } from 'lucide-react';
// import { mockUsers } from '@/lib/mockData';
import { Search, Edit, Delete } from '@mui/icons-material';
import { mockUsers } from '@/lib/mockData';

const fetchUsers = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUsers), 1000);
  });
};

export default function Users() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const { data: users = []  as any} = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const filteredUsers = users.filter((user: any) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('userManagement')}
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder={t('search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('name')}</TableCell>
                <TableCell>{t('email')}</TableCell>
                <TableCell>{t('role')}</TableCell>
                <TableCell>{t('status')}</TableCell>
                <TableCell>{t('actions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.status}
                      color={user.status === 'Active' ? 'success' : 'default'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" color="primary">
                      <Edit  />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <Delete  />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}