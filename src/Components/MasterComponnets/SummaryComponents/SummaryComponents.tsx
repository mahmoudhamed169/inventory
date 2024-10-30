import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import imgCh from "../.././../../src/assets/images/chipsy.png";
import Chart from "./Chart";
import InventoryAndProductContent from "./InventoryAndProductContent";
import firstInvImg from ".././../../../src/assets/images/iconDashboard/inv1.svg";
import secInvImg from ".././../../../src/assets/images/iconDashboard/inv2.svg";
import firstImgPro from ".././../../../src/assets/images/iconDashboard/pro1.svg";
import secImgPro from ".././../../../src/assets/images/iconDashboard/pro2.svg";
export default function SummaryComponents() {
  return (
    <>
      <Stack spacing={2} sx={{ w: "100%" }}>
        {/* Inventory */}
        <InventoryAndProductContent
          header="Inventory Summary "
          imgLeft={firstInvImg}
          numberLeft=""
          titleLeft="Quantity in Hand"
          imgRight={secInvImg}
          numberRight=""
          titleRight="To be received"
        />
        {/* Product */}
        <InventoryAndProductContent
          header="Product Summary"
          imgLeft={firstImgPro}
          numberLeft=""
          titleLeft="Number of Suppliers"
          imgRight={secImgPro}
          numberRight=""
          titleRight="Number of Categories"
        />
        <Chart />

        {/* stock */}
        <Box sx={{ bgcolor: "white", borderRadius: "8px", p: 2, w: "100%" }}>
          <Box>
            <Box sx={{ display: "flex", mb: 2 }}>
              <Typography
                sx={{ fontWeight: 500, fontSize: "20px", color: "#383E49" }}
              >
                Low Quantity Stock
              </Typography>
              <Link
                to=""
                style={{
                  marginLeft: "auto",
                  marginTop: "3%",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                See All
              </Link>
            </Box>
            <Stack spacing={2}>
              {/* Map here */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box component="img" src={imgCh} />
                <Box sx={{ mt: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#383E49", fontWeight: 600 }}
                  >
                    xx
                  </Typography>
                  <Typography sx={{ color: "#667085", fontSize: "14px" }}>
                    Remaining Quantity : Packet
                  </Typography>
                </Box>

                <Button
                  sx={{
                    bgcolor: "#FEECEB",
                    color: "#AA3028",
                    fontSize: "12px",
                    borderRadius: "16px",
                    textTransform: "none",
                    height: "22px",
                    minWidth: "38px",
                    fontWeight: 500,
                    mt: "1.2rem",
                    cursor: "default",
                  }}
                >
                  Low
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
