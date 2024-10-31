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
import { AUTHENTICATION_URLS } from "../../../Api/EndPoints";
import toast from "react-hot-toast";
import { emailValidationRules } from "../../../Validations/Validations";
export default function ForgetPassword() {
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ForgetPasswordIn>();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  let onSubmit = async (data: ForgetPasswordIn) => {
    try {
      let response = await axios.post(AUTHENTICATION_URLS.forgetPassword, data);
      toast.success(response?.data?.message || "Email Sent Successfully");
      navigate("/reset-password");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
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
            style={{ fontWeight: 300, fontSize: "16px", marginTop: "5px" }}
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
              rules={emailValidationRules}
              icon={<AlternateEmailIcon />}
            />

            <ButtonForm name="Send OTP" isSubmitting={isSubmitting} />
          </Stack>
        </FormControl>
      </Stack>
    </>
  );
}
