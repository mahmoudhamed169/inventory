import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import AuthPageTitle from "../../Utils/AuthPageTitle";
import AuthBackground from "../../Components/AuthComponents/AuthBackGround/AuthBackGround";
import { useEffect, useState } from "react";
import MainLoading from "../../Components/MainLoading/MainLoading";
import { useLoading } from "../../Context/LoadingContext/LoadingContext";

export default function AuthLayout() {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
      setLoading(true);
    };
  }, [setLoading]);
  AuthPageTitle();

  if (loading) {
    return <MainLoading />;
  }

  return (
    <Grid container spacing={3} sx={{ height: { xs: "auto", md: "100vh" } }}>
      <Grid
        item
        xs={12}
        sm={10}
        md={7}
        sx={{ height: { xs: "auto", md: "100%" } }}
      >
        <AuthBackground />
      </Grid>

      <Grid
        item
        xs={12}
        sm={10}
        md={5}
        sx={{ height: { xs: "auto", md: "100%" } }}
      >
        <Box
          sx={{
            height: {
              xs: "auto",
              md: "100%",
            },
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",

            mx: "auto",
            width: "80%",
          }}
        >
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}
