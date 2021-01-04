import { toast } from "react-toastify";
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../../constants";
import api from "../../services/api";

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.get("/posts");
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    toast.error("Error while load posts");
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.post("/posts", post);
    dispatch({ type: CREATE, payload: data });
    toast.success("Post created!");
  } catch (error) {
    toast.error(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.patch(`/posts/${id}`, post);
    dispatch({ type: UPDATE, payload: data });
    toast.success("Post updated!");
  } catch (error) {
    toast.error(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.patch(`/posts/${id}/likePost`);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`/posts/${id}`);
    dispatch({ type: DELETE, payload: id });
    toast.success("Post deleted!");
  } catch (error) {
    toast.error(error.message);
  }
};
