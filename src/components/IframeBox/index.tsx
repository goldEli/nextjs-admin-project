"use client";
import useMenuStore from "@/store/sideBar/menuStore";
import { Box, Typography } from "@mui/material";

interface Props {
  src: string;
}

export default function IframeBox(props: Props) {
  const { selectedMenuItem } = useMenuStore();
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
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography>{selectedMenuItem?.title}</Typography>
      <Typography>{selectedMenuItem?.link}</Typography>
    </Box>
  );

  return (
    <Box
      component="iframe"
      src={`https://stg-boss-web.weex.tech/innerMessage`}
      sx={{ width: "100%", height: "100%" }}
    >
      {/* <Box
        sx={{ width: "100%", height: "100%" }}
        dangerouslySetInnerHTML={{ __html: htmlString }}
      ></Box> */}
    </Box>
  );
}
