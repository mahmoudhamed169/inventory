import { Box, Grid2, Stack, Typography } from "@mui/material";
import CardInventory from "./CardInventory";

export default function OverallInventory() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
        
          borderRadius: "8px",
          p: "16px",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "500",
            mb: "22px",
            color:"#383E49",
           
          }}
        >
          Overall Inventory
        </Typography>
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md:2}}
            sx={{ borderRight: {xs:"none",md:"1px solid #F0F1F3"} }}
          >
            <Stack spacing={2}>
              <Typography
                variant="body1"
                sx={{
                  color: "#1570EF",
                  fontWeight: 600,
                  fontFamily: "Inter, serif",
                }}
              >
                Categories
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#5D6679",
                  fontWeight: 600,
                  fontFamily: "Inter, serif",
                }}
              >
                14
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#858D9D",
                  fontSize: "14px",
                  fontFamily: "Inter, serif",
                }}
              >
                Last 7 days
              </Typography>
            </Stack>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 3.5 }}
            sx={{ borderRight: {xs:"none",md:"1px solid #F0F1F3"},px:{xs: 0, md:4} ,my:{xs:2,md:0}}}
          >
            <CardInventory
              colorProp="#E19133"
              headerCard="Total Products"
              firNumber="868"
              secNumber="₹25000"
              firstText="Last 7 days"
              secText="Revenue"
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 3.5 }}
            sx={{  borderRight: {xs:"none",md:"1px solid #F0F1F3"},px:{xs: 0, md:4},mb:{xs:2,md:0} }}
          >
            <CardInventory
              colorProp="#845EBC"
              headerCard="Top Selling"
              firNumber="868"
              secNumber="₹2500"
              firstText="Last 7 days"
              secText="Cost"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}sx={{paddingLeft:{xs:0, md:4}}}>
            <CardInventory
              colorProp="#F36960"
              headerCard="Low Stocks"
              firNumber="12"
             firstText="Ordered"
              secNumber="22"
              secText="Not in stock"
            />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
