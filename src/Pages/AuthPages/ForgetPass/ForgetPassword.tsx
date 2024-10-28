import { Box, Button, FormControl, Typography } from "@mui/material";

import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ForgetPasswordIn } from "../../../Interfaces/Interfaces";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export default function ForgetPassword() {
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });
  let onSubmit = async (data) => {
    try {
      // let response = await axios.post(,data)
      // navigate("/reset-password")
    } catch (error) {}
  };
  return (
    <>
      <Box
        sx={{ w: "90%", display: "flex", flexDirection: "column", margin: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            transform: "translateX(-7px)",
          }}
        >
          <ChevronLeftIcon style={{ fontWeight: 300 }} />
          <Typography
            sx={{ fontWeight: 300, fontFamily: "Lexend, sans-serif" }}
            variant="body1"
            onClick={() => navigate(-1)}
          >
            Back
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#16151C",
              fontWeight: 600,
              fontSize: "30px",
              fontFamily: "Lexend, sans-serif",
              my: 2,
            }}
          >
            Forgot Password
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#A2A1A8",
              fontWeight: 300,
              fontFamily: "Lexend, sans-serif",
            }}
          >
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </Typography>
        </Box>

        <Box>
          <FormControl onSubmit={handleSubmit(onSubmit)} sx={{ width: "100%" }}>
            <Box sx={{ my: 4 }}>
              <FormTextField
                placeholder="Enter Your Email"
                register={register}
                name="email"
                type="email"
                errors={errors.email}
                label="Email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid email address",
                  },
                }}
              />
            </Box>

            <ButtonForm name="Send OTP" isSubmitting={isSubmitting} />
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
