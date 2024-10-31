import { Grid2 } from "@mui/material";
import React from "react";
import Chart from "../SummaryComponents/Chart";
import SalesPurchaseChart from "../SalesPurchaseChart/SalesPurchaseChart";

export default function Charts() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <SalesPurchaseChart />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <Chart />
      </Grid2>
    </Grid2>
  );
}
