import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMenuStore from "@/store/sideBar/menuStore";

export default function HeaderTabs() {
  const { selectedMenuList, selectedMenuItem, setSelectedMenuItem } =
    useMenuStore();

  const selectedMenuLink = selectedMenuItem?.link;

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    const currentMenu = selectedMenuList.find((item) => item.id === newValue);
    currentMenu && setSelectedMenuItem(currentMenu);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <Tabs
        value={selectedMenuLink}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {selectedMenuList.map((item) => (
          <Tab value={item.link} key={item.id} label={item.title} />
        ))}
      </Tabs>
    </Box>
  );
}
