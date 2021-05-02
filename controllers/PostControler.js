import mongoose from "mongoose";

import PostSchema from "../models/Posts";

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostSchema.find();
    return res.status(200).json(postMessages);
  } catch (error) {
    return  res.status(404).json({ message: error.message });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostSchema.findById(id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  const newPostMessage = new PostSchema({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPostMessage.save();
    return res.status(201).json(newPostMessage);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<this>}
 */
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostSchema.findByIdAndUpdate(id, updatedPost, { new: true });

  return res.json(updatedPost);
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<this>}
 */
export const deletePost = async (req, res) => {
  const { id } = req.params;

  //if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostSchema.findByIdAndRemove(id, (err) => {
    if (err) return res.status(404).send(`No post with id: ${id}`);
  });

  return res.status(200).json({ message: "Post deleted successfully." });
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<this>}
 */
export const likePost = async (req, res) => {
  const { id } = req.params;
  //if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  const post = await PostSchema.findById(id);
  if (!post) return req.status(404).send(`No post with id: ${id}`);

  const updatedPost = await PostSchema.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  return res.status(200).json(updatedPost);
};
