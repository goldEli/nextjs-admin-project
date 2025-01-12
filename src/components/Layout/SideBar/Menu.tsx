import React, { useEffect, useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Box,
  ListSubheader,
  ListItemIcon,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { t } from "i18next";
import { useMenuData } from "./useMenuData";
import { MenuItem } from "@/type/menu";
import useMenuStore from "@/store/sideBar/menuStore";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
// import * as htmlparser2 from "htmlparser2";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <ListItemButton>
        {/* <ListItemIcon>
          <SendIcon />
        </ListItemIcon> */}
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        {/* <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon> */}
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

// const VerticalMenu = () => {
//   const { menuData, toggleMenu } = useMenuData();

//   const { setSelectedMenuItem } = useMenuStore();

//   const handleClick = (currentItem: MenuItem) => {
//     // setOpen(!open);
//     toggleMenu(currentItem.id);
//   };

//   const MenuListEle = menuData.map((item) => {
//     return (
//       <Box key={item.id}>
//         <ListItemButton
//           sx={{ cursor: "pointer" }}
//           onClick={() => handleClick(item)}
//         >
//           <ListItemText primary={item.title} />
//           {item.open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <Collapse in={item.open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             {item.children?.map((child) => {
//               return (
//                 <ListItemButton
//                   onClick={() => setSelectedMenuItem(child)}
//                   key={child.id}
//                   sx={{ pl: 4 }}
//                 >
//                   <ListItemText
//                     sx={{ cursor: "pointer" }}
//                     primary={child.title}
//                   />
//                 </ListItemButton>
//               );
//             })}
//           </List>
//         </Collapse>
//         <Divider />
//       </Box>
//     );
//   });

//   return (
//     <Box sx={{ height: "100%", width: "100%" }}>
//       <List component="nav" aria-labelledby="nested-list-subheader">
//         {MenuListEle}
//       </List>
//     </Box>
//   );
// };

// export default VerticalMenu;

// import { getMenu } from "@/api/menu";
// import { useEffect } from "react";
// import * as htmlparser2 from "htmlparser2";

// export const Menu = () => {
//   // const data = useMenu()
//   // console.log(data)

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getMenu();
//       console.log(data.data);
//       const ast = htmlparser2.parseDocument(data.data);
//       const parser = new htmlparser2.Parser(
//         {
//           onreset() {
//             console.info("reset");
//           },
//           onopentag(name, attribs) {
//             console.info("opentag", name);
//             console.info("attribs", attribs);
//           },
//           ontext(text) {
//             console.info("text", text);
//           },
//           onclosetag(tagname) {
//             console.info("closetag", tagname);
//           },
//           onopentagname(name) {
//             console.info("opentagname", name);
//           },
//           onend() {
//             console.info("onend");
//           },
//           oncomment(val) {
//             console.info("comment", val);
//           },
//           oncommentend() {
//             console.info("commentend");
//           },
//           oncdatastart() {
//             console.info("oncdatastart");
//           },
//           oncdataend() {
//             console.info("oncdataend");
//           },
//           onprocessinginstruction(name, data) {
//             console.info("onprocessinginstruction", name);
//             console.info("onprocessinginstruction", data);
//           },
//         },
//         {
//           recognizeCDATA: true,
//         }
//       );
//       parser.parseComplete(data.data);
//       console.log(ast);
//     }
//     fetchData();
//   }, []);

//   return <div>Menu</div>;
// };
