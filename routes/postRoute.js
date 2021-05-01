import { Router } from "express";
import {
  getPosts,
  createPost,
  deletePost,
  getPost,
  likePost,
  updatePost,
} from "../controllers/PostControler";

const router = Router();

router.get("/api/v1/posts", getPosts);
router.post("/api/v1/posts", createPost);
router.get("/api/v1/posts/:id", getPost);
router.patch("/api/v1/posts/:id", updatePost);
router.delete("/api/v1/posts/:id", deletePost);
router.patch("/api/v1/posts/:id/likePost", likePost);

export default router;
