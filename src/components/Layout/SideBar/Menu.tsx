// components/VerticalMenu.js

import React, { useState } from "react";
import { List, ListItem, ListItemText, Collapse, Divider } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const VerticalMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItem onClick={handleClick}>
        <ListItemText primary="Menu Item 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemText primary="Sub Item 1" />
          </ListItem>
          <ListItem sx={{ pl: 4 }}>
            <ListItemText primary="Sub Item 2" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
      <ListItem>
        <ListItemText primary="Menu Item 2" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Menu Item 3" />
      </ListItem>
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
