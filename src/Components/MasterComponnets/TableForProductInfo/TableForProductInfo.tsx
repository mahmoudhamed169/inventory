import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { TableForProductInfoProps } from "../../../Interfaces/TableForProductInfo.interface/TableForProductInfo.interface";

export default function TableForProductInfo({
  title,
  rows,
  Stock,
}: TableForProductInfoProps) {
  return (
    <>
      {/*  --------------- Title section  --------------- */}
      <Typography
        variant="h6"
        sx={{
          color: " #48505E",
          fontSize: { xs: "1rem", sm: "1.5rem" },
          paddingLeft: { md: ".8rem" },
        }}
      >
        {title}
      </Typography>

      {/* --------------- Table container --------------- */}
      <TableContainer
        sx={{ maxWidth: { xs: "100%", md: "95%" }, marginX: "auto" }}
      >
        <Table aria-label="simple table">
          {/* --------------- Conditionally renders table head if 'Stock' is true --------------- */}
          {Stock ? (
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F0F1F3" }}>
                <TableCell sx={{ color: " #5D6679", fontWeight: 600 }}>
                  Store Name
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: " #5D6679", fontWeight: 600 }}
                >
                  Stock in hand
                </TableCell>
              </TableRow>
            </TableHead>
          ) : (
            ""
          )}
          <TableBody>
            {/* --------------- Iterates over rows data array to render each row --------------- */}
            {rows.map((row: any) => (
              <TableRow key={row.name}>
                {/* --------------- Row for name --------------- */}
                <TableCell
                  sx={{
                    border: Stock ? "" : "none",
                    color: " #858D9D",
                    fontSize: { xs: "0.75rem", sm: "1rem" },
                    padding: { xs: "2px 4px", sm: "8px 16px" },
                  }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>

                {/* --------------- Row for data --------------- */}
                <TableCell
                  align={Stock ? "right" : undefined}
                  sx={{
                    border: Stock ? "" : "none",
                    color: Stock ? "#1366D9" : "#858D9D",
                    fontSize: { xs: "0.75rem", sm: "1rem" },
                    padding: { xs: "2px 4px", sm: "8px 16px" },
                  }}
                >
                  {row.Data}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
