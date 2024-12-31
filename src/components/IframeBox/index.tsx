"use client";
import { getPageByPath } from "@/api/menu";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  src: string;
}

export default function IframeBox(props: Props) {
  // const [htmlString, setHtmlString] = useState<string>("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getPageByPath(props.src);
  //     // console.log(data.data);
  //     setHtmlString(data.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <Box component="iframe" src={`https://stg-boss-web.weex.tech/innerMessage`} sx={{ width: "100%", height: "100%" }}>
      {/* <Box
        sx={{ width: "100%", height: "100%" }}
        dangerouslySetInnerHTML={{ __html: htmlString }}
      ></Box> */}
    </Box>
  );
}
