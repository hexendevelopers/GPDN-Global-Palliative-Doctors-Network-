import mongoose, { Schema, Document, Model, Types } from "mongoose";
import NewsAndBlogsRepository from "../../InfrastructureLayer/repository/NewsAndBlogsRepository/NewsAndBlogsRepository";
import generateOtp from "../../InfrastructureLayer/services/GenerateOtp";
import EncryptPassword from "../../InfrastructureLayer/services/BcryptPassword";
import sendOtp from "../../InfrastructureLayer/services/SendEmail";
import {AppWriteOtp} from "../../InfrastructureLayer/services/AppWriteOtp";
import {account} from "../../InfrastructureLayer/services/AppWriteOtp";
import JWTToken from "../../InfrastructureLayer/services/GenerateToken";


import { Client, Account, ID } from "appwrite";

// import IUser from "../../domainLayer/userDomain";
// import UserModel from "../../infrastructureLayer/database/UserModel";

class NewsAndBlogsUsecase {
  private NewsAndBlogsRepository: NewsAndBlogsRepository;
  private generateOtp: generateOtp;
  private EncryptPassword: EncryptPassword;
  private JwtToken: JWTToken;
  private AppWriteOtp: AppWriteOtp;
  private generateEmail: sendOtp;

  constructor(
    NewsAndBlogsRepository: NewsAndBlogsRepository,
    generateOtp: generateOtp,
    EncryptPassword: EncryptPassword,
    jwtToken: JWTToken,
    AppWriteOtp:AppWriteOtp,
    generateEmail: sendOtp
  ) {
    this.NewsAndBlogsRepository = NewsAndBlogsRepository;
    this.generateOtp = generateOtp;
    this.EncryptPassword = EncryptPassword;
    this.JwtToken = jwtToken;
    this.AppWriteOtp = AppWriteOtp;
    this.generateEmail = generateEmail;
  }

  async FetchNewsAndBlogsForm(){
    try{
        const fetchNewsAndBlogs =await  this.NewsAndBlogsRepository.fetchNewsAndBlogs();
        if(!fetchNewsAndBlogs){
          return {
            success: false,
            status: 400,
            data:{
              message:"Failed to fetch newsandblogs! ,Please try later."
            },
          };
        }else{
          return {
            success: true,
            status: 200,
            data:fetchNewsAndBlogs,
          };
        }
    }catch(error){
      console.log(error)
    }
   }

   
   async AddNewAndBlogsForm(title:string , content:string , authorId:string){
    try{
        const NewsAndBlogs = {title , content , authorId}
        const addNewsAndBlogs =await  this.NewsAndBlogsRepository.addNewsAndBlogs(NewsAndBlogs);
        if(!addNewsAndBlogs){
          return {
            success: false,
            status: 400,
            data:{
              message:"Failed to add newsandblogs! ,Please try later."
            },
          };
        }else{
          return {
            success: true,
            status: 200,
            data:addNewsAndBlogs,
          };
        }
    }catch(error){
      console.log(error)
    }
   }

   
   async EditNewsAndBlogsForm(title:string , content:string , authorId:string){
    try{
        const editNewsAndBlogs = {title , content , authorId}
        const EditNewsAndBlogs =await  this.NewsAndBlogsRepository.editNewsAndBlogs(editNewsAndBlogs);
        if(!EditNewsAndBlogs){
          return {
            success: false,
            status: 400,
            data:{
              message:"Failed to edit newsandblogs! ,Please try later."
            },
          };
        }else{
          return {
            success: true,
            status: 200,
            data:EditNewsAndBlogs,
          };
        }    }catch(error){
      console.log(error)
    }
   }

   
   async DeleteNewsAndBlogsForm(BlogId:string){
    try{
        const deleteNewsAndBlogs =await  this.NewsAndBlogsRepository.deleteNewsAndBlogs(BlogId);
        if(!deleteNewsAndBlogs){
          return {
            success: false,
            status: 400,
            data:{
              message:"Failed to delete newsandblogs! ,Please try later."
            },
          };
        }else{
          return {
            success: true,
            status: 200,
            data:deleteNewsAndBlogs,
          };
        } 
       }catch(error){
      console.log(error)
    }
   }

   

   async NewsAndBlogsLikeForm(BlogId:string , userId:string){
    try{
        const NewsAndBlogs =await  this.NewsAndBlogsRepository.findNewsAndBlogsById(BlogId);
        if (!NewsAndBlogs) {
          return {
            success: false,
            status: 400,
            data:{
              message:"NewsAndBlogs not found"
            },
          };
        }
    
        const userObjectId = new mongoose.Types.ObjectId(userId);
    
        const likeIndex = NewsAndBlogs.likes?.findIndex((id:any) => id.equals(userObjectId));
        const dislikeIndex = NewsAndBlogs.dislikes?.findIndex((id:any) => id.equals(userObjectId));
    
        if (likeIndex !== -1) {
          NewsAndBlogs.like?.splice(likeIndex, 1);
        } else {
          NewsAndBlogs.like?.push(userObjectId);
          
          if (dislikeIndex !== -1) {
            NewsAndBlogs.dislikes?.splice(dislikeIndex, 1);
          }
        }
    
        await NewsAndBlogs.save();
        return {
          success: true,
          status: 200,
          data:NewsAndBlogs,
        };
        }catch(error){
      console.log(error)
    }
   }


   async NewsAndBlogsDislikeForm(BlogId:string , userId:string){
    try{
        const NewsAndBlogs =await  this.NewsAndBlogsRepository.findNewsAndBlogsById(BlogId);
        if (!NewsAndBlogs) {
          return {
            success: false,
            status: 400,
            data:{
              message:"NewsAndBlogs not found"
            },
          };
          }
    
        const userObjectId = new mongoose.Types.ObjectId(userId);
    
        const likeIndex = NewsAndBlogs.likes?.findIndex((id:any) => id.equals(userObjectId));
        const dislikeIndex = NewsAndBlogs.dislikes?.findIndex((id:any) => id.equals(userObjectId));
    
        if (dislikeIndex !== -1) {
          NewsAndBlogs.dislike?.splice(dislikeIndex, 1);
        } else {
          NewsAndBlogs.dislike?.push(userObjectId);
          
          if (dislikeIndex !== -1) {
            NewsAndBlogs.likes?.splice(likeIndex, 1);
          }
        }
    
        await NewsAndBlogs.save();
        return {
          success: true,
          status: 200,
          data:NewsAndBlogs,
        };
    }catch(error){
      console.log(error)
    }
   }


}

export default NewsAndBlogsUsecase;