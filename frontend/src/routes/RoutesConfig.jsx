import { Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import ProtectedRoutes from "./ProtectedRoutes";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="centered-container">
            <h1>Django Backend / React</h1>
            <p>This is a Django backend with a React frontend.</p>
            <p>
              The Django backend is running on port 8000 and the React frontend
              is running on port 3000.
            </p>
            <div>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          </div>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<ProtectedRoutes />} />
    </Routes>
  );
};

export default RoutesConfig;
