import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import Login from "./Pages/AuthPages/Login/Login";
import Register from "./Pages/AuthPages/Register/Register";
import ForgetPassword from "./Pages/AuthPages/ForgetPass/ForgetPassword";
import ResetPassword from "./Pages/AuthPages/ResetPassword/ResetPassword";
import { Toaster } from "react-hot-toast";

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
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
}
