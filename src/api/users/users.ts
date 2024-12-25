import request from "@/lib/http/request";
import { User } from "@/type/users";

const mockUsers: User[] = [
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

export const fetchUsers = async () => {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockUsers), 1000);
    });
};

export const getUserInfo = async () => {
    const response = await request.get<User>('/users/info');
    return response.data;
};
