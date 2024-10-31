import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import { Button, colors, Typography } from "@mui/material";
import { Calendar } from "lucide-react";

const barChartsParams = {
  series: [
    {
      id: "sales",
      data: [
        50000, 45398, 51800, 40908, 48000, 45800, 43000, 47000, 41000, 37500,
      ],
      label: "Sales",
      highlightScope: {
        highlight: "item",
      },
      // color: "url(#sales-gradient)", // Apply gradient for sales
      // color: "#51CC5D",
    },
    {
      id: "purchase",
      data: [
        55000, 57000, 42000, 35780, 22890, 55390, 43490, 46490, 35321, 24321,
      ],
      label: "Purchase",
      highlightScope: {
        highlight: "item",
      },
      // color: "#79D0F1",
    },
  ],
  xAxis: [
    {
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
      scaleType: "band",
      id: "axis1",
    },
  ],
  height: 400,
  // width: 200,
};

export default function SalesPurchaseChart() {
  return (
    <Box
      sx={{ backgroundColor: "#ffff", borderRadius: "0.5rem", height: "500px" }}
    >
      <Box
        sx={{
          padding: "20px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "500",
            lineHeight: { xs: "28px", md: "30px" },
          }}
        >
          Sales & Purchase
        </Typography>

        <Button
          sx={{
            textTransform: "none",
            display: "flex",
            gap: "5px",
            border: "1px solid #D0D3D9",
            color: "#5D6679",
            width: "109px",
            height: "40px",
            padding: "20px",
          }}
        >
          <Calendar size={17} /> <h6>Weekly</h6>
        </Button>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0, md: 4 }}
        sx={{ width: "100%" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* <svg style={{ display: "none" }}>
          <defs>
            <linearGradient id="sales-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#46A46C" />
              <stop offset="47.92%" stopColor="#51CC5D" />
              <stop offset="100%" stopColor="#57DA65" />
            </linearGradient>
            <linearGradient id="purchase-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#817AF3" />
              <stop offset="50%" stopColor="#74B0FA" />
              <stop offset="100%" stopColor="#79D0F1" />
            </linearGradient>
          </defs>
        </svg> */}

          <BarChart
            {...barChartsParams}
            sx={{
              "& .muiBarElement-root": {
                color: "red",
                width: "40px",
              },
            }}
            borderRadius={10}
          />
        </Box>
      </Stack>
    </Box>
  );
}