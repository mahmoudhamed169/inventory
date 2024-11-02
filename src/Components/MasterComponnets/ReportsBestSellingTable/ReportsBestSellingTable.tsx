import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ProductDataForBestSellingTable } from "../../../Interfaces/TableForReportsBestSellingTable/TableForReportsBestSellingTable";

function createData({
  Product,
  ProductID,
  Category,
  RemainingQuantity,
  TurnOver,
  IncreaseBy,
}: ProductDataForBestSellingTable): ProductDataForBestSellingTable {
  return {
    Product,
    ProductID,
    Category,
    RemainingQuantity,
    TurnOver,
    IncreaseBy,
  };
}

const productTableHeaders = [
  "Product",
  "Product ID",
  "Category",
  "Remaining Quantity",
  "Turn Over",
  "Increase By",
];

const rows = [
  createData({
    Product: "Laptop",
    ProductID: "12345",
    Category: "Electronics",
    RemainingQuantity: "20",
    TurnOver: "$5000",
    IncreaseBy: "10%",
  }),
  createData({
    Product: "Smartphone",
    ProductID: "67890",
    Category: "Electronics",
    RemainingQuantity: "50",
    TurnOver: "$3000",
    IncreaseBy: "15%",
  }),
  createData({
    Product: "Coffee Maker",
    ProductID: "54321",
    Category: "Home Appliances",
    RemainingQuantity: "15",
    TurnOver: "$1200",
    IncreaseBy: "5%",
  }),
  createData({
    Product: "Office Chair",
    ProductID: "98765",
    Category: "Furniture",
    RemainingQuantity: "30",
    TurnOver: "$1800",
    IncreaseBy: "8%",
  }),
];

export default function ReportsBestSellingTable() {
  return (
    <Box>
      {/*Stack component for header section, displaying title and button */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* Title for the section */}
        <Typography sx={{ fontFamily: "Inter ,serif" }} variant="h5">
          Best selling product
        </Typography>

        {/* Button to see all products */}
        <Button sx={{ textTransform: "none", fontFamily: "Inter ,serif" }}>
          See All
        </Button>
      </Stack>

      <TableContainer>
        <Table
          aria-label="Best selling products table"
          sx={{
            fontSize: {
              xs: "0.5rem",
              sm: "1rem",
              md: "1.125rem",
              lg: "1.25rem",
              xl: "1.5rem",
            },
            overflowX: "hidden",
          }}
        >
          {/* Table head for column headers */}
          <TableHead>
            <TableRow>
              {productTableHeaders.map((headerLabel) => (
                <TableCell
                  key={headerLabel}
                  sx={{
                    color: "#667085",
                    fontWeight: { md: 500 },
                    fontFamily: "Inter ,serif",
                  }}
                >
                  {headerLabel}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table body for displaying rows of product data */}
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={productTableHeaders.length}
                  sx={{ textAlign: "center" }}
                >
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow key={row.ProductID}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontFamily: "Inter ,serif", color: " #48505E" }}
                  >
                    {row.Product}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: "Inter ,serif", color: "  #48505E" }}
                  >
                    {row.ProductID}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: "Inter ,serif", color: " #48505E" }}
                  >
                    {row.Category}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: "Inter ,serif", color: " #48505E" }}
                  >
                    {row.RemainingQuantity}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: "Inter ,serif", color: " #48505E" }}
                  >
                    {row.TurnOver}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: "Inter ,serif", color: " #10a760" }}
                  >
                    {row.IncreaseBy}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}