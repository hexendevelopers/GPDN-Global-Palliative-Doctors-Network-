import { Request, Response, NextFunction } from "express";
import NewsAndBlogsUsecase from "../../UsecaseLayer/NewsAndBlogsUsecase/NewsAndBlogsUsecase";

class NewsAndBlogsController {
  private NewsAndBlogsUsecase: NewsAndBlogsUsecase;

  constructor(NewsAndBlogsUsecase: NewsAndBlogsUsecase) {
    this.NewsAndBlogsUsecase = NewsAndBlogsUsecase;
  }


  async FetchNewsAndBlogs(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async AddNewsAndBlogs(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async EditNewsAndBlogs(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async DeleteNewsAndBlogs(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async NewsAndBlogsUpvote(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async NewsAndBlogsDownvote(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

}

export default NewsAndBlogsController;