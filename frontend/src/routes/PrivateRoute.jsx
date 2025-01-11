import { Navigate } from "react-router-dom";
import JwtService from "../services/JwtService";

const PrivateRoute = ({ children }) => {
  const token = JwtService.getAccessToken();
  const isAuthenticated = token && JwtService.isAuthTokenValid(token);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
