
export interface MenuItem {
    id: string;
    title: string;
    link: string;
    open?: boolean;
    children?: MenuItem[];
}