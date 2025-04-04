import mongoose, { Schema, Document, Model, Types } from "mongoose";
import AdminRepository from "../../InfrastructureLayer/repository/AdminRepository/AdminRepository";
import generateOtp from "../../InfrastructureLayer/services/GenerateOtp";
import EncryptPassword from "../../InfrastructureLayer/services/BcryptPassword";
import sendOtp from "../../InfrastructureLayer/services/SendEmail";
import {AppWriteOtp} from "../../InfrastructureLayer/services/AppWriteOtp";
// import {account} from "../../InfrastructureLayer/services/AppWriteOtp";
import JWTToken from "../../InfrastructureLayer/services/GenerateToken";
import IUser from "../../DomainLayer/UserDomain";
import SendEmail from "../../InfrastructureLayer/services/SendEmail";


// import { Client, Account, ID } from "appwrite";
// import OtpSession from "../../DomainLayer/OtpSession";

// import IUser from "../../domainLayer/userDomain";
// import UserModel from "../../infrastructureLayer/database/UserModel";

class AdminUsecase {
  private AdminRepository: AdminRepository;
  private generateOtp: generateOtp;
  private EncryptPassword: EncryptPassword;
  private JwtToken: JWTToken;
  private AppWriteOtp: AppWriteOtp;
  private sendEmail: SendEmail;

  constructor(
    AdminRepository: AdminRepository,
    generateOtp: generateOtp,
    EncryptPassword: EncryptPassword,
    jwtToken: JWTToken,
    AppWriteOtp:AppWriteOtp,
    sendEmail: SendEmail
  ) {
    this.AdminRepository = AdminRepository;
    this.generateOtp = generateOtp;
    this.EncryptPassword = EncryptPassword;
    this.JwtToken = jwtToken;
    this.AppWriteOtp = AppWriteOtp;
    this.sendEmail = sendEmail;
  }

  async adminInvitationForm(email:string){
    try{

      this.sendEmail.sendInvitationToUser(email);
      return {
        success: false,
        status: 400,
        data: {
          message: "email sended successfully.",
        },
      };
    }catch(error){
      console.log(error)
    }
  }
  
  async createUserForm(
    fullName: string,
    email: string,
    phoneNumber: string,
    photo: string,
    bio: string,
    countryOfPractice: string,
    medicalQualification: string,
    yearOfGraduation: number,
    hasFormalTrainingInPalliativeCare: boolean,
    medicalRegistrationAuthority: string,
    medicalRegistrationNumber: string,
    affiliatedPalliativeAssociations: string,
    specialInterestsInPalliativeCare: string,
    role: string,
    password: string,
    registrationStatus: string
  ) {
    try {
      const ExistingUser = await this.AdminRepository.findByEmail(email);

      if (ExistingUser && ExistingUser?.registrationStatus == "pending") {
        return {
          success: false,
          status: 400,
          data: {
            message: "User request already send to  admin.",
          },
        };
      } else if (
        ExistingUser &&
        ExistingUser?.registrationStatus == "approved"
      ) {
        return {
          success: false,
          status: 400,
          data: {
            message: "User already exists.",
          },
        };
      } else if (
        ExistingUser &&
        ExistingUser?.registrationStatus == "rejected"
      ) {
        return {
          success: false,
          status: 400,
          data: {
            message: "Admin rejected user already. ",
          },
        };
      }
      const validRole = "user" ;

      const validStatus: "pending" | "approved" | "rejected" =
        registrationStatus === "pending" ||
        registrationStatus === "approved" ||
        registrationStatus === "rejected"
          ? registrationStatus
          : "pending";

      const data = {
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
        role: validRole,
        password,
        registrationStatus: validStatus,
      };

      const addNewUser: IUser = { ...data };

      const newUser = await this.AdminRepository.AddUser(addNewUser);

    
      return {
        success: true,
        status: 200,
        data:{
          message: "User send to  admin and created successfully.",
          data:newUser
        },
      };
     
    } catch (error) {
      console.log(error);
    }
  }
  
  

