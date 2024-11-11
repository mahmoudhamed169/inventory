import { Box, Stack, Typography } from "@mui/material";

interface FirstColum {
  headerText: string;
  number: string;
  lastText: string;
}

interface Card {
  colorProp: string;
  headerCard: string;
  firNumber: string;
  secNumber: string;
  firstText: string;
  secText: string;
}

export const FirstColumn = ({ headerText, number, lastText }: FirstColum) => {
  return (
    <>
      <Stack spacing={2}>
        <Typography
          variant="body1"
          sx={{
            color: "#1570EF",
            fontWeight: 600,
            fontFamily: "Inter, serif",
          }}
        >
          {headerText}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#5D6679",
            fontWeight: 600,
            fontFamily: "Inter, serif",
          }}
        >
          {number}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#858D9D",
            fontSize: "14px",
            fontFamily: "Inter, serif",
          }}
        >
          {lastText}
        </Typography>
      </Stack>
    </>
  );
};

export const CardComponent = ({
  colorProp,
  headerCard,
  firNumber,
  secNumber,
  firstText,
  secText,
}: Card) => {
  const detailsHeader = {
    color: colorProp,
    fontWeight: 600,
  };
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="body1" sx={detailsHeader}>
          {headerCard}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "start", md: "space-between" },
           
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#5D6679",
              fontWeight: 600,
              fontFamily: "Inter, serif",
              minWidth:"30%",
             
            
             
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

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "space-between" },
    
           
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#858D9D",
              fontSize: "14px",
              fontFamily: "Inter, serif",
              minWidth:"30%",
            
              
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
};
