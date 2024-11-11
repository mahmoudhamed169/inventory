import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthBackground from "../../Components/AuthComponents/AuthBackGround/AuthBackGround";
import MainLoading from "../../Components/MainLoading/MainLoading";
import { useLoading } from "../../Context/LoadingContext/LoadingContext";
import AuthPageTitle from "../../Utils/AuthPageTitle";

export default function AuthLayout() {
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate()
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home")
    }
    
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
