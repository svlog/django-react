import api from "../api/api";

class UserService {
  getUsers = async () => {
    const response = await api().get("/users/get-users/");
    return response.data;
  };

  createUser = async (data) => {
    const response = await api().post("/users/create-users/", data);
    return response.data;
  };

  updateUser = async (id, data) => {
    const response = await api().put(`/users/update-users/${id}/`, data);
    return response.data;
  };

  deleteUser = async (id) => {
    const response = await api().delete(`/users/delete-users/${id}/`);
    return response.data;
  };
}

const instance = new UserService();
export default instance;
