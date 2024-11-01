import { Box } from "@mui/material";
import { FallingLines } from "react-loader-spinner";

export default function MainLoading() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <FallingLines
        color="#3252DF"
        width="120"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </Box>
  );
}
