import { Box, Stack, Typography } from "@mui/material";

interface Props {
  header: string;
  imgLeft: any;
  imgRight: any;
  numberLeft: string;
  numberRight: string;
  titleLeft: string;
  titleRight: string;
}

export default function InventoryAndProductContent({
  header,
  imgLeft,
  imgRight,
  numberLeft,
  numberRight,
  titleLeft,
  titleRight,
}: Props) {
  return (
    <>
      <Box>
        <Stack>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "8px",
              px: 2,
              pt: 2,
              w: "100%",
            }}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: "20px", color: "#383E49" }}
            >
              {header}
            </Typography>

            <Box sx={{ display: "flex", mt: 2 }}>
              <Stack
                spacing={1}
                sx={{
                  borderRight: "1px solid #F0F1F3",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <Box component="img" src={imgLeft} sx={{}} />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "#5D6679" }}
                >
                  {numberLeft}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#444444",
                    pb: 2,
                  }}
                >
                  {titleLeft}
                </Typography>
              </Stack>

              <Stack
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <Box component="img" src={imgRight} sx={{}} />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "#5D6679" }}
                >
                  {numberRight}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#444444",
                    pb: 2,
                  }}
                >
                  {titleRight}
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box></Box>
        </Stack>
      </Box>
    </>
  );
}
