// src/components/RoutesConfig.js
import { Routes, Route, Link } from "react-router-dom";
import Users from "../components/Users";
import AddUser from "../components/AddUser";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1 className="text-center">Django Backend / React</h1>
            <p className="text-center">
              This is a Django backend with a React frontend.
            </p>
            <p className="text-center">
              The Django backend is running on port 8000 and the React frontend
              is running on port 3000.
            </p>
            <div className="text-center">
              <Link to="/users" className="btn btn-primary">
                Go to Users
              </Link>
            </div>
          </div>
        }
      />
      <Route path="/users" element={<Users />} />
      <Route path="/add-user" element={<AddUser />} />
    </Routes>
  );
};

export default RoutesConfig;
