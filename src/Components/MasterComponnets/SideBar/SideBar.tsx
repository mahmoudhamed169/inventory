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

export default function SideBar() {
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
          icon={<HomeIcon />}
          className={getMenuItemClassName("/home/dashboard")}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          component={<Link to="/home/inventory" />}
          icon={<InventoryIcon />}
          className={getMenuItemClassName("/home/inventory")}
        >
          Inventory
        </MenuItem>
        <MenuItem
          component={<Link to="/home/reports" />}
          icon={<ReportIcon />}
          className={getMenuItemClassName("/home/reports")}
        >
          Reports
        </MenuItem>
        <MenuItem
          component={<Link to="/home/suppliers" />}
          icon={<SuppliersIcon />}
          className={getMenuItemClassName("/home/suppliers")}
        >
          Suppliers
        </MenuItem>
        <MenuItem
          component={<Link to="/home/orders" />}
          icon={<OrdersIcon />}
          className={getMenuItemClassName("/home/orders")}
        >
          Orders
        </MenuItem>
        <MenuItem
          component={<Link to="/home/manage-store" />}
          icon={<ManageStoreIcon />}
          className={getMenuItemClassName("/home/manage-store")}
        >
          Manage Store
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
  );
}
