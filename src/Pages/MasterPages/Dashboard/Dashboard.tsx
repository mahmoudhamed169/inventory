import { Box, Grid2, Stack, Typography } from "@mui/material";
import SummaryComponents from "../../../Components/MasterComponnets/SummaryComponents/SummaryComponents";
import SalesOverview from "../../../Components/MasterComponnets/SalesOverview/SalesOverview";
import PurchaseOverview from "../../../Components/MasterComponnets/PurchaseOverview/PurchaseOverview";
import TopSellingStock from "../../../Components/MasterComponnets/TopSellingStock/TopSellingStock";
import SalesPurchaseChart from "../../../Components/MasterComponnets/SalesPurchaseChart/SalesPurchaseChart";
import InventoryAndProductContent from "../../../Components/MasterComponnets/SummaryComponents/InventoryAndProductContent";
import firstInvImg from ".././../../../src/assets/images/iconDashboard/inv1.svg";
import secInvImg from ".././../../../src/assets/images/iconDashboard/inv2.svg";
import firstImgPro from ".././../../../src/assets/images/iconDashboard/pro1.svg";
import secImgPro from ".././../../../src/assets/images/iconDashboard/pro2.svg";
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
              <InventoryAndProductContent
                header="Inventory Summary "
                imgLeft={firstInvImg}
                numberLeft="300"
                titleLeft="Quantity in Hand"
                imgRight={secInvImg}
                numberRight="200"
                titleRight="To be received"
              />
              <InventoryAndProductContent
                header="Product Summary"
                imgLeft={firstImgPro}
                numberLeft="852"
                titleLeft="Number of Suppliers"
                imgRight={secImgPro}
                numberRight="321"
                titleRight="Number of Categories"
              />
            </Stack>
          </Grid2>
        </Grid2>
        <Charts />
        <StockTables />
      </Box>
    </>
  );
}
