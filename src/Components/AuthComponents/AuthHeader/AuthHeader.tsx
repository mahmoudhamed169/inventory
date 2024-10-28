import { Box, Stack, Typography } from "@mui/material";
import logo from "../../../assets/Logo.png";

interface AuthHeaderProps {
  title: string;
  subTitle: string;
}

export default function AuthHeader({ title, subTitle }: AuthHeaderProps) {
  return (
    <>
      <Box sx={{ textAlign: "center" }} component={"div"}>
        <img src={logo} alt="Logo-register" />
        <Stack sx={{ mt: "20px" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "600", fontSize: "2rem" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: "300", color: "#A2A1A8" }}
          >
            {subTitle}
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
