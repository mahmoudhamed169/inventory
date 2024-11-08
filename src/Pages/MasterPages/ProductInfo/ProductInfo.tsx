import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { PRODUCTS_URLS, apiClient } from "../../../Api/EndPoints";
import TableForProductInfo from "../../../Components/MasterComponnets/TableForProductInfo/TableForProductInfo";
import NavBreadcrumb from "../../../Components/shared/NavBreadcrumb/NavBreadcrumb";
import { productInfoResponse } from "../../../Interfaces/ProductInfoResponse/ProductInfoResponse";
import { RowData } from "../../../Interfaces/TableForProductInfo.interface/TableForProductInfo.interface";
import Styles from "./ProductInfo.module.css";
import { rows } from "./ProductInfoData";

export default function ProductInfo() {
  const location = useLocation();
  const productId = location.state?.productId;

  const [listOfProductInfoData, setlLstOfProductInfoData] =
    useState<productInfoResponse | null>(null);

  const getProductInfoData = async () => {
    try {
      const response = await apiClient.get(
        PRODUCTS_URLS.getProductByID(productId)
      );
      setlLstOfProductInfoData(response.data.data);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    getProductInfoData();
  }, []);

  const rowData: RowData[] = [
    {
      name: "Product name",
      Data: listOfProductInfoData?.name || "No Data to Show",
    },
    { name: "Product ID", Data: productId?.toString() || "No Data to Show" },
    {
      name: "Product category",
      Data: listOfProductInfoData?.categoryName || "No Data to Show",
    },
    {
      name: "Expiry Date",
      Data: listOfProductInfoData?.expiryDate.slice(0, 10) || "No Data to Show",
    },
    {
      name: "Threshold Value",
      Data: (listOfProductInfoData?.threshold ?? 0).toString(),
    },
  ];

  const rowData2: RowData[] = [
    {
      name: "Product Price",
      Data: listOfProductInfoData?.price || "No Data to Show",
    },
    {
      name: "Product Quantity",
      Data: listOfProductInfoData?.quantity || "No Data to Show",
    },
    { name: "On the way", Data: "15" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f0f1f3",
        padding: { xs: "15px 20px", sm: "20px 25px", md: "22px 30px" },
        gap: { xs: "10px", md: "15px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "#fff",
          padding: { xs: "15px 20px", sm: "20px 25px", md: "22px 30px" },
          borderRadius: "0.5rem",
        }}
      >
        {/* --------------- Header Section with Title and Action Buttons--------------- */}
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            gap: { xs: "10px", md: "0" },
            paddingBottom: "1rem",
            borderBottom: " 1px solid #F0F1F3",
          }}
          component="div"
        >
          {/* --------------- Title --------------- */}

          <Box component="div">
            <Typography
              variant="h5"
              textAlign={{ xs: "center", md: "left" }}
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
              }}
            >
              <NavBreadcrumb MainTitle="Inventory" title="Overiew" />
              
            </Typography>
          </Box>

          {/* --------------- Action Buttons --------------- */}
          <Box sx={{ display: "flex", gap: { xs: "0.5rem", md: "0.75rem" } }}>
            {["Edit", "Download"].map((label) => (
              <Button
                key={label}
                sx={{
                  color: "#5D6679",
                  borderColor: "#5D6679",
                  fontSize: { xs: "0.75rem", sm: "1rem" },
                }}
                variant="outlined"
                startIcon={label === "Edit" ? <EditIcon /> : null}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Stack>

        {/* --------------- Main container for product information layout --------------- */}
        <Box sx={{ marginTop: "2rem" }}>
          <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* --------------- Primary & Supplier Details --------------- */}
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Stack spacing={1.5}>
                <TableForProductInfo title="Primary Details" rows={rowData} />
                <TableForProductInfo
                  title="Supplier Details"
                  rows={rows.rowName}
                />
              </Stack>
            </Grid2>

            {/* --------------- Product Image & Stock Info --------------- */}
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box
                sx={{ textAlign: "center", marginY: { xs: "1.5rem", md: 0 } }}
              >
                <img
                  className={Styles["product-imge"]}
                  src={listOfProductInfoData?.imageUrl}
                  alt="product-imge"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TableForProductInfo rows={rowData2} />
              </Box>
            </Grid2>

            {/* --------------- Stock Locations --------------- */}
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Stack>
                <TableForProductInfo
                  title="Stock Locations"
                  rows={rows.rowBranch}
                  Stock={true}
                />
              </Stack>
            </Grid2>
          </Grid2>
        </Box>
      </Stack>
    </Box>
  );
}
