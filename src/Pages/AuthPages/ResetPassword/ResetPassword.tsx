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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { PasswordTextField } from "../../../Components/AuthComponents/PasswordTextField/PasswordTextField";
import {
  emailValidationRules,
  PasswordValidation,
} from "../../../Validations/Validations";
import { AUTHENTICATION_URLS } from "../../../Api/EndPoints";
import { AuthResponse, ResetRequest } from "../../../Interfaces/Interfaces";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
      email: "",
      otpCode: "",
    },
  });
  const onSubmit: SubmitHandler<ResetRequest> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Processing...");

    try {
      const response = await axios.post<AuthResponse>(
        AUTHENTICATION_URLS.resetPassword,
        data
      );

      if (response.data.isSuccess) {
        toast.success(
          "Password reset successfully! Please login with your new password.",
          {
            id: toastId,
          }
        );
        navigate("/login");
      } else {
        toast.error(
          response?.data.message ||
            "Unable to reset password. Please try again.",
          {
            id: toastId,
          }
        );
      }
    } catch (error) {
      const axiosError = error as AxiosError<AuthResponse>;
      toast.error(
        axiosError.response?.data?.message ||
          "An error occurred during password reset.",
        {
          id: toastId,
        }
      );
    }
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
          to="/forget-password"
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
              rules={emailValidationRules}
              label="Email"
              type="email"
              icon={<AlternateEmailIcon />}
            />

            <PasswordTextField
              label="New Password"
              name="newPassword"
              placeholder="Enter your password"
              errors={errors.password}
              register={register}
              rules={PasswordValidation(8)}
            />

            <PasswordTextField
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              errors={errors.confirmPassword}
              register={register}
              rules={{
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("newPassword") || "Passwords do not match",
              }}
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
                  />
                  {fieldState.invalid && (
                    <FormHelperText sx={{ mt: 1 }} error>
                      {fieldState.error.message}
                    </FormHelperText>
                  )}
                </Box>
              )}
            />

            <ButtonForm name="Verify" isSubmitting={isSubmitting} />
          </Stack>
        </FormControl>
      </Stack>
    </>
  );
}
