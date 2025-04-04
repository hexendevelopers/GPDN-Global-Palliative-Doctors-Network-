import mongoose from "mongoose";

 interface IComment {
    _id?: string;
    threadId?: string;  
    resourceId?:string;
    blogId?:string;
    authorId: string;  
    content: string;
    likes?: mongoose.Types.ObjectId[]; 
    dislikes?: mongoose.Types.ObjectId[]; 
    createdAt?: Date;
    updatedAt?: Date;
  }

  export default IComment;