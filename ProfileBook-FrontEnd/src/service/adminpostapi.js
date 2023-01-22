import axios from "axios";

const addadmin = "http://localhost:9999/admin/register";

export const addAdmin = async (admin) => {
  return await axios.post(addadmin, admin);
};

const approveinsert = "http://localhost:9999/api/admin/addPost";

const approveposts = "http://localhost:9999/api/admin/getPosts";

const approvedelete = "http://localhost:9999/api/users/deletePostById";

const reportinsert = "http://localhost:9999/api/reportedUsers/addReportedUser";

const reportusers = "http://localhost:9999/api/reportedUsers/getReportedUser";

export const addReportUser = async (user) => {
  return await axios.post(reportinsert, user);
};

export const getallReportUsers = async (userId) => {
  userId = userId || "";
  return await axios.get(`${reportusers}/${userId}`);
};

export const addApprove = async (approve) => {
  return await axios.post(approveinsert, approve);
};

export const getallWaitingApprove = async (id) => {
  id = id || "";
  return await axios.get(`${approveposts}/${id}`);
};

export const deleteWaitingPost = async (postId) => {
  return await axios.delete(`${approvedelete}/${postId}`);
};
