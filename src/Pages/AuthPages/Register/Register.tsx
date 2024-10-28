import {
  Box,
  Button,
  FormControl,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormTextField } from "../../../Components/AuthComponents/FormTextField/FormTextField";
import { PasswordTextField } from "../../../Components/AuthComponents/PasswordTextField/PasswordTextField";
import ButtonForm from "../../../Components/AuthComponents/ButtonForm/ButtonForm";
import logo from "../../../assets/Logo.png";
import GoogleIcon from "../../../Icones/GoogleIcon";

export default function Register() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
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
        <Box sx={{ textAlign: "center" }} component={"div"}>
          <img src={logo} alt="Logo-register" />
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "600", fontSize: "2rem", mt: "10px" }}
          >
            Create an account
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: "300", mt: "10px", color: "#A2A1A8" }}
          >
            Start your 30-day free trial.
          </Typography>
        </Box>

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
                name="name"
                placeholder="Enter your name"
                register={register}
                errors={errors.name}
                rules={{
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z\s'-]{3,}$/,
                    message: "Invalid Name",
                  },
                }}
                label="Name"
                type="text"
              />
            </Box>

            {/*  ------------------ Email input field  ------------------ */}
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
                rules={{ required: "Password is required" }}
              />
            </Box>

            {/*  ------------------ Submit button for form  ------------------ */}
            <ButtonForm name="Get started" isSubmitting={isSubmitting} />

            {/*  ------------------ Google Sign-Up Button ------------------ */}
            <Button
              sx={{
                paddingBlock: "0.6rem",
                color: " #48505E",
                fontWeight: "500",
                fontFamily: "Inter",
                borderColor: "#D0D5DD",
              }}
              variant="outlined"
            >
              <GoogleIcon />
              <Typography sx={{ paddingInline: ".5rem" }} component="span">
                Sign up with Google
              </Typography>
            </Button>
          </Stack>
        </FormControl>

        {/*  ------------------ Login link for existing users  ------------------ */}
        <Box sx={{ textAlign: "center" }} component={"div"}>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: "300",
              mt: "0.5rem",
              color: " #667085",
              fontSize: "0.875rem",
            }}
          >
            Already have an account?
            <Link
              sx={{ color: "#0F50AA", marginLeft: "0.4rem", fontWeight: "500" }}
              underline="hover"
              component="a"
              href="login"
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
