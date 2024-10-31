import { Box, Stack, Typography } from "@mui/material";
interface Card {
  colorProp: string;
  headerCard: string;
  firNumber: string;
  secNumber: string;
  firstText: string;
  secText: string;
}
export default function CardInventory({
  colorProp,
  headerCard,
  firNumber,
  secNumber,
  firstText,
  secText,
}: Card) {
  const detailsHeader = {
    color: colorProp,
    fontWeight: 600,
  };
  return (
    <>
      <Stack spacing={2} >
        <Typography variant="body1" sx={detailsHeader}>
          {headerCard}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#5D6679",
              fontWeight: 600,
              fontFamily: "Inter, serif",
            }}
          >
            {firNumber}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#5D6679",
              fontWeight: 600,
              fontFamily: "Inter, serif",
            }}
          >
            {secNumber}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#858D9D",
              fontSize: "14px",
              fontFamily: "Inter, serif",
            }}
          >
            {firstText}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#858D9D",
              fontSize: "14px",
              fontFamily: "Inter, serif",
            }}
          >
            {secText}
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
