import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import TableForProductInfo from "../../../Components/MasterComponnets/TableForProductInfo/TableForProductInfo";
import productImge from "../../../assets/Product-info-img.png";
import Styles from "./ProductInfo.module.css";

function createData(name: string, Data: string) {
  return { name, Data };
}

const rows = {
  row1: [
    createData("Product name", "Maggi"),
    createData("Product ID", "456567"),
    createData("Product category", "Instant food"),
    createData("Expiry Date", "13/4/23"),
    createData("Threshold Value", "12"),
  ],
  row2: [
    createData("Supplier name", "Ronald Martin"),
    createData("Contact Number", "98789 86757"),
  ],
  row3: [
    createData("Opening Stock", "40"),
    createData("Remaining Stock", "34"),
    createData("On the way", "15"),
    createData("Threshold value", "12"),
  ],
  row4: [
    createData("Opening Stock", "40"),
    createData("Remaining Stock", "34"),
    createData("On the way", "15"),
    createData("Threshold value", "12"),
  ],
};

export default function ProductInfo() {
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
            paddingBlock: "1rem",
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
              Overiew
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
                <TableForProductInfo title="Primary Details" rows={rows.row1} />
                <TableForProductInfo
                  title="Supplier Details"
                  rows={rows.row2}
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
                  src={productImge}
                  alt="product-imge"
                />
              </Box>

              <Box
                sx={{
                  marginTop: { xs: "1.5rem", md: "2rem" },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TableForProductInfo rows={rows.row3} />
              </Box>
            </Grid2>

            {/* --------------- Stock Locations --------------- */}
            <Grid2 size={{ xs: 12, md: 8 }} sx={{ marginTop: "1.5rem" }}>
              <Stack>
                <TableForProductInfo
                  title="Stock Locations"
                  rows={rows.row4}
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