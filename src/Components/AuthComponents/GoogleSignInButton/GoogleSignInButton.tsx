import { Button, CircularProgress } from "@mui/material";

import GoogleIcones from "../../../Icones/GoogleIcones";

interface GoogleSignInButtonProps {
  isSubmitting?: boolean;
}

export default function GoogleSignInButton({
  isSubmitting = false,
}: GoogleSignInButtonProps) {
  return (
    <Button
      variant="outlined"
      fullWidth
      type="button"
      disabled={isSubmitting}
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#344054",
        textTransform: "none",
        padding: "15px",
        borderRadius: "20px",
        height: "50px",
        borderColor: "#D0D5DD",
        "&:hover": {
          backgroundColor: "#F5F7FA",
          borderColor: "#D0D5DD",
        },
        "&:disabled": {
          backgroundColor: "#FFFFFF",
          color: "#A0A4A8",
          borderColor: "#E0E3E7",
        },
      }}
      startIcon={
        isSubmitting ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <GoogleIcones />
        )
      }
    >
      {isSubmitting ? "Signing in..." : "Sign in with Google"}
    </Button>
  );
}
