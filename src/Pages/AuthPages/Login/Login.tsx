import { Box, Checkbox, FormControl, Stack, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import {
  AuthResponse,
  LoginRequest,
  LoginResponse,
} from "../../../Interfaces/Interfaces";
import { AUTHENTICATION_URLS } from "../../../Api/EndPoints";

import logo from "../../../assets/Logo.png";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import { PasswordTextField } from "../../../Components/AuthComponents/PasswordTextField/PasswordTextField";
import GoogleSignInButton from "../../../Components/AuthComponents/GoogleSignInButton/GoogleSignInButton";
import AuthHeader from "../../../Components/AuthComponents/AuthHeader/AuthHeader";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

export default function Login() {
  const { saveUserData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<LoginRequest>();
  const navigate = useNavigate();

  const [isLoginSubmitting, setIsLoginSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    setIsLoginSubmitting(true);
    const toastId = toast.loading("Processing...");

    try {
      const response = await axios.post<AuthResponse>(
        AUTHENTICATION_URLS.login,
        data
      );
      await toast.success("Login Successfully", {
        id: toastId,
      });
      if (response.data.isSuccess) {
        await localStorage.setItem("token", response.data.data);
        saveUserData();
        navigate("/home/dashboard");
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An error occurred";
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsLoginSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleSubmitting(true);

    // Placeholder for Google sign-in logic
    setTimeout(() => {
      setIsGoogleSubmitting(false);
      toast.success("Google Sign-In Successfully");
    }, 2000); // Simulate async Google Sign-In process
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
                    fontWeight: "300",
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

          <ButtonForm name="Login" isSubmitting={isLoginSubmitting} />
          <GoogleSignInButton
            isSubmitting={isGoogleSubmitting}
            onClick={handleGoogleSignIn}
          />
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
