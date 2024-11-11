import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import TopSellingStock from "../TopSellingStock/TopSellingStock";
import QuantityStock from "../SummaryComponents/QuantityStock";

export default function StockTables() {
  return (
    <Grid2 container spacing={2} height={"auto"}>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <TopSellingStock />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }} height={"100%"}>
     <QuantityStock/>
      </Grid2>
    </Grid2>
  );
}
