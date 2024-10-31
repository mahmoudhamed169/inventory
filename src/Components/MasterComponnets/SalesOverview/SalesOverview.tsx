import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SalesIcon from "../../../Icones/SalesIcon";
import OverViewCard from "../OverViewCard/OverViewCard";
import RevenueIcone from "../../../Icones/RevenueIcone";
import ProfitIcone from "../../../Icones/ProfitIcone";
import CostIcone from "../../../Icones/CostIcone";

export default function SalesOverview() {
  return (
    <Stack
      sx={{
        backgroundColor: "#FFFFFF",
        height: { xs: "auto", md: "10.2rem" },
        borderRadius: "0.5rem",

        padding: { xs: "16px", md: "20px 16px" },
      }}
      spacing={4}
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
        Sales Overview
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <OverViewCard
          icon={SalesIcon}
          bgColor="#E8F1FD"
          number="₹ 832"
          title="Sales"
        />
        <OverViewCard
          icon={RevenueIcone}
          bgColor="#ECEAFF"
          number="₹ 18,300"
          title="Revenue"
        />
        <OverViewCard
          icon={ProfitIcone}
          bgColor="#FFEEDB"
          number="₹ 868"
          title="Profit"
        />
        <OverViewCard
          icon={CostIcone}
          bgColor="#EBFFED"
          number="₹ 17,432"
          title="Cost"
        />
      </Stack>
    </Stack>
  );
}
