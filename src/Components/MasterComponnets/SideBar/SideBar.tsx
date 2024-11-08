import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Typography, useMediaQuery } from "@mui/material";
import { LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoIcone from "../../../Icones/LogoIcone";
import {
  HomeIcon,
  InventoryIcon,
  ManageStoreIcon,
  OrdersIcon,
  ReportIcon,
  SuppliersIcon,
} from "../../../Icones/SideBarIcons";
import LockIcon from "@mui/icons-material/Lock";
import ChangePassword from "../../AuthComponents/ChangePassword/ChangePassword";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapse, setIsCollapse] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");

  const getMenuItemClassName = (path: string) => {
    return location.pathname === path
      ? "ps-menu-button active"
      : "ps-menu-button";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsCollapse(false);
      } else {
        setIsCollapse(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ margin: "25%" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ChangePassword
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ChangePassword  handleClose={handleClose}/>
             
            </Typography>
          </Box>
        </Modal>
      </div>

      <Sidebar
        rootStyles={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#5D6679",
          borderRight: "1px solid #F0F1F3",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
          backgroundColor: "#fff",
          width: isMobile ? "65px" : "250px",
          minWidth: isMobile ? "65px" : "250px",
          fontFamily: "Lexend, sans-serif",
        }}
        collapsed={isCollapse}
        className="sidebar-container"
      >
        <Menu rootStyles={{ height: "85%", overflowY: "hidden" }}>
          <MenuItem
            component={<Link to="/home/dashboard" />}
            icon={<LogoIcone />}
            rootStyles={{
              paddingTop: "1.3rem",
              paddingBottom: "2rem",
            }}
          >
            <Typography sx={{ color: "#1570EF" }} variant="h5">
              KANBAN
            </Typography>
          </MenuItem>
          <MenuItem
            component={<Link to="/home/dashboard" />}
            icon={<HomeIcone />}
            className={getMenuItemClassName("/home/dashboard")}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link to="/home/inventory" />}
            icon={<InventoryIcone />}
            className={getMenuItemClassName("/inventory")}
          >
            Inventory
          </MenuItem>
          <MenuItem
            component={<Link to="/home/reports" />}
            icon={<ReportSideBarIcone />}
            className={getMenuItemClassName("/home/reports")}
          >
            Reports
          </MenuItem>
          <MenuItem
            component={<Link to="/home/suppliers" />}
            icon={<SuppliersSideBarIcone />}
            className={getMenuItemClassName("/home/suppliers")}
          >
            Suppliers
          </MenuItem>
          <MenuItem
            component={<Link to="/home/orders" />}
            icon={<OrdersSideBarIcone />}
            className={getMenuItemClassName("/orders")}
          >
            Orders
          </MenuItem>
          <MenuItem
            component={<Link to="/home/manage-store" />}
            icon={<ListSideBarIcone />}
            className={getMenuItemClassName("/manage-store")}
          >
            Manage Store
          </MenuItem>

          <MenuItem
            onClick={handleOpen}
            component={<Link to="" />}
            icon={<LockIcon />}
        
          >
            Change Password
          </MenuItem>
        </Menu>

        <Menu rootStyles={{ height: "15%" }}>
          <MenuItem
            component={<Link to="/home/settings" />}
            icon={<SettingsOutlinedIcon />}
            className={getMenuItemClassName("/home")}
          >
            Settings
          </MenuItem>
          <MenuItem
            component={<Link to="/login" />}
            icon={<LogOutIcon />}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Log Out
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
