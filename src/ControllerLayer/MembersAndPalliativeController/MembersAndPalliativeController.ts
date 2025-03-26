import { Request, Response, NextFunction } from "express";
import MembersAndPalliativeUseCase from "../../UsecaseLayer/MembersAndPalliativeUseCase/MembersAndPalliativeUsecase";

class MembersAndPalliativeController {
  private MembersAndPalliativeUseCase: MembersAndPalliativeUseCase;

  constructor(MembersAndPalliativeUseCase: MembersAndPalliativeUseCase) {
    this.MembersAndPalliativeUseCase = MembersAndPalliativeUseCase;
  }

  async fetchDoctors(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async searchDoctors(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async filterDoctors(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async fetchPalliativeUnit(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async addPalliativeUnit(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async editPalliativeUnit(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async deletePalliativeUnit(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }

  async searchPalliativeUnit(req: Request, res: Response, next: NextFunction){
    try{
      
    }catch(error){
      console.log(error)
    }
  }



}


export default MembersAndPalliativeController;