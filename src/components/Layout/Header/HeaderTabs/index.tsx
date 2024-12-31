import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMenuStore from "@/store/sideBar/menuStore";

export default function HeaderTabs() {
  const { selectedMenuList, selectedMenuItem, setSelectedMenuItem } =
    useMenuStore();

  const selectedMenuId = selectedMenuItem?.id;

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    const currentMenu = selectedMenuList.find((item) => item.id === newValue);
    currentMenu && setSelectedMenuItem(currentMenu);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={selectedMenuId}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {selectedMenuList.map((item) => (
          <Tab value={item.id} key={item.id} label={item.title} />
        ))}
      </Tabs>
    </Box>
  );
}
