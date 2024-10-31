import { Box, Grid2, Stack, Typography } from "@mui/material";
import SummaryComponents from "../../../Components/MasterComponnets/SummaryComponents/SummaryComponents";
import SalesOverview from "../../../Components/MasterComponnets/SalesOverview/SalesOverview";
import PurchaseOverview from "../../../Components/MasterComponnets/PurchaseOverview/PurchaseOverview";
import TopSellingStock from "../../../Components/MasterComponnets/TopSellingStock/TopSellingStock";
import SalesPurchaseChart from "../../../Components/MasterComponnets/SalesPurchaseChart/SalesPurchaseChart";

export default function Dashboard() {
  return (
    <>
      <Box sx={{ backgroundColor: "#f0f1f3", padding: "22px 30px" }}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <Stack spacing={3.5} sx={{ width: "800px" }}>
              <SalesOverview />
              <PurchaseOverview />
              <SalesPurchaseChart />
              <TopSellingStock />
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <SummaryComponents />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
