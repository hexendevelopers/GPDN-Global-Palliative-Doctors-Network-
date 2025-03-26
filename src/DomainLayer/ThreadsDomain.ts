 interface IThread {
    _id?: string;
    title: string;
    content: string;
    authorId?: string;  
    tags: string[];
    likes?: number;
    dislikes?: number;
    shares?: number;
    commentsCount?: number;
    approvalStatus?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export default IThread