import { Button, Stack, Box } from "@mui/material";
import OverAllOrders from "./OverAllOrders";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { HeaderTable } from "../../../Components/MasterComponnets/InventoryAndOrders/Text";
import { Link } from "react-router-dom";
import Pagination from "../../../Components/MasterComponnets/Pagination/Pagination";
import AddTransactionModal from "../../../Components/MasterComponnets/AddOrderModal/AddTransactionModal";
export default function Orders() {
  const rows = Array.from({ length: 9 }, (_, index) => ({
    Products: `Product ${index + 1}`,
    OrderValue: `₹ ${(index + 1) * 10}`,
    Quantity: 30 - index,
    OrderId: 12 - index,
    ExpectedDelivery: "21/12/22",
    Status: "Confirmed",
    Action: <DeleteOutlinedIcon />,
  }));

  const cellStyle = {
    color: "#667085",
    fontWeight: 500,
    fontFamily: "Inter, serif",
  };

  return (
    <>
      <Stack spacing={3} sx={{ py: 3, ps: "16px", mx: 2 }}>
        <OverAllOrders />

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
            <HeaderTable headerTable="Transactions" />

            {/* <Button
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
            </Button> */}

            <AddTransactionModal />
          </Box>
          <TableContainer component={"table"}>
            <Table sx={{ minWidth: 660 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={cellStyle}>Products</TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Order Value
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Quantity
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Order Id
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Expected Delivery
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Status
                  </TableCell>
                  <TableCell sx={cellStyle} align="left">
                    Action
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
                      <Link
                        to={"/home/profuct-info"}
                        style={{
                          textDecoration: "none",
                          color: "#48505E",
                        }}
                      >
                        {row.Products}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{row.OrderValue}</TableCell>
                    <TableCell align="left">{row.Quantity} Packets</TableCell>
                    <TableCell align="left">{row.OrderId}</TableCell>
                    <TableCell align="left">{row.ExpectedDelivery}</TableCell>
                    <TableCell sx={{ color: "#10A760" }} align="left">
                      {row.Status}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ color: "#DA3E33", cursor: "pointer" }}
                    >
                      {row.Action}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination />
        </Box>
      </Stack>
    </>
  );
}
