import { Request, Response, NextFunction } from "express";
import ThreadUsecase from "../../UsecaseLayer/ThreadUsecase/ThreadUsecase";

class ThreadController {
  private ThreadUsecase: ThreadUsecase;

  constructor(ThreadUsecase: ThreadUsecase) {
    this.ThreadUsecase = ThreadUsecase;
  }


  async AddThread(req: Request, res: Response, next: NextFunction){
        try{
        
        const { title , content , authorId , tags , likes , dislikes , shares , commentsCount , approvalStatus } = req.body;

        const addThread = await this.ThreadUsecase.AddThreadForm(title , content , authorId , tags , likes , dislikes , shares , commentsCount , approvalStatus)


        }catch(error){
          console.log(error)
        }
  }

  async AddComment(req: Request, res: Response, next: NextFunction){
    try{

      const { threadId , authorId , content } = req.body;

      const addComment = this.ThreadUsecase.AddCommentForm( threadId , authorId , content )
      return addComment
      
    }catch(error){
      console.log(error)
    }
 }

 async EditComment(req: Request, res: Response, next: NextFunction){
  try{
    
    const { _id ,  threadId , authorId , content } = req.body;

    const editComment = this.ThreadUsecase.EditCommentForm( _id ,  threadId , authorId , content)

  }catch(error){
    console.log(error)
  }
}

async EditThread(req: Request, res: Response, next: NextFunction){
  try{

    const { _id , title , content , authorId , tags } = req.body;

    const editThread = await this.ThreadUsecase.EditThreadForm(_id , title , content , authorId , tags)


  }catch(error){
    console.log(error)
  }
}

async DeleteThread(req: Request, res: Response, next: NextFunction){
  try{

    const { threadId  } = req.body;

    const deleteThread = await this.ThreadUsecase.DeleteThreadForm(threadId )

  }catch(error){
    console.log(error)
  }
}

async DeleteComment(req: Request, res: Response, next: NextFunction){
  try{

    const { commentId } = req.body;

    const deleteComment = await this.ThreadUsecase.DeleteCommentForm( commentId )

  }catch(error){
    console.log(error)
  }
}

async CommentLikes(req: Request, res: Response, next: NextFunction){
  try{

    const { commentId ,  likes } = req.body;

    const likeComment = this.ThreadUsecase.CommentLikesForm( commentId , likes )

  }catch(error){
    console.log(error)
  }
}

async ThreadUpvote(req: Request, res: Response, next: NextFunction){
  try{

    const { threadId , likes } = req.body;

    const likeThread = await this.ThreadUsecase.ThreadUpvoteForm(threadId , likes )

  }catch(error){
    console.log(error)
  }
}

async CommentDislikes(req: Request, res: Response, next: NextFunction){
  try{

    const { commentId ,  dislikes } = req.body;

    const dislikeComment = this.ThreadUsecase.CommentDislikesForm( commentId , dislikes )

  }catch(error){
    console.log(error)
  }
}

async ThreadDownvote(req: Request, res: Response, next: NextFunction){
  try{

    const { threadId , dislikes } = req.body;

    const dislikeThread = await this.ThreadUsecase.ThreadDownvoteForm(threadId , dislikes )

  }catch(error){
    console.log(error)
  }
}

async ThreadShares(req: Request, res: Response, next: NextFunction){
  try{

    const { threadId , shares } = req.body;

    const shareThread = await this.ThreadUsecase.ThreadSharesForm(threadId , shares )

    return shareThread;

  }catch(error){
    console.log(error)
  }
}

async ThreadSearch(req: Request, res: Response, next: NextFunction){
  try{

    const { searchInp } = req.body;

    const shareThread = await this.ThreadUsecase.ThreadSearchForm(searchInp )

  }catch(error){
    console.log(error)
  }
}

// async ThreadFilter(req: Request, res: Response, next: NextFunction){
//   try{

//     const { threadId , shares } = req.body;

//     const shareThread = await this.ThreadUsecase.ThreadSharesForm(threadId , shares )

//   }catch(error){
//     console.log(error)
//   }
// }

}


export default ThreadController;