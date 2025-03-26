import { Request, Response, NextFunction } from "express";
import AdminUsecase from "../../UsecaseLayer/AdminUsecase/AdminUsecase";

class AdminController {
  private AdminUsecase: AdminUsecase;

  constructor(AdminUsecase: AdminUsecase) {
    this.AdminUsecase = AdminUsecase;
  }

  async createUser(req: Request, res: Response, next: NextFunction){
    try{

    }catch(error){
      console.log(error)
    }
}

async updateUser(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async deleteUser(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async fetchUser(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async fetchThreads(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async approveORdeclineThreads(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async editThreads(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async deleteThreads(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async fetchResource(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async approveORdeclineResource(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async fetchBlogs(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async approveORdeclineBlogs(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async fetchPalliative(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async addPalliative(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async editPalliative(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}

async removePalliative(req: Request, res: Response, next: NextFunction){
  try{
    
  }catch(error){
    console.log(error)
  }
}





}

export default AdminController;
