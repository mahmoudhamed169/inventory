import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AuthPageTitle() {
  const loaction = useLocation();
  useEffect(() => {
    switch (loaction.pathname) {
      case "/":
        document.title = "KANBAN - Login Page";
        break;
      case "/login":
        document.title = "KANBAN - Login Page";
        break;
      case "/register":
        document.title = "KANBAN - Register Page";
        break;
      case "/forget-password":
        document.title = "KANBAN - Forget Password Page";
        break;
      case "/reset-password":
        document.title = "KANBAN - Reset Password Page";
        break;
      default:
        document.title = "KANBAN ";
    }
  }, [loaction.pathname]);
  return <div>AuthPageTitle</div>;
}
