import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import ButtonForm from "../../AuthComponents/ButtonForm/ButtonForm";
import { apiClient, PRODUCTS_URLS } from "../../../Api/EndPoints";
import { FormTextField } from "./../../AuthComponents/FormTextField/FormTextField";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { IResponse } from "../../../Interfaces/Interfaces";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  fontFamily: "inter",
  py: 2.5,
  px: 4,
  borderRadius: "8px",
};

export default function AddTransactionModal() {
  const [open, setOpen] = React.useState(false);
  const [productList, setProductList] = React.useState([]);
  const { userData } = useContext(AuthContext);
  console.log(userData);
  const { UserName } = userData;
  // Fetch products from API
  const getAllProduct = async () => {
    try {
      let response = await apiClient.get(PRODUCTS_URLS.GetAllProducts);
      setProductList(response.data.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    control,
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  React.useEffect(() => {
    setFocus("ProductName");
  }, [setFocus]);

  React.useEffect(() => {
    getAllProduct();
  }, []);

  const onSubmit = async (data) => {
    const dataReq = { ...data, userName: UserName };
    console.log("Submitted Data:", dataReq);
    const toastId = toast.loading("Processing...");
    try {
      const response = await apiClient.post<IResponse>(
        "/InventoryTransactions/add-stock",
        dataReq
      );

      if (response.data.isSuccess) {
        toast.success("Product is added successfully", {
          id: toastId,
        });
      } else {
        toast.error(response.data.message, {
          id: toastId,
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An error occurred";
      toast.error(errorMessage, { id: toastId });
    }

    handleClose();
  };

  const options = productList.map((product) => ({
    label: product?.name,
    id: Number(product?.id),
  }));

  return (
    <div>
      <Button
        sx={{
          backgroundColor: "#1366D9",
          color: "#FFFFFF",
          padding: "10px 16px",
          textTransform: "none",
        }}
        onClick={handleOpen}
      >
        Add Stock
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            component={"h2"}
            sx={{
              color: "#383E49",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            New Stock
          </Typography>
          <FormControl
            component={"form"}
            sx={{ mt: "20px", width: "100%" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={3}>
              {/* Autocomplete for Products */}
              <Controller
                name="productId"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    options={options}
                    getOptionLabel={(option) => option.label}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    onChange={(event, newValue) => {
                      field.onChange(newValue ? newValue.id : null);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Products"
                        error={!!errors.productId}
                        helperText={errors.productId?.message}
                      />
                    )}
                  />
                )}
                rules={{ required: "Product is required" }}
              />

              {/* Quantity Field */}
              <FormTextField
                label="Quantity"
                name="quantity"
                placeholder="Enter Quantity"
                register={register}
                errors={errors.quantity}
                rules={{ required: "Quantity is required" }}
                type="number"
              />

              {/* Action buttons */}
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "end" }}>
                <Box>
                  <Button
                    onClick={handleClose}
                    sx={{
                      backgroundColor: "#ffff",
                      color: "#858D9D",
                      textTransform: "none",
                      padding: "25px",
                      borderRadius: "10px",
                      border: "1px solid #858D9D",
                      height: "56px",
                      "&:hover": {
                        backgroundColor: "#f4f4f4",
                      },
                    }}
                  >
                    Discard
                  </Button>
                </Box>
                <Box>
                  <ButtonForm name="Add Stock" isSubmitting={isSubmitting} />
                </Box>
              </Box>
            </Stack>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
