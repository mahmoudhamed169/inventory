import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryIcone from "../../../Icones/InventoryIcone";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoIcone from "../../../Icones/LogoIcone";
import { Typography } from "@mui/material";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapse, setIsCollapse] = useState(true);

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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#5D6679",
        borderRight:" 1px solid #F0F1F3",
        borderTopRightRadius:"15px",
        borderBottomRightRadius:"15px",
        backgroundColor:"#fff"
      }}
      collapsed={isCollapse}
      className="sidebar-container"
    >
      <Menu
        rootStyles={{ height: "85%", overflowY: "hidden" }}
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem
          rootStyles={{
            paddingTop: "1.3rem",
            paddingBottom: "2rem",
          }}
          component={<Link to="/home" />}
          icon={<LogoIcone />}
        >
          <Typography sx={{ color: "#1570EF" }} variant="h5">
            KANBAN
          </Typography>
        </MenuItem>
        <MenuItem
          component={<Link to="/home" />}
          icon={<HomeOutlinedIcon />}
          className={getMenuItemClassName("/home")}
        >
          Dashobard
        </MenuItem>
        <MenuItem
          component={<Link to="/home" />}
          icon={<InventoryIcone />}
          className={getMenuItemClassName("/home/")}
        >
          Inventory
        </MenuItem>
        <MenuItem
          component={<Link to="/home" />}
          icon={<BarChartOutlinedIcon />}
          className={getMenuItemClassName("/home/")}
        >
          Reports
        </MenuItem>
        <MenuItem
          component={<Link to="/home" />}
          icon={<AccountCircleOutlinedIcon />}
          className={getMenuItemClassName("/home/")}
        >
          Suppliers
        </MenuItem>
        <MenuItem
          component={<Link to="/home" />}
          icon={<Inventory2OutlinedIcon />}
          className={getMenuItemClassName("/home/")}
        >
          Orders
        </MenuItem>
        <MenuItem
          component={<Link to="/home" />}
          icon={<FactCheckIcon />}
          className={getMenuItemClassName("/home/")}
        >
          Manage Store
        </MenuItem>
      </Menu>

      <Menu rootStyles={{ height: "15%" }}>
        <MenuItem
          component={<Link to="/home" />}
          icon={<SettingsOutlinedIcon />}
          className={getMenuItemClassName("/home/")}
        >
          Settings
        </MenuItem>
        <MenuItem
          component={<Link to="/home" />}
          icon={<LogoutIcon />}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Log Out{" "}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
