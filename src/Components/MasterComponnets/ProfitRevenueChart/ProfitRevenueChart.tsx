import { Box, Button, Typography } from "@mui/material";
import { LineChartPro } from "@mui/x-charts-pro/LineChartPro";
import { Calendar } from "lucide-react";
import React from "react";

const data = [
  { y1: 443.28, y2: 153.9 },
  { y1: 110.5, y2: 217.8 },
  { y1: 175.23, y2: 286.32 },
  { y1: 195.97, y2: 325.12 },
  { y1: 351.77, y2: 144.58 },
  { y1: 43.253, y2: 146.51 },
  { y1: 276.34, y2: 309.69 },
  { y1: 31.514, y2: 236.38 },
  { y1: 121.31, y2: 440.72 },
  { y1: 108.04, y2: 20.29 },
  { y1: 31.514, y2: 236.38 },
  { y1: 231.31, y2: 440.72 },
  { y1: 108.04, y2: 20.29 },
];

const chartProps = {
  series: [
    {
      label: "Profit",
      data: data.slice(0, 12).map((v) => v.y1),
      color: " #DBA362",
    },
    {
      label: "Revenue",
      data: data.slice(0, 12).map((v) => v.y2),
      color: " #B6D3FA",
    },
  ],
};

export default function ProfitRevenueChart() {
  const xAxisConfig = [
    {
      zoom: true,
      scaleType: "point" as const,
      id: "my-x-axis",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  ];

  const [zoom, setZoom] = React.useState<ZoomData[]>([
    {
      axisId: "my-x-axis",
      start: 0,
      end: 40,
    },
  ]);
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "0.5rem",
        paddingBottom: "15px",
      }}
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
          Profit & Revenue
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

      <Box>
        <LineChartPro
          height={430}
          {...chartProps}
          //   zoom={zoom}
          onZoomChange={setZoom}
          xAxis={xAxisConfig}
        />
      </Box>
    </Box>
  );
}
