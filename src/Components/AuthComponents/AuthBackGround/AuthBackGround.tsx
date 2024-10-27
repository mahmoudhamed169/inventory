import { Box } from "@mui/material";
import image from "../../../assets/Barcode-amico 1.png";

export default function AuthBackground() {
  return (
    <Box
      sx={{
        height: "calc(100% - 35px)",
        width: "calc(100% - 42px)",
        margin: "21px",

        boxSizing: "border-box",
        overflow: "hidden",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#006EC40D",
      }}
    >
      <img
        src={image}
        alt="Background"
        style={{
          width: "55%",
          objectFit: "cover",
          borderRadius: "2rem",
        }}
      />
    </Box>
  );
}
