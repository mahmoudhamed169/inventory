import {
  Box,
  Button,
  FormControl,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FormTextField } from "../../AuthComponents/FormTextField/FormTextField";
import { useForm } from "react-hook-form";
import ButtonForm from "../../AuthComponents/ButtonForm/ButtonForm";
import { SquareCheckBig } from "lucide-react";

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
export default function AddOrderModal() {
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

  const onSubmit = (data) => {
    console.log(data); // Handle the submitted data here
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
            New Order
          </Typography>
          <FormControl
            component={"form"}
            sx={{ mt: "20px", width: "100%" }}
            onSubmit={handleSubmit(onSubmit)} // Updated here
          >
            <Stack spacing={1.7}>
              <FormTextFieldWithLabel
                label="Product Name"
                name="Name"
                placeholder="Enter Product Name"
                register={register}
                errors={errors.Name}
                rules={{ required: "Product Name is required" }}
              />
              <FormTextFieldWithLabel
                label="Product ID"
                name="productId"
                placeholder="Enter Product Name"
                register={register}
                errors={errors.productId}
                rules={{ required: "Product ID is required" }}
              />
              <FormTextFieldWithLabel
                label="Category"
                name="Category"
                placeholder="Enter Category"
                register={register}
                errors={errors.Category}
                rules={{ required: "Category is required" }}
              />
              <FormTextFieldWithLabel
                label="Order Value"
                name="orderValue"
                placeholder="Enter Order Value"
                register={register}
                errors={errors.orderValue}
                rules={{ required: "Order Valueis required" }}
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
                label="Buying Price"
                name="Price"
                placeholder="Enter Buying Price"
                register={register}
                errors={errors.Price}
                rules={{ required: "Buying Price is required" }}
              />

              <FormTextFieldWithLabel
                label="Date of delivery"
                name="Dateofdelivery"
                placeholder="Enter Date of delivery"
                register={register}
                errors={errors.Dateofdelivery}
                rules={{ required: "Date of delivery is required" }}
                type="date"
              />
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  //   bgcolor: "red",
                  paddingBlock: "10px",
                }}
              >
                <SquareCheckBig color="#5D6679" size={25} />
                <Typography
                  variant="body1"
                  component={"p"}
                  sx={{ color: "#858D9D" }}
                >
                  Notify on the date of delivery
                </Typography>
              </Box>
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
