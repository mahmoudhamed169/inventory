import { Typography } from "@mui/material";
interface Header {
  Header: string;
}

interface HeaderTable {
  headerTable: string;
}
export const HeaderComponent = ({ Header }: Header) => {
  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        sx={{
          fontSize: { xs: "18px", md: "20px" },
          fontWeight: "500",
          mb: "22px",
          color: "#383E49",
        }}
      >
        {Header}
      </Typography>
    </>
  );
};

export const HeaderTable = ({ headerTable }: HeaderTable) => {
  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        sx={{
          fontSize: { xs: "18px", md: "20px" },
          fontWeight: "500",
          fontFamily: "Inter, serif",
          color: "#383E49",
        
        }}
      >
        {headerTable}
      </Typography>
    </>
  );
};

 

 