import { Outlet } from "react-router-dom";
import SideBar from "../../Components/MasterComponnets/SideBar/SideBar";
import { Box } from "@mui/material";
import Navbar from "../../Components/MasterComponnets/Navbar/Navbar";

export default function MasterLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ position: "sticky", top: "0", bottom: "0", height: "100vh" }}>
        <SideBar />
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <Navbar/>
        <Outlet />
      </Box>
    </Box>
  );
}
