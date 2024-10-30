import * as React from "react";
import { LineChartPro } from "@mui/x-charts-pro/LineChartPro";
import { ZoomData } from "@mui/x-charts-pro/context";
import { Box, Typography } from "@mui/material";

const data = [
  { y1: 443.28, y2: 153.9 },
  { y1: 110.5, y2: 217.8 },
  { y1: 175.23, y2: 286.32 },
  { y1: 195.97, y2: 325.12 },
  { y1: 351.77, y2: 144.58 },
  { y1: 43.253, y2: 146.51 },
  { y1: 376.34, y2: 309.69 },
  { y1: 31.514, y2: 236.38 },
  { y1: 231.31, y2: 440.72 },
  { y1: 108.04, y2: 20.29 },
  { y1: 321.77, y2: 484.17 },
  { y1: 120.18, y2: 54.962 },
  { y1: 366.2, y2: 418.5 },
  { y1: 451.45, y2: 181.32 },
  { y1: 294.8, y2: 440.9 },
  { y1: 121.83, y2: 273.52 },
  { y1: 287.7, y2: 346.7 },
  { y1: 134.06, y2: 74.528 },
  { y1: 104.5, y2: 150.9 },
  { y1: 413.07, y2: 26.483 },
  { y1: 74.68, y2: 333.2 },
  { y1: 360.6, y2: 422.0 },
  { y1: 330.72, y2: 488.06 },
];

const chartProps = {
  width: 340,
  height: 250,
  series: [
    {
      label: "Ordered",
      data: data.map((v) => v.y1),
      color: " #DBA362",
    },
    {
      label: "Delivered",
      data: data.map((v) => v.y2),
      color: " #B6D3FA",
    },
  ],
};

export default function ZoomControlled() {
  const xAxisConfig = [
    {
      zoom: true,
      scaleType: "point" as const, 
      id: "my-x-axis",
      data: [
        "Jun",
        "Feb",
        "Mar",
        "Api",
        "May",
        "Jun",
        "Feb",
        "Mar",
        "Api",
        "May5",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Label 15",
        "Label 16",
        "Label 17",
        "Label 18",
        "Label 19",
        "Label 20",
        "Label 21",
        "Label 22",
        "Label 23",
      ],
    },
  ];

  const [zoom, setZoom] = React.useState<ZoomData[]>([
    {
      axisId: "my-x-axis",
      start: 0,
      end: 20,
    },
  ]);

  return (
    <Box sx={{ width: "100%", borderRadius: "8px", bgcolor: "white" }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "20px",
          color: "#383E49",
          pt: 2,
          px: 2,
        }}
      >
        Order Summary
      </Typography>
      <LineChartPro
        {...chartProps}
        zoom={zoom}
        onZoomChange={setZoom}
        xAxis={xAxisConfig}
      />
    </Box>
  );
}
