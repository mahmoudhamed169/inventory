import { Box, Stack, Typography } from "@mui/material";

interface Props {
  header: string;
  numberLeft: string;
  numberRight: string;
  titleLeft: string;
  titleRight: string;
  icon: React.ElementType;
  iconTwo: React.ElementType;
}

export default function InventoryAndProductContent({
  icon: IconComp,
  iconTwo: IconCompTwo,
  header,
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
                {/* <Box component="img" src={imgLeft} /> */}

                <IconComp/>

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
                    fontSize: {xs:"14px",md:"12px"},
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
                {/* <Box component="img" src={imgRight} sx={{}} /> */}
                <IconCompTwo/>
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
                    fontSize: {xs:"14px",md:"12px"},
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
