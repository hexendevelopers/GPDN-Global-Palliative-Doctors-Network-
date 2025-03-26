import mongoose, { Schema, Document, Model } from "mongoose";
import IBlog from "../../DomainLayer/BlogDomain.";

const blogSchema: Schema<IBlog & Document> = new Schema(
    {
      title: { type: String, required: true },
      content: { type: String, required: true },
      authorId: { type: String, required: true, ref: 'User' }, 
      approvalStatus: { type: Boolean, default: false }, 
      commentsCount: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
    },
    { timestamps: true } 
  );

const Blog: Model<IBlog & Document> = mongoose.model<IBlog & Document>(
     "Blog",
      blogSchema
);

export default Blog;
