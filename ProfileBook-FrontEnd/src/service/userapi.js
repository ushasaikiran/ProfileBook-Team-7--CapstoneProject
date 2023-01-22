import axios from "axios";

//User Api
const adduser = "http://localhost:9999/api/users/register";
//User API
const allusers = "http://localhost:9999/api/admin/getAllUsers";

const searchusers = "http://localhost:9999/api/admin/getUserById";

const search = "http://localhost:9999/api/users/getUserByName";
//user message API

//adding user in that url
export const addUser = async (user) => {
  return await axios.post(adduser, user);
};

//getting all Users from url
export const getallUsers = async (id) => {
  id = id || "";
  return await axios.get(`${allusers}/${id}`);
};
export const searchUser = async (id) => {
  id = id || "";
  return await axios.get(`${searchusers}/${id}`);
};

export const searchUserByName = async (userName) => {
  userName = userName || "";
  return await axios.get(`${search}/${userName}`);
};
