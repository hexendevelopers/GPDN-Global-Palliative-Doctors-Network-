import { Request, Response, NextFunction } from "express";
import AdminUsecase from "../../UsecaseLayer/AdminUsecase/AdminUsecase";

class AdminController {
  private AdminUsecase: AdminUsecase;

  constructor(AdminUsecase: AdminUsecase) {
    this.AdminUsecase = AdminUsecase;
  }

  
  async adminInvitation(req: Request, res: Response, next: NextFunction){
    try{
      const { email }  = req.body;
      const adminInvitation = await this.AdminUsecase.adminInvitationForm(email);
      return res.json({
        success: adminInvitation?.success,
        status: adminInvitation?.status,
        data: adminInvitation?.data,
      }); 
     
    }catch(error){
      console.log(error)
    }
}

  async createUser(req: Request, res: Response, next: NextFunction){
    try{

      const {
        fullName,
        email,
        phoneNumber,
        photo,
        bio,
        countryOfPractice,
        medicalQualification,
        yearOfGraduation,
        hasFormalTrainingInPalliativeCare,
        medicalRegistrationAuthority,
        medicalRegistrationNumber,
        affiliatedPalliativeAssociations,
        specialInterestsInPalliativeCare,
        role,
        password,
        registrationStatus,
      } = req.body;

      if (
        !fullName ||
        !email ||
        !phoneNumber ||
        !photo ||
        !bio ||
        !countryOfPractice ||
        !medicalQualification ||
        !yearOfGraduation ||
        !hasFormalTrainingInPalliativeCare ||
        !medicalRegistrationAuthority ||
        !medicalRegistrationNumber ||
        !affiliatedPalliativeAssociations ||
        !specialInterestsInPalliativeCare ||
        !role ||
        !password ||
        !registrationStatus
      ) {
        return res.json({
          success: false,
          status:400,
          data:{
              message:"Missing required fields."
          } 
        });
      }

      const createUserForm = await this.AdminUsecase.createUserForm(
        fullName,
        email,
        phoneNumber,
        photo,
        bio,
        countryOfPractice,
        medicalQualification,
        yearOfGraduation,
        hasFormalTrainingInPalliativeCare,
        medicalRegistrationAuthority,
        medicalRegistrationNumber,
        affiliatedPalliativeAssociations,
        specialInterestsInPalliativeCare,
        role,
        password,
        registrationStatus
      );
      
      return res.json({
        success: createUserForm?.success,
        status: createUserForm?.status,
        data: createUserForm?.data,
      }); 

    }catch(error){
      console.log(error)
    }
}

async updateUser(req: Request, res: Response, next: NextFunction){
  try{
    const {
      fullName,
      email,
      phoneNumber,
      photo,
      bio,
      countryOfPractice,
      medicalQualification,
      yearOfGraduation,
      hasFormalTrainingInPalliativeCare,
      medicalRegistrationAuthority,
      medicalRegistrationNumber,
      affiliatedPalliativeAssociations,
      specialInterestsInPalliativeCare,
      role,
      password,
      registrationStatus,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !photo ||
      !bio ||
      !countryOfPractice ||
      !medicalQualification ||
      !yearOfGraduation ||
      !hasFormalTrainingInPalliativeCare ||
      !medicalRegistrationAuthority ||
      !medicalRegistrationNumber ||
      !affiliatedPalliativeAssociations ||
      !specialInterestsInPalliativeCare ||
      !role ||
      !password ||
      !registrationStatus
    ) {
      
      return res.json({
        success: false,
        status:400,
        data:{
            message:"Missing required fields."
        } 
      });
    }

    const updateUserForm = await this.AdminUsecase.updateUserForm(
      fullName,
      email,
      phoneNumber,
      photo,
      bio,
      countryOfPractice,
      medicalQualification,
      yearOfGraduation,
      hasFormalTrainingInPalliativeCare,
      medicalRegistrationAuthority,
      medicalRegistrationNumber,
      affiliatedPalliativeAssociations,
      specialInterestsInPalliativeCare,
      role,
      password,
      registrationStatus
    );
    
    return res.json({
      success: updateUserForm?.success,
      status: updateUserForm?.status,
      data: updateUserForm?.data,
    }); 

    
  }catch(error){
    console.log(error)
  }
}

async deleteUser(req: Request, res: Response, next: NextFunction){
  try{

    const { userId } = req.body;
    const deleteuser = await this.AdminUsecase.deleteUserForm(userId);
    return res.json({
      success: deleteuser?.success,
      status: deleteuser?.status,
      data: deleteuser?.data,
    }); 
    
  }catch(error){
    console.log(error)
  }
}

async fetchUser(req: Request, res: Response, next: NextFunction){
  try{

    const fetchUser = await this.AdminUsecase.fetchUserForm()
    return res.json({
      success: fetchUser?.success,
      status: fetchUser?.status,
      data: fetchUser?.data,
    }); 
  }catch(error){
    console.log(error)
  }
}

async fetchThreads(req: Request, res: Response, next: NextFunction){
  try{

    const fetchThread = await this.AdminUsecase.fetchThreadForm()
    return res.json({
      success: fetchThread?.success,
      status: fetchThread?.status,
      data: fetchThread?.data,
    }); 
  }catch(error){
    console.log(error)
  }
}

async approveORdeclineThreads(req: Request, res: Response, next: NextFunction){
  try{

    const { threadId , actionStatus } = req.body;
    const ActionStatus = await this.AdminUsecase.threadActionStatusForm(threadId , actionStatus)
    return res.json({
      success: ActionStatus?.success,
      status: ActionStatus?.status,
      data: ActionStatus?.data,
    });    
  }catch(error){
    console.log(error)
  }
}

async editThreads(req: Request, res: Response, next: NextFunction){
  try{

    const { threadId , title , content , tags} = req.body;
    const editThread = await this.AdminUsecase.editThreadForm(  threadId  , title , content , tags)
    return res.json({
      success: editThread?.success,
      status: editThread?.status,
      data: editThread?.data,
    });
    
  }catch(error){
    console.log(error)
  }
}

async deleteThreadComment(req: Request, res: Response, next: NextFunction){
try{

  const {threadId , userId } = req.body;
  const deleteUserComment = await this.AdminUsecase.deleteUserCommentForm(threadId , userId)
  return res.json({
    success: deleteUserComment?.success,
    status: deleteUserComment?.status,
    data: deleteUserComment?.data,
  });
}catch(error){
  console.log(error)
}
}

async deleteThreads(req: Request, res: Response, next: NextFunction){
  try{


    const { threadId } = req.body;
    const deleteThread = await this.AdminUsecase.deleteThreadForm(threadId);
    return res.json({
      success: deleteThread?.success,
      status: deleteThread?.status,
      data: deleteThread?.data,
    });    
  }catch(error){
    console.log(error)
  }
}

async fetchResource(req: Request, res: Response, next: NextFunction){
  try{
    const { threadId } = req.body;

    const fetchResource = await this.AdminUsecase.deleteThreadForm(threadId);
    return res.json({
      success: fetchResource?.success,
      status: fetchResource?.status,
      data: fetchResource?.data,
    });    
    
  }catch(error){
    console.log(error)
  }
}

async approveORdeclineResource(req: Request, res: Response, next: NextFunction){
  try{

    const { resourceId , actionStatus } = req.body;
    const ActionStatus = await this.AdminUsecase.resourceActionStatusForm(resourceId , actionStatus)
    return res.json({
      success: ActionStatus?.success,
      status: ActionStatus?.status,
      data: ActionStatus?.data,
    });      
  }catch(error){
    console.log(error)
  }
}

async fetchBlogs(req: Request, res: Response, next: NextFunction){
  try{

    const fetchBlogs = await this.AdminUsecase.fetchBlogsForm();
    return res.json({
      success: fetchBlogs?.success,
      status: fetchBlogs?.status,
      data: fetchBlogs?.data,
    });       
  }catch(error){
    console.log(error)
  }
}

async approveORdeclineBlogs(req: Request, res: Response, next: NextFunction){
  try{

    const { blogId , actionStatus } = req.body;
    const ActionStatus = await this.AdminUsecase.blogActionStatusForm(blogId , actionStatus)
    return res.json({
      success: ActionStatus?.success,
      status: ActionStatus?.status,
      data: ActionStatus?.data,
    });       
  }catch(error){
    console.log(error)
  }
}

async fetchPalliative(req: Request, res: Response, next: NextFunction){
  try{

    const fetchPalliative = await this.AdminUsecase.fetchPalliativeForm();
    return res.json({
      success: fetchPalliative?.success,
      status: fetchPalliative?.status,
      data: fetchPalliative?.data,
    });       
  }catch(error){
    console.log(error)
  }
}

async addPalliative(req: Request, res: Response, next: NextFunction){
  try{

    const { name , location , services , contactDetails} = req.body;
    const addPalliative = await this.AdminUsecase.addPalliativeForm(name , location , services , contactDetails);
    return res.json({
      success: addPalliative?.success,
      status: addPalliative?.status,
      data: addPalliative?.data,
    });       
  }catch(error){
    console.log(error)
  }
}

async editPalliative(req: Request, res: Response, next: NextFunction){
  try{

    const { _id , name , location , services , contactDetails} = req.body;
    const editPalliative = await this.AdminUsecase.editPalliativeForm(_id , name , location , services , contactDetails);
    return res.json({
      success: editPalliative?.success,
      status: editPalliative?.status,
      data: editPalliative?.data,
    });       
  }catch(error){
    console.log(error)
  }
}

async removePalliative(req: Request, res: Response, next: NextFunction){
  try{
    const { unitId } = req.body;

    const removePalliative = await this.AdminUsecase.removePalliativeForm(unitId)
    return res.json({
      success: removePalliative?.success,
      status: removePalliative?.status,
      data: removePalliative?.data,
    });       
  }catch(error){
    console.log(error)
  }
}
 



}

export default AdminController;
