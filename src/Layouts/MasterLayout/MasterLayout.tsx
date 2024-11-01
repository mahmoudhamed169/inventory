import { Outlet } from "react-router-dom";
import SideBar from "../../Components/MasterComponnets/SideBar/SideBar";
import { Box } from "@mui/material";
import Navbar from "../../Components/MasterComponnets/Navbar/Navbar";
import { useLoading } from "../../Context/LoadingContext/LoadingContext";
import { useEffect } from "react";
import MainLoading from "../../Components/MainLoading/MainLoading";

export default function MasterLayout() {
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

  if (loading) {
    return <MainLoading />;
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ position: "sticky", top: "0", bottom: "0", height: "100vh" }}>
        <SideBar />
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <Navbar />
        <Box sx={{ bgcolor: "#f0f1f3" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
