import urls from "@/api/urls";
import { getUserInfo } from "@/api/users/users";
import { useQuery } from "@tanstack/react-query";

export const userInfoService = () => {
    const userId = 11111111111
    const data = useQuery({
        queryKey: [urls.users, userId],
        queryFn: () => getUserInfo(userId),
    })

    return data
};
