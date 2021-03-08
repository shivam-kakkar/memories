import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPosts = () => API.get("/posts");
export const createPost = newPost => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = id => API.delete(`/posts/${id}`);
export const likePost = id => API.patch(`/posts/${id}/likePost`);

export const signIn = FormData => API.post("/user/signin", FormData);
export const signUp = FormData => API.post("/user/signup", FormData);
