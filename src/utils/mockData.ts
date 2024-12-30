export const mockUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive',
    },
  ];
  
  export const mockDashboardData = {
    totalUsers: 1250,
    activeUsers: 890,
    newUsers: 45,
    userGrowth: [
      { month: 'Jan', users: 800 },
      { month: 'Feb', users: 900 },
      { month: 'Mar', users: 1000 },
      { month: 'Apr', users: 1100 },
      { month: 'May', users: 1250 },
    ],
  };