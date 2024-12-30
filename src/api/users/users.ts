import request from "@/lib/http/request";
import { User } from "@/type/users";
import urls from "../urls";

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
    // Simulate API call /users/list
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockUsers), 1000);
    });
};


export const getSystemInfo = async () => {
    const response = await request.get<User>('/system/info');
    return response.data;
};

export const getUserInfo = async (userId: number): Promise<User> => {
    console.log('fetchUsers', userId, urls.users);
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            id: userId,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Admin',
            status: 'Active',
        }), 1000);
    });
};
