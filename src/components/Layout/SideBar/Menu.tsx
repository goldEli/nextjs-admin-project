import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  Box,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { t } from "i18next";
import { useMenu } from "./useMenu";
import { MenuItem } from "@/type/menu";
// import * as htmlparser2 from "htmlparser2";

const VerticalMenu = () => {
  const { menuData, toggleMenu } = useMenu();

  const handleClick = (currentItem: MenuItem) => {
    // setOpen(!open);
    toggleMenu(currentItem.id);
  };


  const MenuListEle = menuData.map((item) => {
    return (
      <Box key={item.id}>
        <ListItem
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(item)}
        >
          <ListItemText primary={item.title} />
          {item.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={item.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children?.map((child) => {
              return (
                <ListItem key={child.id} sx={{ pl: 4 }}>
                  <ListItemText sx={{ cursor: "pointer" }} primary={child.title} />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
        <Divider />
      </Box>
    );
  });

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {MenuListEle}
    </List>
  );
};

export default VerticalMenu;

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
