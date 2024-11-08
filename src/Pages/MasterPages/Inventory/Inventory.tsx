import {
  Box,
  FormControl,
  Grid2,
  InputLabel,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import OverallInventory from "./OverallInventory";
import AddProductModal from "../../../Components/MasterComponnets/AddProductModal/AddProductModal";
import { Link } from "react-router-dom";
import Pagination from "../../../Components/MasterComponnets/Pagination/Pagination";
import { HeaderTable } from "../../../Components/MasterComponnets/InventoryAndOrders/Text";
import { apiClient, PRODUCTS_URLS } from "../../../Api/EndPoints";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import NoData from "../../../Components/shared/NoData/NoData";

export default function Inventory() {
  const cellStyle = {
    color: "#667085",
    fontWeight: 500,
    fontFamily: "Inter, serif",
  };
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [nameValue, setNameValue] = useState("");
  const [availabilityValue, setAvailabilityValue] = useState();
  let getAllProduct = async (
    page: number,
    pageSize: number,
    nameInput: string,
    available?: number | string
  ) => {
    try {
      let response = await apiClient.get(PRODUCTS_URLS.GetAllProducts, {
        params: {
          PageNumbar: page,
          PageSize: pageSize,
          Name: nameInput,
          Available: available,
        },
      });
      console.log(response.data.data.totalNumber);

      setProductList(response.data.data.items);
      // setTotalPages(Math.ceil(response.data.data.totalNumber / pageSize));
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getAllProduct(pageSize, page);
  // }, [page, pageSize]);
  useEffect(() => {
    getAllProduct(page,pageSize,"");
  }, [page,pageSize]);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };
  const getNameValue = (input: any) => {
    setNameValue(input.target.value);
    getAllProduct(page, pageSize, input.target.value, availabilityValue);
  };
  const getAvailabilityValue = (input: any) => {
    setAvailabilityValue(input.target.value);
    getAllProduct(page, pageSize,nameValue, input.target.value);
  };

  return (
    <>
      <Stack spacing={3} sx={{ py: 3, ps: "16px", mx: 2 }}>
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
              my: 3,
              paddingInline: "16px",
            }}
          >
            <Grid2 container>
              <Grid2 size={{ xs: 12, md: 1 }}></Grid2>
              <Grid2 size={{ xs: 12, md: 5 }}></Grid2>
              <Grid2 size={{ xs: 12, md: 1 }}></Grid2>

              <Grid2 size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                  }}
                ></Box>
              </Grid2>
            </Grid2>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "start", md: "space-between" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ mt: 1, py: { xs: 2, md: 0 } }}>
                <HeaderTable headerTable="Products" />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    "& .MuiTextField-root": { width: "45ch" },
                    display: "flex",
                    justifyContent: { xs: "flex-start", md: "center" },
                  }}
                >
                  <Box>
                    <TextField
                      id="outlined-size-small"
                      sx={{
                        ".css-16wblaj-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            padding: "14px",
                          },
                        bgcolor: "#f5f6f8",
                      }}
                      type="text"
                      placeholder="Search by Name ..."
                      onChange={getNameValue}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{ minWidth: 150, maxWidth: 360, my: { xs: 2, md: 0 } }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Filters
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Filters"
                      onChange={getAvailabilityValue}
                      sx={{
                        ".css-w76bbz-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                          { padding: "12px  14px 16px 14px" },
                      }}
                    >
                      <MenuItem value={0}>In Stock</MenuItem>
                      <MenuItem value={1}>Out Of Stock</MenuItem>
                      <MenuItem value={2}>Low Stock</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <AddProductModal />
              </Box>          </Box>
          </Box>

          <TableContainer component={"table"}>
            <Table sx={{ minWidth: 660 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ ...cellStyle, fontSize: { xs: "12px", md: "14px" } }}
                  >
                    Products
                  </TableCell>
                  <TableCell
                    sx={{ ...cellStyle, fontSize: { xs: "12px", md: "14px" } }}
                    align="left"
                  >
                    Buying Price
                  </TableCell>
                  <TableCell
                    sx={{ ...cellStyle, fontSize: { xs: "12px", md: "14px" } }}
                    align="left"
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    sx={{ ...cellStyle, fontSize: { xs: "12px", md: "14px" } }}
                    align="left"
                  >
                    Threshold Value
                  </TableCell>
                  <TableCell
                    sx={{ ...cellStyle, fontSize: { xs: "12px", md: "14px" } }}
                    align="left"
                  >
                    Expiry Date
                  </TableCell>
                  <TableCell
                    sx={{ ...cellStyle, fontSize: { xs: "12px", md: "14px" } }}
                    align="left"
                  >
                    Availability
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productList && productList.length > 0 ? (
                  productList.map((row: any) => (
                    <TableRow
                      key={row?.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: { xs: "12px", md: "14px" } }}
                      >
                        <Link
                          to={"/home/profuct-info"}
                          style={{
                            textDecoration: "none",
                            color: "#48505E",
                          }}
                          state={{ productId: row.id }}
                        >
                          {row?.name}
                        </Link>
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          color: "#48505E",
                        }}
                        align="left"
                      >
                        ₹{row?.price}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          color: "#48505E",
                        }}
                        align="left"
                      >
                        {row?.quantity} Packets
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          color: "#48505E",
                        }}
                        align="left"
                      >
                        {row?.threshold}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          color: "#48505E",
                        }}
                        align="left"
                      >
                        {new Date(row?.expiryDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell
                        sx={{
                          color:
                            row?.available === "InStock"
                              ? "#10A760"
                              : row?.available === "OutOfStock"
                              ? "#DA3E33"
                              : row?.available === "LowStock"
                              ? "#E19133"
                              : "inherit",
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                        align="left"
                      >
                        {row?.available}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <NoData />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
          //  count={totalPages}
          //  page={page}
          //  onPageChange={handleChangePage}
        
          />
        </Box>
      </Stack>
    </>
  );
}
