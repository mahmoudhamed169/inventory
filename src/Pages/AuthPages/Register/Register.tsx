import { Box, FormControl, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import GoogleSignInButton from "../../../Components/AuthComponents/GoogleSignInButton/GoogleSignInButton";
import { PasswordTextField } from "../../../Components/AuthComponents/PasswordTextField/PasswordTextField";
import logo from "../../../assets/Logo.png";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./Register.module.css";
import AuthHeader from "../../../Components/AuthComponents/AuthHeader/AuthHeader";
import {
  emailValidationRules,
  PasswordValidation,
  UserNameValidation,
} from "../../../Validations/Validations";
import { AuthResponse, RegisterRequest } from "../../../Interfaces/Interfaces";
import toast from "react-hot-toast";
import { AUTHENTICATION_URLS } from "../../../Api/EndPoints";
import axios, { AxiosError } from "axios";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    watch,
  } = useForm<RegisterRequest>();
  const [isRegisterSubmitting, setIsRegisterSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  useEffect(() => {
    setFocus("userName");
  }, [setFocus]);

  const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
    console.log(data);
    setIsRegisterSubmitting(true);
    const toastId = toast.loading("Processing...");

    try {
      const response = await axios.post<AuthResponse>(
        AUTHENTICATION_URLS.regitser,
        data
      );

      if (response.data.isSuccess) {
        toast.success("Registered successfully! Please log in.", {
          id: toastId,
        });
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.", {
          id: toastId,
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "An error occurred during registration.";
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsRegisterSubmitting(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/*  ------------------ Logo and heading section  ------------------ */}

        <AuthHeader
          title={"Create an account"}
          subTitle={"Start your 30-day free trial."}
        />

        {/*  ------------------ Form container  ------------------ */}
        <FormControl
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100" }}
        >
          <Stack spacing={3}>
            {/*  ------------------ Name input field  ------------------ */}
            <Box>
              <FormTextField
                name="userName"
                placeholder="Enter your userName"
                register={register}
                errors={errors.userName}
                rules={UserNameValidation(3, 15)}
                label="User Name"
                type="text"
                icon={<PersonIcon />}
              />
            </Box>

            {/*  ------------------ Email input field  ------------------ */}
            <Box>
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
            </Box>

            {/*  ------------------ Password input field  ------------------ */}
            <Box>
              <PasswordTextField
                label="Password"
                name="password"
                placeholder="Create a password"
                errors={errors.password}
                register={register}
                rules={PasswordValidation(8)}
              />
            </Box>

            <Box>
              <PasswordTextField
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm your password"
                errors={errors.confirmPassword}
                register={register}
                rules={{
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                }}
              />
            </Box>

            {/*  ------------------ Submit button for form  ------------------ */}
            <ButtonForm
              name="Get started"
              isSubmitting={isRegisterSubmitting}
            />

            {/*  ------------------ Google Sign-Up Button ------------------ */}
            <GoogleSignInButton />
          </Stack>
        </FormControl>

        {/*  ------------------ Login link for existing users  ------------------ */}
        <Box sx={{ textAlign: "center" }} component={"div"}>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: "400",
              mt: "0.5rem",
              color: "#667085",
            }}
          >
            Already have an account?
            <Link to="/login" className={Styles["login-link"]}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
