
import { useRouter } from "next/navigation";

export const useJump = () => {
    const router = useRouter();

    const jumpTo = (path: string) => {
        router.push(path);
    }

    return {
        jumpTo
    }
}