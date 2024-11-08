import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Breadcrumbs, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { NavBreadcrumbInterface } from "../../../Interfaces/NavBreadcrumbInterface/NavBreadcrumbInterface";
import Styles from "./NavBreadcrumb.module.css";

export default function NavBreadcrumb({
  MainTitle,
  title,
}: NavBreadcrumbInterface) {
  const breadcrumbs = [
    <Link className={Styles["link-breadcrumbs"]} to="/home/inventory">{MainTitle}</Link>,
    <Link className={Styles["link-breadcrumbs"]} to="/home/profuct-info">{title}</Link>,
  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ArrowForwardIosIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
