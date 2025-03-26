import mongoose, { Schema, Document, Model, Types } from "mongoose";
import MembersAndPalliativeRepository from "../../InfrastructureLayer/repository/MembersAndPalliativeRepository/MembersAndPalliativeRepository";
import generateOtp from "../../InfrastructureLayer/services/GenerateOtp";
import EncryptPassword from "../../InfrastructureLayer/services/BcryptPassword";
import sendOtp from "../../InfrastructureLayer/services/SendEmail";
import {AppWriteOtp} from "../../InfrastructureLayer/services/AppWriteOtp";
// import {account} from "../../InfrastructureLayer/services/AppWriteOtp";
import JWTToken from "../../InfrastructureLayer/services/GenerateToken";


// import { Client, Account, ID } from "appwrite";
// import OtpSession from "../../DomainLayer/OtpSession";

// import IUser from "../../domainLayer/userDomain";
// import UserModel from "../../infrastructureLayer/database/UserModel";

class MemberAndPalliativeUsecase {
  private MembersAndPalliativeRepository: MembersAndPalliativeRepository;
  private generateOtp: generateOtp;
  private EncryptPassword: EncryptPassword;
  private JwtToken: JWTToken;
  private AppWriteOtp: AppWriteOtp;
  private generateEmail: sendOtp;

  constructor(
    MembersAndPalliativeRepository: MembersAndPalliativeRepository,
    generateOtp: generateOtp,
    EncryptPassword: EncryptPassword,
    jwtToken: JWTToken,
    AppWriteOtp:AppWriteOtp,
    generateEmail: sendOtp
  ) {
    this.MembersAndPalliativeRepository = MembersAndPalliativeRepository;
    this.generateOtp = generateOtp;
    this.EncryptPassword = EncryptPassword;
    this.JwtToken = jwtToken;
    this.AppWriteOtp = AppWriteOtp;
    this.generateEmail = generateEmail;
  }

}

export default MemberAndPalliativeUsecase;