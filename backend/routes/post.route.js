import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getFeedPosts,
  createPost,
  deletePost,
  getPostById,
  createComment,
  likePost,
} from "../controllers/post.controller.js";

const rouer = express.Router();

rouer.get("/", protectRoute, getFeedPosts);
rouer.post("/create", protectRoute, createPost);
rouer.delete("/delete/:id", protectRoute, deletePost);
rouer.get("/:id", protectRoute, getPostById);

rouer.post("/:id/comment", protectRoute, createComment);
rouer.post("/:id/like", protectRoute, likePost);

export default rouer;
