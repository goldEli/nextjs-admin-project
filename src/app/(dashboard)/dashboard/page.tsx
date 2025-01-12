import { getUserInfo } from "@/api/users/users";
import IframeBox from "@/components/IframeBox";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { use } from "react";

export default function Home() {
  const data = use(getUserInfo(11111111111));

  console.log(data);

  return (
    <Box sx={{
      display: "flex",
      padding: 2,
      // flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center",
      // height: "100vh",
    }}>
      <Typography variant="h1">Dashboard</Typography>
    </Box>
  );
}
