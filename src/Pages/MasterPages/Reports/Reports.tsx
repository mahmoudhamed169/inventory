import {
  Box,
  Grid2
} from "@mui/material";
import ReportsOverview from "../../../Components/MasterComponnets/ReportsOverview/ReportsOverview";
import ReportsBestSelling from "../../../Components/MasterComponnets/ReportsBestSelling/ReportsBestSelling";



export default function Reports() {
  return (
    <Box
      sx={{ padding: { xs: "15px 20px", sm: "20px 25px", md: "22px 30px" } }}
    >
      <Grid2 container spacing={2}>

        {/* --------------- Component rendering  overview content --------------- */}
        <Grid2
          size={{ sm: 12, md: 6 }}
          sx={{
            backgroundColor: "#fff",
            padding: { xs: "15px 20px", sm: "20px 25px", md: "22px 30px" },
            borderRadius: "0.5rem",
            width: "100%",
            maxWidth:{md:"35rem"}
          }}
        >
          <ReportsOverview />
        </Grid2>

         {/* --------------- Component rendering best-selling content --------------- */}
        <Grid2
          size={{ sm: 12, md: 6 }}
          sx={{
            backgroundColor: "#fff",
            padding: { xs: "15px 20px", sm: "20px 25px", md: "22px 30px" },
            borderRadius: "0.5rem",
            width: "100%",
            maxWidth:{md:"35rem"}
          }}
        >
         <ReportsBestSelling/>
        </Grid2>
      </Grid2>
    </Box>
  );
}
