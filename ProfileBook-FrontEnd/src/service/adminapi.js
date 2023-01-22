import axios from "axios";

//User Api
const adduser = "http://localhost:9999/api/admin/register";
const updateuser = "http://localhost:9999/api/admin/updateUser";
//User API
const allusers = "http://localhost:9999/api/admin/users";
const searchusers = "http://localhost:9999/api/admin/search";

//user message API

//adding user in that url
export const addUser = async (admin) => {
  return await axios.post(adduser, admin);
};

export const updateUser = async (admin) => {
  return await axios.put(updateuser, admin);
};

//getting all User from url
export const getallUsers = async (id) => {
  id = id || "";
  return await axios.get(`${allusers}/${id}`);
};
export const searchUser = async (adminName) => {
  adminName = adminName || "";
  return await axios.get(`${searchusers}/${adminName}`);
};
