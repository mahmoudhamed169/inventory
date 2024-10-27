import { Button, CircularProgress } from "@mui/material";

interface ButtonFormProps {
  name: string;
  isSubmitting?: boolean;
}

export default function ButtonForm({
  name,
  isSubmitting = false,
}: ButtonFormProps) {
  return (
    <Button
      variant="contained"
      fullWidth
      type="submit"
      disabled={isSubmitting}
      sx={{
        backgroundColor: "#006EC4",
        color: "#ffff",
        textTransform: "none",
        padding: "20px",
        borderRadius: "10px",

        height: "56px",
        "&:hover": {
          backgroundColor: "#0039CB",
        },
        "&:disabled": {
          backgroundColor: "#0039CB",
          color: "#ffff",
        },
      }}
      startIcon={
        isSubmitting ? <CircularProgress size={20} color="inherit" /> : null
      }
    >
      {isSubmitting ? "Sending..." : name}
    </Button>
  );
}
