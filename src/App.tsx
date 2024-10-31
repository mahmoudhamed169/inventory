import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import Login from "./Pages/AuthPages/Login/Login";
import Register from "./Pages/AuthPages/Register/Register";
import ForgetPassword from "./Pages/AuthPages/ForgetPass/ForgetPassword";
import ResetPassword from "./Pages/AuthPages/ResetPassword/ResetPassword";
import { Toaster } from "react-hot-toast";
import MasterLayout from "./Layouts/MasterLayout/MasterLayout";
import Dashboard from "./Pages/MasterPages/Dashboard/Dashboard";
import "./App.css";
import Inventory from "./Pages/MasterPages/Inventory/Inventory";
import ProductInfo from "./Pages/MasterPages/ProductInfo/ProductInfo";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <></>,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
      ],
    },
    {
      path: "home",
      element: <MasterLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "inventory", element: <Inventory /> },
        { path: "profuct-info", element: <ProductInfo /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}
