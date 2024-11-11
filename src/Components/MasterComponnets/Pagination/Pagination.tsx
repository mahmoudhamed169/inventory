import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Pagination() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
      }}
    >
      <Button
        sx={{
          border: "1px solid #D0D3D9",
          padding: "9px 17px",
          textTransform: "none",
          color: "#858D9D",
        }}
      >
        Previous
      </Button>
      <Typography
        variant="h6"
        component={"p"}
        sx={{ color: "#858D9D", fontSize: "14px" }}
      >
        Page 1 of 10
      </Typography>
      <Button
        sx={{
          border: "1px solid #D0D3D9",
          padding: "9px 17px",
          textTransform: "none",
          color: "#858D9D",
        }}
      >
        Next
      </Button>
    </Box>
  );
}
