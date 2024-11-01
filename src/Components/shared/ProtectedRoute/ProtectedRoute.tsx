import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import { AuthContextType } from "../../../Interfaces/userInfo/UserInfoResponse";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userData } = useContext(AuthContext) as AuthContextType;
  if (localStorage.getItem("token") || userData != null) return children;
  else return <Navigate to="/login" />;
}
