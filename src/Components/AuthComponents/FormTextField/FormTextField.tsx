import { InputAdornment, TextField } from "@mui/material";
import { ReactNode } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface FormTextFieldType {
  placeholder?: string;
  errors: any;
  name: string;
  register?: any;
  rules?: RegisterOptions;
  icon?: ReactNode;
  type?: string;
  label?: string;
}

export const FormTextField = ({
  placeholder,
  errors,
  name,
  register,
  rules,
  label,
  icon = null,
  type = "text",
}: FormTextFieldType) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      type={type}
      error={!!errors}
      helperText={errors ? errors.message : ""}
      label={label}
      InputProps={{
        sx: {
          "& input": {
            padding: "16.5px 16px",
          },
        },
        endAdornment: icon ? (
          <InputAdornment
            sx={{ cursor: "pointer" }}
            onMouseUp={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
            position="end"
          >
            {icon}
          </InputAdornment>
        ) : null,
      }}
      sx={{
        marginTop: "3px",
        width: "100%",
      }}
      {...register(name, rules)}
    />
  );
};
