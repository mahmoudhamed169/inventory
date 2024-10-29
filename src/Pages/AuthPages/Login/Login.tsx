import { Box, Checkbox, FormControl, Stack, Typography } from "@mui/material";
import logo from "../../../assets/Logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import { PasswordTextField } from "../../../Components/AuthComponents/PasswordTextField/PasswordTextField";
import { Link } from "react-router-dom";
import GoogleSignInButton from "../../../Components/AuthComponents/GoogleSignInButton/GoogleSignInButton";
import AuthHeader from "../../../Components/AuthComponents/AuthHeader/AuthHeader";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { LoginRequest, LoginResponse } from "../../../Interfaces/Interfaces";
import { AUTHENTICATION_URLS } from "../../../Api/EndPoints";

export default function Login() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    console.log(data);
    // const toastId = toast.loading("Processing...");
    // try {
    //   const response = await axios.post<LoginResponse>(
    //     AUTHENTICATION_URLS.login,
    //     data
    //   );

    //   toast.success("Login Successfully", {
    //     id: toastId,
    //   });
    // } catch (error) {
    //   const axiosError = error as AxiosError<{ message: string }>;
    //   toast.error(axiosError.response?.data?.message || "An error occurred", {
    //     id: toastId,
    //   });
    // }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <AuthHeader title=" Welcome 👋" subTitle="Please login here" />

      <FormControl
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "90%", mx: "auto" }}
      >
        <Stack spacing={3}>
          <Box>
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
          </Box>

          <Box>
            <PasswordTextField
              label="Password"
              name="password"
              placeholder="Enter your password"
              errors={errors.password}
              register={register}
              rules={{ required: "Password is required" }}
            />
          </Box>

          <Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={"space-between"}
              spacing={5}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Checkbox sx={{ width: "24px", height: "24px" }} />
                <Typography
                  component={"p"}
                  variant="body1"
                  sx={{
                    fontFamily: "Lexend, sans-serif",
                    color: "#16151C",
                    fontWeightL: "300",
                  }}
                >
                  Remember Me
                </Typography>
              </Box>
              <Box>
                <Link
                  to={"/forget-password"}
                  style={{
                    color: "#006EC4",
                    textDecoration: "none",
                    fontFamily: "Lexend, sans-serif",
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
            </Stack>
          </Box>

          <ButtonForm name="Login" isSubmitting={isSubmitting} />
          <GoogleSignInButton isSubmitting={isSubmitting} />
        </Stack>
      </FormControl>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          alignItems: "center",
        }}
        component={"div"}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "300", color: "#A2A1A8" }}
        >
          Don’t have an account?
        </Typography>
        <Link
          to={"/register"}
          style={{
            textDecoration: "none",
            color: "#1366D9",
            fontWeight: "300",
            fontFamily: "Lexend, sans-serif",
          }}
        >
          Sign up
        </Link>
      </Box>
    </Box>
  );
}
