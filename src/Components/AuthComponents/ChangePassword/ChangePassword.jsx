import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  emailValidationRules,
  PasswordValidation,
} from "../../../Validations/Validations";
import { PasswordTextField } from "../../../Components/AuthComponents/PasswordTextField/PasswordTextField";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { apiClient, AUTHENTICATION_URLS } from "../../../Api/EndPoints";
// import { AuthResponse,FormValuesChanePassword  } from "../../../Interfaces/Interfaces";
import  { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function ChangePassword({handleClose}) {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Processing...");

    try {
      const response = await apiClient.put(
        AUTHENTICATION_URLS.changePassword,
        data,
      );
      console.log(response);

     if (response.data.isSuccess) {
        toast.success(
          "Password change password successfully.",
          {
            id: toastId,
          }
        );
        handleClose();
       
      } else {
        toast.error(
          response?.data.message ||
            "Unable to change password. Please try again.",
          {
            id: toastId,
          }
        );
      }
    } catch (error) {
     // const axiosError = error as AxiosError<AuthResponse>;
      console.log(error)
     toast.error(
       // axiosError.response?.data?.message ||
          "An error occurred during change password .",
        {
          id: toastId,
        }
      );
    }
  };


  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={12} md={12}>
            <Stack>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
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
                    label="Old Password"
                    name="oldPassword"
                    placeholder="Enter your password"
                    errors={errors.oldPassword}
                    register={register}
                    rules={PasswordValidation(8)}
                  />

                  <PasswordTextField
                    label="New Password"
                    name="newPassword"
                    placeholder="Enter your newPassword"
                    errors={errors.newPassword}
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
                  <Button type="submit" variant="contained">
                    Change Password
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
