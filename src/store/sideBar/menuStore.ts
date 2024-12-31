import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from "@/type/menu";
import { menuStorageKey } from '../persistKeys';

interface MenuStore {
    selectedMenuItem: MenuItem | null;
    selectedMenuList: MenuItem[];
}

interface MenuStoreActions {
    setSelectedMenuItem: (item: MenuItem) => void;
    setSelectedMenuList: (list: MenuItem[]) => void;
    clearSelectedMenuList: () => void;
}


const useMenuStore = create<MenuStore & MenuStoreActions>()(
    persist(
        (set, get) => ({
            selectedMenuItem: null,
            selectedMenuList: [],
            setSelectedMenuItem: (item: MenuItem) => {
                set({ selectedMenuItem: item });
                if (!get().selectedMenuList.some((i) => i.id === item.id)) {
                    set({ selectedMenuList: [item, ...get().selectedMenuList] });
                }
            },
            setSelectedMenuList: (list: MenuItem[]) => set({ selectedMenuList: list }),
            clearSelectedMenuList: () => set({ selectedMenuList: [] }),
        }),
        { name: menuStorageKey }
    )
);

export default useMenuStore;