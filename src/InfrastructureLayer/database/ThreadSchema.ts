
import mongoose, { Schema, Document, Model } from "mongoose";
import IThread from "../../DomainLayer/ThreadsDomain";

const threadSchema: Schema<IThread & Document> = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: String, required: true, ref: 'User' },  
    tags: { type: [String], default: [] },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    approvalStatus: { type: Boolean, default: false }, 
  }  
);

const Thread: Model<IThread & Document> = mongoose.model<IThread & Document>(
     "Thread",
     threadSchema
);

export default Thread;
