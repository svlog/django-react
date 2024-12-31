import { useState, useEffect } from "react";
import UserService from "../services/UserService";
import { Button, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await UserService.getUsers();
      setUsers(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();

  const handleUserAction = async (action, id) => {
    switch (action) {
      case "add":
        navigate("/add-user");
        break;
      case "edit":
        break;
      case "delete":
        try {
          await UserService.deleteUser(id);
          toast.success("User deleted successfully!");
          getUsers();
        } catch (error) {
          console.error(error);
        }
        break;
      case "back":
        navigate("/");
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(id)) {
        return prevSelectedUsers.filter((userId) => userId !== id);
      } else {
        return [...prevSelectedUsers, id];
      }
    });
  };

  useEffect(() => {}, [selectedUsers]);

  const showUsers = users.length > 0;

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {!loading && users.length === 0 && <p>No users found!</p>}
      {showUsers && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <Checkbox
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                    color="primary"
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && users.length > 0 && <p>Total users: {users.length}</p>}

      <div
        className="buttons-container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUserAction("add")}
        >
          Add User
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUserAction("delete", selectedUsers)}
          disabled={!selectedUsers.length}
        >
          Delete Selected
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUserAction("edit")}
          disabled={!selectedUsers.length}
        >
          Edit User
        </Button>
      </div>

      <Button
        style={{ marginTop: "10px" }}
        variant="contained"
        color="primary"
        onClick={() => handleUserAction("back")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Users;
