import { userInfoService } from "@/service/user";
import { Box, Typography } from "@mui/material";

export default function UserInfo() {
  const { data } = userInfoService();

  return (
    <Box>
      <Typography variant="subtitle2">{data?.name}</Typography>
      <Typography variant="caption" color="text.secondary">
        admin@example.com
      </Typography>
    </Box>
  );
}
