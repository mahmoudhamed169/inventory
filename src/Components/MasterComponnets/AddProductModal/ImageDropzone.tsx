import React from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export default function ImageDropzone({ control, name, rules }) {
  return (
    <Controller
      name="Image"
      control={control}
      rules={rules}
      render={({ field: { onChange }, fieldState: { error } }) => {
        const { getRootProps, getInputProps } = useDropzone({
          accept: "image/*",
          onDrop: (acceptedFiles) => {
            onChange(acceptedFiles); // Pass the files to react-hook-form
          },
        });

        return (
          <Box
            {...getRootProps()}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              border: "2px dashed #858D9D",
              borderRadius: "10px",
              width: "100%",
              height: "100px",
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#858D9D", textAlign: "center" }}>
                Drag image here
              </Typography>
              <Typography sx={{ color: "#858D9D", textAlign: "center" }}>
                or
              </Typography>
              <Typography sx={{ color: "#448DF2", textAlign: "center" }}>
                Browse image
              </Typography>
            </Box>
            {error && (
              <Typography color="error" sx={{ textAlign: "center" }}>
                {error.message}
              </Typography>
            )}
          </Box>
        );
      }}
    />
  );
}
