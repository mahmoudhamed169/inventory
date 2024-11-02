import { Box, Grid2 } from "@mui/material";
import { HeaderComponent } from "../../../Components/MasterComponnets/InventoryAndOrders/Text";
import {
  CardComponent,
  FirstColumn,
} from "../../../Components/MasterComponnets/InventoryAndOrders/Card";

export default function OverAllOrders() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",

          borderRadius: "8px",
          p: "16px",
        }}
      >
        <HeaderComponent Header="Overall Orders" />
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md: 2 }}
            sx={{ borderRight: { xs: "none", md: "1px solid #F0F1F3" } }}
          >
            <FirstColumn
              headerText="Total Orders"
              number="37"
              lastText="Last 7 days"
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 3.5 }}
            sx={{
              borderRight: { xs: "none", md: "1px solid #F0F1F3" },
              px: { xs: 0, md: 4 },
              my: { xs: 2, md: 0 },
            }}
          >
            <CardComponent
              colorProp="#E19133"
              headerCard="Total Received"
              firNumber="32"
              secNumber="₹25000"
              firstText="Last 7 days"
              secText="Revenue"
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 3.5 }}
            sx={{
              borderRight: { xs: "none", md: "1px solid #F0F1F3" },
              px: { xs: 0, md: 4 },
              mb: { xs: 2, md: 0 },
            }}
          >
            <CardComponent
              colorProp="#845EBC"
              headerCard="Total Returned"
              firNumber="5"
              secNumber="₹2500"
              firstText="Last 7 days"
              secText="Cost"
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 3 }}
            sx={{ paddingLeft: { xs: 0, md: 4 } }}
          >
            <CardComponent
              colorProp="#F36960"
              headerCard="On the way"
              firNumber="12"
              firstText="Ordered"
              secNumber="₹2356"
              secText="Cost"
            />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
