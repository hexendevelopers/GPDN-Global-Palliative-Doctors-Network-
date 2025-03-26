import { Request, Response, NextFunction } from "express";
import ResourceUsecase from "../../UsecaseLayer/ResourceUsecase/ResourceUsecase";

class ResourceController {
  private ResourceUsecase: ResourceUsecase;

  constructor(ResourceUsecase: ResourceUsecase) {
    this.ResourceUsecase = ResourceUsecase;
  }


  async fetchResource(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async AddResource(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async EditResource(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async DeleteResource(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async ResourceUpvote(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async ResourceDownvote(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }


}

export default ResourceController;