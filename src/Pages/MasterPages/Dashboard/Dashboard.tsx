import { Box, Grid2, Typography } from "@mui/material";
import SummaryComponents from "../../../Components/MasterComponnets/SummaryComponents/SummaryComponents";

export default function Dashboard() {
  return (
    <>
      <Box>
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <Typography variant="body1">Left</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <SummaryComponents />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
