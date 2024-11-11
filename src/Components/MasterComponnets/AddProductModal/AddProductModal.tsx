import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, Stack } from "@mui/material";
import { FormTextField } from "../../AuthComponents/FormTextField/FormTextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import ButtonForm from "../../AuthComponents/ButtonForm/ButtonForm";
import ImageDropzone from "./ImageDropzone";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { apiClient, PRODUCTS_URLS } from "../../../Api/EndPoints";
import { IResponse } from "../../../Interfaces/Interfaces";

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

export default function AddProductModal() {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  React.useEffect(() => {
    setFocus("ProductName");
  }, [setFocus]);

  const appendToFormData = (data) => {
    const formData = new FormData();

    const expiryDate = new Date(data.ExpiryDate);
    formData.append("Name", data.Name);
    formData.append("Category", data.Category);

    const priceValue = parseFloat(data.Price).toFixed(1);
    formData.append("Price", priceValue);

    formData.append("Quantity", data.Quantity);
    formData.append("Unit", data.Unit);
    formData.append("ExpiryDate", expiryDate.toISOString());
    formData.append("Threshold", data.Threshold);
    formData.append("Image", data.Image[0]);

    return formData; // Return the FormData object
  };

  const onSubmit: SubmitHandler = async (data) => {
    const toastId = toast.loading("Processing...");
    const productData = appendToFormData(data);
    console.log(data);
    console.log(productData);

    try {
      const response = await apiClient.post<IResponse>(
        PRODUCTS_URLS.AddNewProduct,
        productData
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
        Add Product
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
            New Product
          </Typography>
          <FormControl
            component={"form"}
            sx={{ mt: "20px", width: "100%" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={1.7}>
              {/* Form fields for product details */}

              {/* <Box
                sx={{ display: "flex", justifyContent: "center", gap: "20px" }}
              >
                <Box
                  sx={{
                    width: "85px",
                    height: "85px",
                    border: "2px dashed #858D9D",
                    borderRadius: "10px",
                  }}
                ></Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#858D9D",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      gap: "5px",
                    }}
                  >
                    <span>Drag image here</span>
                    <span> Or</span>
                    <span style={{ color: "#448DF2" }}>Browse image</span>
                  </Typography>
                </Box>
              </Box> */}

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ImageDropzone
                  control={control}
                  name="Image"
                  rules={{ required: "Image is required" }}
                />
              </Box>
              <FormTextFieldWithLabel
                label="Product Name"
                name="Name"
                placeholder="Enter Product Name"
                register={register}
                errors={errors.Name}
                rules={{ required: "Product Name is required" }}
              />

              {/* <FormTextFieldWithLabel
                label="Product ID"
                name="ProductId"
                placeholder="Enter Product ID"
                register={register}
                errors={errors.ProductId}
                rules={{ required: "Product ID is required" }}
              /> */}

              <FormTextFieldWithLabel
                label="Category"
                name="Category"
                placeholder="Enter Category"
                register={register}
                errors={errors.Category}
                rules={{ required: "Category is required" }}
              />

              <FormTextFieldWithLabel
                label="Buying Price"
                name="Price"
                placeholder="Enter Buying Price"
                register={register}
                errors={errors.Price}
                rules={{ required: "Buying Price is required" }}
              />

              <FormTextFieldWithLabel
                label="Quantity"
                name="Quantity"
                placeholder="Enter Quantity"
                register={register}
                errors={errors.Quantity}
                rules={{ required: "Quantity is required" }}
                type="number"
              />

              <FormTextFieldWithLabel
                label="Unit"
                name="Unit"
                placeholder="Enter Unit"
                register={register}
                errors={errors.Unit}
                rules={{ required: "Unit is required" }}
              />

              <FormTextFieldWithLabel
                label="Expiry Date"
                name="ExpiryDate"
                placeholder="Enter Expiry Date"
                register={register}
                errors={errors.ExpiryDate}
                rules={{ required: "Expiry Date is required" }}
                type="date"
              />

              <FormTextFieldWithLabel
                label="Threshold Value"
                name="Threshold"
                placeholder="Enter Threshold Value"
                register={register}
                errors={errors.Threshold}
                rules={{ required: "Threshold Value is required" }}
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
                  <ButtonForm name="Add Product" isSubmitting={isSubmitting} />
                </Box>
              </Box>
            </Stack>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}

const FormTextFieldWithLabel = ({ label, ...props }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
    <Typography
      component={"label"}
      sx={{
        width: "30%",
        color: "#48505E",
        fontWeight: "500",
        fontSize: "17px",
      }}
    >
      {label}
    </Typography>
    <Box sx={{ width: "70%" }}>
      <FormTextField {...props} />
    </Box>
  </Box>
);
