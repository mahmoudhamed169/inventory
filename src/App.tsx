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
import ProtectedRoute from "./Components/shared/ProtectedRoute/ProtectedRoute";
import ManageStore from "./Pages/MasterPages/ManageStore/ManageStore";
import Suppliers from "./Pages/MasterPages/Suppliers/Suppliers";
import Reports from "./Pages/MasterPages/Reports/Reports";

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
      element: (
        <ProtectedRoute>
          <MasterLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "inventory", element: <Inventory /> },
        { path: "profuct-info", element: <ProductInfo /> },
        { path: "manage-store", element: <ManageStore /> },
        { path: "suppliers", element: <Suppliers /> },
        { path: "reports", element: <Reports /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          className: "",
          style: {
            fontFamily: "Lexend, sans-serif",
          },
        }}
      />
    </>
  );
}
