import api from "../api/api";

class UserService {
  getUsers = async () => {
    try {
      const response = await api.get("/users/");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  createUser = async (data) => {
    try {
      const response = await api.post("/users/", data);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  deleteUser = async (id) => {
    try {
      const response = await api.delete(`/users/${id}/`);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  };
}

const instance = new UserService();
export default instance;
