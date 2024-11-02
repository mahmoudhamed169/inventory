import { Box, Grid2, Typography } from "@mui/material";

export default function ReportsOverview() {
  return (
    <Box sx={{ fontFamily: "Inter ,serif" }}>
      {/* --------------- Title for the Overview section --------------- */}
      <Typography variant="h5">Overview</Typography>
      

      {/*  ------------------------------ First row  ------------------------------ */}
      <Grid2
        container
        sx={{
          justifyContent: "space-between",
          borderBottom: " 1px solid #F0F1F3",
        }}
      >
        {/* --------------- Total Profit --------------- */}
        <Grid2 size={{ xs: 6, md: 2 }}>
          <Box sx={{ textAlign: "center", paddingBlock: "1rem" }}>
            <Typography component="p" sx={{ color: " #5D6679" }}>
              ₹21,190
            </Typography>
            <Typography
              component="p"
              sx={{ color: "#555", paddingBlock: ".8rem" }}
            >
              Total Profit
            </Typography>
          </Box>
        </Grid2>

        {/* --------------- Revenue --------------- */}
        <Grid2 size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ textAlign: "center", paddingBlock: "1rem", width: "100%" }}
          >
            <Typography component="p" sx={{ color: " #5D6679" }}>
              ₹18,300
            </Typography>
            <Typography
              component="p"
              sx={{ color: "#DBA362", paddingBlock: ".8rem" }}
            >
              Revenue
            </Typography>
          </Box>
        </Grid2>

        {/* --------------- Sales --------------- */}
        <Grid2 size={{ xs: 12, md: 2 }} >
          <Box sx={{ textAlign: "center", paddingBlock: "1rem" }}>
            <Typography component="p" sx={{ color: " #5D6679" }}>
              ₹17,432
            </Typography>
            <Typography
              component="p"
              sx={{ color: "#845EBC", paddingBlock: ".8rem" }}
            >
              Sales
            </Typography>
          </Box>
        </Grid2>
      </Grid2>


      {/* ------------------------------ Second row ------------------------------ */}
      <Grid2
        container
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* --------------- Net purchase value --------------- */}
        <Grid2 size={{ xs: 6, lg: 1.5 }}>
          <Box sx={{ paddingBlock: "1rem" }}>
            <Typography component="p" sx={{ color: "5D6679" }}>
              ₹1,17,432
            </Typography>
            <Typography
              component="p"
              sx={{ color: "#667085", paddingTop: "0.75" }}
            >
              Total Profit
            </Typography>
          </Box>
        </Grid2>

        {/* --------------- Net sales value --------------- */}
        <Grid2 size={{ xs: 6, lg: 1.5 }}>
          <Box sx={{ paddingBlock: "1rem", width: "100%" }}>
            <Typography component="p" sx={{ color: "5D6679" }}>
              ₹80,432
            </Typography>
            <Typography
              component="p"
              sx={{ color: "#667085", paddingTop: "0.75" }}
            >
              Total Profit
            </Typography>
          </Box>
        </Grid2>

        {/* --------------- MoM Profit --------------- */}
        <Grid2 size={{ xs: 6, lg: 1.5 }}>
          <Box sx={{ paddingBlock: "1rem" }}>
            <Typography component="p" sx={{ color: "5D6679" }}>
              ₹30,432
            </Typography>
            <Typography
              component="p"
              sx={{ color: "#667085", paddingTop: "0.75" }}
            >
              Total Profit
            </Typography>
          </Box>
        </Grid2>

        {/* --------------- YoY Profit --------------- */}
        <Grid2 size={{ xs: 6, lg: 1.5 }}>
          <Box sx={{ paddingBlock: "1rem" }}>
            <Typography component="p" sx={{ color: "5D6679" }}>
              ₹1,10,432
            </Typography>
            <Typography
              component="p"
              sx={{ color: "#667085", paddingTop: "0.75" }}
            >
              YoY Profit
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
