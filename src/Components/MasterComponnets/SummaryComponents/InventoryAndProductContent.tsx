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
              padding: { xs: "16px", md: "20px 16px" },
              height: { xs: "auto", md: "10.2rem" },
              w: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, serif",
                fontWeight: 500,
                fontSize: "20px",
                color: "#383E49",
              }}
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
                <Box component="img" src={imgLeft} />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inter, serif",
                    fontWeight: 600,
                    color: "#5D6679",
                  }}
                >
                  {numberLeft}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "12px",
                    color: "#444444",
                    fontFamily: "Inter, serif",
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
                  sx={{
                    fontFamily: "Inter, serif",
                    fontWeight: 600,
                    color: "#5D6679",
                  }}
                >
                  {numberRight}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "12px",
                    color: "#444444",
                    fontFamily: "Inter, serif",
                    pb: 2,
                  }}
                >
                  {titleRight}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
