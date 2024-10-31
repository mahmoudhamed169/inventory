import { Outlet } from "react-router-dom";
import SideBar from "../../Components/MasterComponnets/SideBar/SideBar";
import { Box } from "@mui/material";

export default function MasterLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <SideBar />
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
