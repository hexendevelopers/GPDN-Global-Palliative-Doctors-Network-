 interface IBlog {
    _id?: string;
    title: string;
    content: string;
    authorId: string; 
    approvalStatus: boolean;
    commentsCount: number;
    likes: number;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export default IBlog;