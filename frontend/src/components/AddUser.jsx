import { useState } from "react";
import UserService from "../services/UserService";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUserClick = async (e) => {
    e.preventDefault();
    try {
      await UserService.createUser(formData);
      toast.success("User added successfully!");
      navigate("/users");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        padding: "60px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Add User</h1>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </div>

        <button
          type="button"
          onClick={handleAddUserClick}
          style={{
            padding: "12px",
            fontSize: "16px",
          }}
        >
          Add User
        </button>
      </form>
      <Button
        style={{ marginTop: "10px" }}
        onClick={() => navigate("/users")}
        color="primary"
      >
        Back to Users
      </Button>
    </div>
  );
};

export default AddUser;
