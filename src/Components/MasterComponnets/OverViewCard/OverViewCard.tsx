import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface OverViewCardProps {
  icon: React.ElementType;
  bgColor: string;
  number: string;
  title: string;
  border:boolean
}

function OverViewCard({
  icon: IconComponent,
  bgColor,
  number,
  title,
  border,
}: OverViewCardProps) {
  return (
    <Stack
      spacing={3}
      className="card"
      sx={{
        paddingRight: "25px",
        borderRight: border ? "1px solid #F0F1F3" : "none", 
        width: "100%",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: bgColor,
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <IconComponent />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "600", color: "#5D6679", lineHeight: "24px" }}
        >
          {number}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontWeight: "500",
            color: "#667085",
            lineHeight: "24px",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Stack>
  );
}

export default OverViewCard;
