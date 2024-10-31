import { Box, Button, FormControl, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ForgetPasswordIn } from "../../../Interfaces/Interfaces";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useEffect } from "react";
export default function ForgetPassword() {
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  let onSubmit = async (data) => {
    try {
      // let response = await axios.post(,data)
      // navigate("/reset-password")
    } catch (error) {}
  };

  return (
    <>
      <Stack sx={{ w: "90%" }} spacing={3}>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosIcon
            style={{ fontWeight: 300, fontSize: "16px", marginTop: "3px" }}
          />
          <Typography
            sx={{
              fontWeight: 300,
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
            }}
            variant="body1"
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

        <FormControl
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <Stack spacing={3}>
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
              icon={<AlternateEmailIcon />}
            />

            <ButtonForm name="Send OTP" isSubmitting={isSubmitting} />
          </Stack>
        </FormControl>
      </Stack>
    </>
  );
}
