import {
  Box,
  Button,
  Grid2,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function createData(Category: string, TurnOver: string, IncreaseBy: string) {
  return { Category, TurnOver, IncreaseBy };
}
const rows = [
  createData("Vegetable", "₹26,000", "3.2%"),
  createData("Instant Food", "₹22,000", "2%"),
  createData("Households", "₹22,000", "1.5%"),
];

export default function Reports() {
  return (
    <Box
      sx={{ padding: { xs: "15px 20px", sm: "20px 25px", md: "22px 30px" } }}
    >
      <Grid2 container spacing={2}>
        <Grid2
          size={{ sm: 12, md: 6 }}
          sx={{
            backgroundColor: "#fff",
            padding: { xs: "15px 20px", sm: "20px 25px", md: "22px 30px" },
            borderRadius: "0.5rem",
            width: "100%",
            maxWidth: { md: "519px" },
          }}
        >
          <Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">Best selling category</Typography>
              <Button sx={{ textTransform: "none" }}>See All</Button>
            </Stack>
            <Box>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#667085",
                          fontWeight: 500,
                          fontFamily: "Inter ,serif",
                        }}
                      >
                        Category
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#667085",
                          fontWeight: 500,
                          fontFamily: "Inter ,serif",
                        }}
                      >
                        Turn Over
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#667085",
                          fontWeight: 500,
                          fontFamily: "Inter ,serif",
                        }}
                      >
                        Increase By
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.Category}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ color: " #667085" }}
                        >
                          {row.Category}
                        </TableCell>
                        <TableCell sx={{ color: "  #48505E" }}>
                          {row.TurnOver}
                        </TableCell>
                        <TableCell sx={{ color: " #10a760" }}>
                          {row.IncreaseBy}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
}
