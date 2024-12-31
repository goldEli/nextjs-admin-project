import { create } from 'zustand';

import { MenuItem } from "@/type/menu";

interface MenuStore {
    selectedMenuItem: MenuItem | null;
}

interface MenuStoreActions {
    setSelectedMenuItem: (item: MenuItem) => void;
}

const useMenuStore = create<MenuStore & MenuStoreActions>((set) => ({
    selectedMenuItem: null,
    setSelectedMenuItem: (item: MenuItem) => set({ selectedMenuItem: item }),
}));

export default useMenuStore;
