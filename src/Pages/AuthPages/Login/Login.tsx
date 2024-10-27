import { Box, FormControl, Stack, Typography } from "@mui/material";
import logo from "../../../assets/Logo.png";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import { PasswordTextField } from "../../../Components/AuthComponents/PasswordTextField/PasswordTextField";

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

  const onSubmit = (data) => {
    console.log(data);
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
      <Box sx={{ textAlign: "center" }} component={"div"}>
        <img src={logo} alt="Logo" />
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "600", fontSize: "2rem", mt: "10px" }}
        >
          Welcome 👋
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "300", mt: "10px", color: "#A2A1A8" }}
        >
          Please login here
        </Typography>
      </Box>

      <FormControl
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100" }}
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

          <ButtonForm name="Login" isSubmitting={isSubmitting} />
        </Stack>
      </FormControl>
    </Box>
  );
}
