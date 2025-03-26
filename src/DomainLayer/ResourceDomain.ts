 interface IResource {
    _id?: string;
    title: string;
    description: string;
    fileURL: string;  
    authorId: string;  
    category: string;
    approvalStatus: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export default IResource ;