  async updateUserForm(
    fullName: string,
    email: string,
    phoneNumber: string,
    photo: string,
    bio: string,
    countryOfPractice: string,
    medicalQualification: string,
    yearOfGraduation: number,
    hasFormalTrainingInPalliativeCare: boolean,
    medicalRegistrationAuthority: string,
    medicalRegistrationNumber: string,
    affiliatedPalliativeAssociations: string,
    specialInterestsInPalliativeCare: string,
    role: string,
    password: string,
    registrationStatus: string
  ) {
    try {
     
      const validRole = role ;

      const validStatus: "pending" | "approved" | "rejected" =
        registrationStatus === "pending" ||
        registrationStatus === "approved" ||
        registrationStatus === "rejected"
          ? registrationStatus
          : "pending";

      const data = {
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
        role: validRole,
        password,
        registrationStatus: validStatus,
      };



      const update: IUser = { ...data };

      const updatedUser = await this.AdminRepository.updateUser(update);

      if(!updatedUser){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to edit user! ,Please try later."
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:{
            message: "User updated successfully.",
            data:updatedUser
          },
        };
      } 
     
    } catch (error) {
      console.log(error);
    }
  }

  

  async deleteUserForm(userId : string){
    try{
      
      const deleteUser = await this.AdminRepository.deleteUser(userId)
      if(!deleteUser){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to delete user! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:deleteUser,
        };
      } 
    }catch(error){
      console.log(error)
    }
  }

  async fetchUserForm(){
    try{
      
      const fetchUser = await this.AdminRepository.fetchUser()
      if(!fetchUser){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to fetch user! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:fetchUser,
        };
      } 

    }catch(error){
      console.log(error)
    }
  }

  
  async fetchThreadForm(){
    try{
      
      const fetchThread = await this.AdminRepository.fetchThread()
      if(!fetchThread){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to fetch thread! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:fetchThread,
        };
      }

    }catch(error){
      console.log(error)
    }
  }

  

  async threadActionStatusForm(threadId:string , actionStatus:string){
    try{
      
      const ActionStatus = await this.AdminRepository.threadActionStatus(threadId , actionStatus)
      if(!ActionStatus){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to change action! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:ActionStatus,
        };
      }

    }catch(error){
      console.log(error)
    }
  }

  async editThreadForm(threadId:string , tags:string[] , content:string,title:string){
    try{
      const thread = { threadId ,title , content , tags }

      const editThread = await this.AdminRepository.editThread(thread)
      if(!editThread){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to edit thread! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:editThread,
        };
      }
    }catch(error){
      console.log(error)
    }
  }

  
  async deleteUserCommentForm(threadId:string , userId:string ){
    try{


      const deleteuserComment = await this.AdminRepository.deleteUserComment(threadId , userId )
      if(!deleteuserComment){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to delete user comment! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:deleteuserComment,
        };
      }
    }catch(error){
      console.log(error)
    }
  }

  
  async deleteThreadForm(threadId:string ){
    try{


      const deleteThread = await this.AdminRepository.deleteThread(threadId )
      if(!deleteThread){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to delete thread! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:deleteThread,
        };
      }
    }catch(error){
      console.log(error)
    }
  }

  async fetchResource(){
    try{


      const fetchResource = await this.AdminRepository.fetchResource()
      if(!fetchResource){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to fetch resource! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:fetchResource,
        };
      }
    }catch(error){
      console.log(error)
    }
  }

  async resourceActionStatusForm(resourceId:string , actionStatus:string){
    try{
      
      const ActionStatus = await this.AdminRepository.resourceActionStatus(resourceId , actionStatus)
      if(!ActionStatus){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to change  action! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:ActionStatus,
        };
      }

    }catch(error){
      console.log(error)
    }
  }

  

  async fetchBlogsForm(){
    try{


      const fetchBlogs = await this.AdminRepository.fetchBlogs()
      if(!fetchBlogs){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to fetch blog! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:fetchBlogs,
        };
      }
    }catch(error){
      console.log(error)
    }
  }

  
  async blogActionStatusForm(blogId:string , actionStatus:string){
    try{


      const ActionStatus = await this.AdminRepository.blogActionStatus(blogId , actionStatus)
      if(!ActionStatus){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to change action! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:ActionStatus,
        };
      }
    }catch(error){
      console.log(error)
    }
  }

  
  async fetchPalliativeForm(){
    try{


      const fetchPalliative = await this.AdminRepository.fetchPalliative()
      if(!fetchPalliative){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to fetch palliative unit! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:fetchPalliative,
        };
      }
    }catch(error){
      console.log(error)
    }
  }


  async addPalliativeForm( name:string , location:string , services:string , contactDetails:string ){
    try{

       const unit = {name , location , services , contactDetails}
      const addPalliative = await this.AdminRepository.addPalliative(unit)
      if(!addPalliative){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to add palliative unit! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:addPalliative,
        };
      }
    }catch(error){
      console.log(error)
    }
  }
  

  async editPalliativeForm(_id:string , name:string , location:string , services:string , contactDetails:string ){
    try{

       const unit = {_id , name , location , services , contactDetails}
      const editPalliative = await this.AdminRepository.editPalliative(unit)
      if(!editPalliative){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to edit palliative unit! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:editPalliative,
        };
      }
    }catch(error){
      console.log(error)
    }
  }

  
  async removePalliativeForm(unitid:string){
    try{

      const removePalliative = await this.AdminRepository.removePalliative(unitid)
      if(!removePalliative){
        return {
          success: false,
          status: 400,
          data:{
            message:"Failed to remove palliative unit! ,Please try later"
          },
        };
      }else{
        return {
          success: true,
          status: 200,
          data:removePalliative,
        };
      }
    }catch(error){
      console.log(error)
    }
  }

}

export default AdminUsecase;