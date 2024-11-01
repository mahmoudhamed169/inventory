import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function ManageStore() {
  return (
    <>
      <Box padding={"25px 35px"}>
        <Box sx={{ backgroundColor: "#ffff", borderRadius: "8px" }}>
          <Box
            sx={{
              padding: "20px 16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component={"h2"}>
              Manage Store
            </Typography>
            <Button sx={{ backgroundColor: "#1366D9", color: "#FFFFFF" }}>
              Add Store
            </Button>
          </Box>

          <Stack spacing={3} sx={{ padding: "34px 42px 55px" }}>
            <Branch />
            <Branch />
            <Branch />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

function Branch() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          border: "1px solid #F0F1F3",
          maxWidth: "940",
        }}
      >
        <Box
          sx={{
            color: "#48505E",
            width: "290px",
            height: "150px",
            backgroundColor: "#F0F1F3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Lexend, sans-serif",
            fontWeight: "600",
          }}
        >
          Singanallur Branch
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: "1",
            padding: "5px",
          }}
        >
          <Stack padding={"5px"} marginInline={"15px"} spacing={1}>
            <Typography variant="h6" component={"h5"}>
              Lisy Store
            </Typography>
            <Typography variant="body1" component={"p"}>
              1A/Krihnarajapuram, 3 rd street sulur
            </Typography>
            <Typography variant="body1" component={"p"}>
              Coimbatore - 6313403
            </Typography>
            <Typography variant="body1" component={"p"}>
              044- 653578
            </Typography>
          </Stack>
          <Button
            sx={{
              width: "90px",
              height: "40px",
              border: "1px solid #E8F1FD",
              color: "#1366D9",
              textTransform: "none",
              m: "15px",
            }}
          >
            Edite
          </Button>
        </Box>
      </Box>
    </>
  );
}
