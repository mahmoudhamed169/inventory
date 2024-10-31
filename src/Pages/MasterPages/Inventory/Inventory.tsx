import { Box, Button, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import OverallInventory from "./OverallInventory";

export default function Inventory() {
  const rows = Array.from({ length: 9 }, (_, index) => ({
    Products: `Product ${index + 1}`,
    Price: `₹ ${(index + 1) * 10}`,
    Quantity: 30 - index,
    ThresholdValue: 12 - index,
    ExpiryDate: "21/12/22",
    Availability: "inStock",
  }));

  const cellStyle = {
    color: "#667085",
    fontWeight: 500,
    fontFamily: "Inter, serif",
  };

  return (
    <>
      <Stack spacing={3} sx={{ py: 3, ps: "16px",mx:2 }}>
        <OverallInventory />
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            height: "auto",
            borderRadius: "8px",
            
            
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: 4,
              paddingInline: "16px",
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                fontWeight: "500",
                fontFamily: "Inter, serif",
               color:"#383E49"
              }}
            >
              Products
            </Typography>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#1366D9",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                gap: "8px",
                fontFamily: "Inter, serif",
              }}
              variant="contained"
            >
              Add Product
            </Button>
          </Box>
          <TableContainer component={"table"}>
            <Table sx={{ minWidth: 660 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={cellStyle}>Products</TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Buying Price
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Quantity
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Threshold Value
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Expiry Date
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Availability
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.Products}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Products}
                    </TableCell>
                    <TableCell align="left">{row.Price}</TableCell>
                    <TableCell align="left">{row.Quantity}</TableCell>
                    <TableCell align="left">{row.ThresholdValue}</TableCell>
                    <TableCell align="left">{row.ExpiryDate}</TableCell>
                    <TableCell align="left">{row.Availability}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </>
  );
}
