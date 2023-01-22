import axios from "axios";

const addpost = "http://localhost:9999/api/users/addPost";
const allposts = "http://localhost:9999/api/users/getPosts";
const deletepost = "http://localhost:9999/api/users/deletePostById";
const updatepost = "http://localhost:9999/api/users/updatePost";

//getting all posts from url
export const getallPosts = async (id) => {
  id = id || "";
  return await axios.get(`${allposts}/${id}`);
};
//adding post in that url
export const addPost = async (post) => {
  return await axios.post(addpost, post);
};

//editing post details using url
export const editPost = async (postId, post) => {
  return await axios.put(`${updatepost}/${postId}`, post);
};

//deleting post using url
export const deletePost = async (id) => {
  return await axios.delete(`${deletepost}/${id}`);
};
