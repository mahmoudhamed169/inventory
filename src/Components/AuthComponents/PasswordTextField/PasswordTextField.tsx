import { useState } from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface PasswordTextFieldProps {
  placeholder: string;
  errors: any;
  name: string;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions;
  label: string;
}

export function PasswordTextField({
  placeholder,
  errors,
  name,
  register,
  rules,
  label,
}: PasswordTextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      variant="outlined"
      label={label}
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      error={!!errors}
      helperText={errors ? errors.message : ""}
      InputProps={{
        sx: {
          "& input": {
            padding: "16.5px 16px",
          },
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              sx={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
              onMouseUp={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        marginTop: "3px",
        width: "100%",
      }}
      {...register(name, rules)}
    />
  );
}
