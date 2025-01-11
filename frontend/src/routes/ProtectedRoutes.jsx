import { Routes, Route } from "react-router-dom";
import Users from "../components/Users";
import AddUser from "../components/AddUser";
import PrivateRoute from "./PrivateRoute";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-user"
        element={
          <PrivateRoute>
            <AddUser />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default ProtectedRoutes;
