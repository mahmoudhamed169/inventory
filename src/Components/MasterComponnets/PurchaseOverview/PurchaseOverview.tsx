import { Stack, Typography } from "@mui/material";
import React from "react";
import OverViewCard from "../OverViewCard/OverViewCard";
import ProfitIcone from "../../../Icones/ProfitIcone";
import CostIcone from "../../../Icones/CostIcone";
import PurchaseBagIcone from "../../../Icones/PurchaseBagIcone";
import CancelIcone from "../../../Icones/CancelIcone";

export default function PurchaseOverview() {
  return (
    <>
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
          Purchase Overview
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <OverViewCard
            icon={PurchaseBagIcone}
            bgColor="#E5F6FD"
            number="82"
            title="Purchase"
          />
          <OverViewCard
            icon={CostIcone}
            bgColor="#EBFFED"
            number="₹ 17,432"
            title="Cost"
          />

          <OverViewCard
            icon={CancelIcone}
            bgColor="#E7E5FF"
            number="5"
            title="Cancel"
          />
          <OverViewCard
            icon={ProfitIcone}
            bgColor="#FFEEDB"
            number="₹17,432"
            title="Return"
          />
        </Stack>
      </Stack>
    </>
  );
}
