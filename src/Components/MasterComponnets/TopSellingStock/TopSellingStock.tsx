import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TopSellingStock() {
  const rows = [
    {
      name: "Surf Excel",
      SoldQuantity: 30,
      RemainingQuantity: 12,
      Price: "₹ 100",
    },
    {
      name: "Surf Excel",
      SoldQuantity: 30,
      RemainingQuantity: 12,
      Price: "₹ 100",
    },
    {
      name: "Surf Excel",
      SoldQuantity: 30,
      RemainingQuantity: 12,
      Price: "₹ 100",
    },
  ];
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#FFFFFF",
          height: "auto",
          borderRadius: "0.5rem",
        }}
        spacing={3}
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
            Top Selling Stock
          </Typography>

          <Button sx={{ textTransform: "none" }}>See All</Button>
        </Box>
        <TableContainer component={"table"}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Sold Quantity</TableCell>
                <TableCell align="left">Remaining Quantity</TableCell>
                <TableCell align="left">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.SoldQuantity}</TableCell>
                  <TableCell align="left">{row.RemainingQuantity}</TableCell>
                  <TableCell align="left">{row.Price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
