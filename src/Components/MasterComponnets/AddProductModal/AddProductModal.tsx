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
  } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  React.useEffect(() => {
    setFocus("ProductName");
  }, [setFocus]);

  const onSubmit: SubmitHandler = async (data) => {
    console.log("Form Data:", data);

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

              <Box
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
              </Box>
              <FormTextFieldWithLabel
                label="Product Name"
                name="ProductName"
                placeholder="Enter Product Name"
                register={register}
                errors={errors.ProductName}
                rules={{ required: "Product Name is required" }}
              />

              <FormTextFieldWithLabel
                label="Product ID"
                name="ProductId"
                placeholder="Enter Product ID"
                register={register}
                errors={errors.ProductId}
                rules={{ required: "Product ID is required" }}
              />

              <FormTextFieldWithLabel
                label="Category"
                name="category"
                placeholder="Enter Category"
                register={register}
                errors={errors.category}
                rules={{ required: "Category is required" }}
              />

              <FormTextFieldWithLabel
                label="Buying Price"
                name="BuyingPrice"
                placeholder="Enter Buying Price"
                register={register}
                errors={errors.BuyingPrice}
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
                type="number"
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
                name="ThresholdValue"
                placeholder="Enter Threshold Value"
                register={register}
                errors={errors.ThresholdValue}
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
