import {
  Box,
  FormControl,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { PasswordTextField } from "../../../Components/AuthComponents/PasswordTextField/PasswordTextField";

export default function ResetPassword() {
  const [otp, setOtp] = React.useState("");
  const {
    control,
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <>
      <Stack
        sx={{
          width: "90%",
          fontFamily: "Lexend, sans-serif",
        }}
        spacing={3}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "rgba(22, 21, 28, 1)",
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "16px" }} />
          <Typography variant="body1" component="span">
            Back
          </Typography>
        </Link>
        <Box>
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "600", fontSize: "27px", lineHeight: "36px" }}
          >
            Enter OTP
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              marginTop: "5px",
              fontWeight: "300",
              fontSize: "14px",
              lineHeight: "24px",
              color: "rgba(162, 161, 168, 1)",
            }}
          >
            Enter your OTP , and all data to reset your password
          </Typography>
        </Box>
        <FormControl
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <Stack spacing={3}>
            <FormTextField
              name="email"
              placeholder="Enter your email"
              register={register}
              errors={errors.email}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
              label="Email"
              type="email"
              icon={<AlternateEmailIcon />}
            />

            <PasswordTextField
              label="Password"
              name="password"
              placeholder="Enter your password"
              errors={errors.password}
              register={register}
              rules={{ required: "Password is required" }}
            />

            <PasswordTextField
              label="Confirm Password"
              name="password"
              placeholder="Enter your password"
              errors={errors.password}
              register={register}
              rules={{ required: "Password is required" }}
            />

            <Controller
              name="otp"
              control={control}
              rules={{
                validate: (value) =>
                  value.length === 6 || "OTP must be 6 digits",
              }}
              render={({ field, fieldState }) => (
                <Box>
                  <MuiOtpInput
                    sx={{
                      "& .MuiInputBase-root": {
                        width: "60px",
                      },
                      gap: "20px",
                    }}
                    {...field}
                    length={6}
                    onChange={handleChange}
                  />
                  {fieldState.invalid && (
                    <FormHelperText sx={{ mt: 1 }} error>
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </Box>
              )}
            />

            <ButtonForm name="Verify" isSubmitting={false} />
          </Stack>
        </FormControl>
      </Stack>
    </>
  );
}
