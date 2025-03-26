import mongoose, { Schema, Document, Model, Types } from "mongoose";
import ThreadRepository from "../../InfrastructureLayer/repository/ThreadRepository/ThreadRepository";
import IUser from "../../DomainLayer/UserDomain";
import generateOtp from "../../InfrastructureLayer/services/GenerateOtp";
import EncryptPassword from "../../InfrastructureLayer/services/BcryptPassword";
import sendOtp from "../../InfrastructureLayer/services/SendEmail";
import {AppWriteOtp} from "../../InfrastructureLayer/services/AppWriteOtp";
import {account} from "../../InfrastructureLayer/services/AppWriteOtp";
import JWTToken from "../../InfrastructureLayer/services/GenerateToken";

import { v4 as uuidv4 } from 'uuid';

import { Client, Account, ID } from "appwrite";
    

class ThreadUsecase {
  private ThreadRepository: ThreadRepository;
  private generateOtp: generateOtp;
  private EncryptPassword: EncryptPassword;
  private JwtToken: JWTToken;
  private AppWriteOtp: AppWriteOtp;
  private generateEmail: sendOtp;

  constructor(
    ThreadRepository: ThreadRepository,
    generateOtp: generateOtp,
    EncryptPassword: EncryptPassword,
    jwtToken: JWTToken,
    AppWriteOtp:AppWriteOtp,
    generateEmail: sendOtp
  ) {
    this.ThreadRepository = ThreadRepository;
    this.generateOtp = generateOtp;
    this.EncryptPassword = EncryptPassword;
    this.JwtToken = jwtToken;
    this.AppWriteOtp = AppWriteOtp;
    this.generateEmail = generateEmail;
  }

    async AddThreadForm(title:string , content:string , authorId:string , tags:[string] , likes:number , dislikes:number , shares:number , commentsCount:number ,approvalStatus:boolean){
    try{

      const thread = {  title, content, authorId, tags,   likes, dislikes, shares, commentsCount ,approvalStatus };
      
      const addThread = await this.ThreadRepository.addThread(thread);
      return addThread;
        
    }catch(error){
        console.log(error)
    }
}


async AddCommentForm( threadId:string , authorId:string , content:string ){
  try{

    const comment = {threadId , authorId ,content }

    const addComment = await this.ThreadRepository.addComment(comment) ;
    return addComment ;
      
  }catch(error){
      console.log(error)
  }
}

async EditCommentForm(_id:string , threadId:string , authorId:string , content:string ){
  try{

    const comment = { _id , threadId , authorId , content }

    const editComment = await this.ThreadRepository.editComment(comment) ;
    return editComment ;    
      
  }catch(error){
      console.log(error)
  }
}


async EditThreadForm(_id:string  , title:string  , content:string  , authorId:string  , tags:string[] ){
  try{

    const thread = { _id , title , content , tags }

    const editThread = await this.ThreadRepository.editThread(thread) ;
    return editThread ;   
      
  }catch(error){
      console.log(error)
  }
}

async DeleteThreadForm(threadId:string ){
  try{

    const deleteThread = await this.ThreadRepository.deleteThread(threadId)

    return "Thread deleted successfully";
      
  }catch(error){
      console.log(error)
  }
}

async DeleteCommentForm(commentId:string ){
  try{

     await this.ThreadRepository.deleteComment(commentId)

    return "Thread deleted successfully";
      
  }catch(error){
      console.log(error)
  }
}

async CommentLikesForm( commentId:string , Likes:number ){
  try{

    const commentLikes = await this.ThreadRepository.commentLikes(commentId , Likes)
    return commentLikes ;
      
  }catch(error){
      console.log(error)
  }
}

async ThreadUpvoteForm( threadId:string , Likes:number ){
  try{

      
  }catch(error){
      console.log(error)
  }
}

async CommentDislikesForm( commentId:string , dislikes:number ){
  try{

      
  }catch(error){
      console.log(error)
  }
}

async ThreadDownvoteForm( threadId:string , dislikes:number ){
  try{

      
  }catch(error){
      console.log(error)
  }
}

async ThreadSharesForm( threadId:string , shares:number ){
  try{

    const threadShares = await this.ThreadRepository.ThreadShare(threadId,shares)
    return threadShares ;
      
  }catch(error){
      console.log(error)
  }
}


async ThreadSearchForm( searchInp:string  ){
  try{

    const searchThread = await this.ThreadRepository.searchThread(searchInp)

    return searchThread;
      
  }catch(error){
      console.log(error)
  }
}

}

export default ThreadUsecase;