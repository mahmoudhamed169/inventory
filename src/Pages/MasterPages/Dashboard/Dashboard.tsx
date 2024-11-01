import { Box, Grid2, Stack, Typography } from "@mui/material";
import SummaryComponents from "../../../Components/MasterComponnets/SummaryComponents/SummaryComponents";
import SalesOverview from "../../../Components/MasterComponnets/SalesOverview/SalesOverview";
import PurchaseOverview from "../../../Components/MasterComponnets/PurchaseOverview/PurchaseOverview";
import TopSellingStock from "../../../Components/MasterComponnets/TopSellingStock/TopSellingStock";
import SalesPurchaseChart from "../../../Components/MasterComponnets/SalesPurchaseChart/SalesPurchaseChart";
import Charts from "../../../Components/MasterComponnets/Charts/Charts";
import StockTables from "../../../Components/MasterComponnets/Stock/StockTables";

export default function Dashboard() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f0f1f3",
          padding: "22px 30px",
          gap: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Stack spacing={2}>
              <SalesOverview />
              <PurchaseOverview />
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <SummaryComponents />
            </Stack>
          </Grid2>
        </Grid2>
        <Charts />
        <StockTables />
      </Box>
    </>
  );
}
