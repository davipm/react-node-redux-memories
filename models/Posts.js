import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default model("PostMessage", PostSchema);
