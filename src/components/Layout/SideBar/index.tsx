import { useMediaQuery, Box, Drawer } from "@mui/material";
// import SidebarItems from "./SidebarItems";
// import { Upgrade } from "./Updrade";
// import { Sidebar, Logo } from "react-mui-sidebar";
import Menu from "./Menu";
import { scrollbarStyles } from "@/style/scrollbar";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  console.log(lgUp, "lgUp");

  const sidebarWidth = "270px";

  // Custom CSS for short scrollbar

  // lgUp is true when the screen is larger than lg
  // if (lgUp) {
  return (
    <Box
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        ...scrollbarStyles,
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "background.default",
        // '&::-webkit-scrollbar': {
        //   width: 8,
        // },
        // '&::-webkit-scrollbar-thumb': {
        //   backgroundColor: '#888',
        //   borderRadius: 4,
        // },
        // '&::-webkit-scrollbar-thumb:hover': {
        //   backgroundColor: '#555',
        // },
        // '&::-webkit-scrollbar-track': {
        //   backgroundColor: '#f1f1f1',
        //   borderRadius: 4,
        // },
        // "&::-webkit-scrollbar": {
        //   width: "7px",
        // },
        // "&::-webkit-scrollbar-thumb": {
        //   backgroundColor: "grey",
        //   // backgroundColor: "#6B6B6B",
        //   borderRadius: "15px",
        // },
      }}
    >
      <Menu />
    </Box>
  );
  // }

  // return (
  //   <Drawer
  //     anchor="left"
  //     open={isMobileSidebarOpen}
  //     onClose={onSidebarClose}
  //     variant="temporary"
  //     PaperProps={{
  //       sx: {
  //         boxShadow: (theme) => theme.shadows[8],
  //         ...scrollbarStyles,
  //       },
  //     }}
  //   >
  //     {/* ------------------------------------------- */}
  //     {/* Sidebar Box */}
  //     {/* ------------------------------------------- */}
  //     <Box px={2}>
  //       {/* <Sidebar
  //         width={"270px"}
  //         collapsewidth="80px"
  //         isCollapse={false}
  //         mode="light"
  //         direction="ltr"
  //         themeColor="#5d87ff"
  //         themeSecondaryColor="#49beff"
  //         showProfile={false}
  //       > */}
  //       {/* ------------------------------------------- */}
  //       {/* Logo */}
  //       {/* ------------------------------------------- */}
  //       {/* <Logo img="/images/logos/dark-logo.svg" /> */}
  //       {/* ------------------------------------------- */}
  //       {/* Sidebar Items */}
  //       {/* ------------------------------------------- */}
  //       {/* <SidebarItems />
  //         <Upgrade /> */}
  //       <Menu />
  //       {/* </Sidebar> */}
  //     </Box>
  //     {/* ------------------------------------------- */}
  //     {/* Sidebar For Mobile */}
  //     {/* ------------------------------------------- */}
  //   </Drawer>
  // );
};

export default MSidebar;
