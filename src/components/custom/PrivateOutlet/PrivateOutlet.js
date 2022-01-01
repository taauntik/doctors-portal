import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function PrivateOutlet() {
  const { loggedIn, role } = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}
