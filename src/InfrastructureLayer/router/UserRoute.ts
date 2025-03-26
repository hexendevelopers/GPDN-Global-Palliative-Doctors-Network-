import express, { Request, Response, NextFunction } from "express";

//controller import
import UserController from "../../ControllerLayer/UserController/UserController";

//usecase import
import UserUsecase from "../../UsecaseLayer/UserUsecase/UserUsecase";

// error handle
// import errorHandle from '../middleware/ErrorHandlingMiddleware';
// import userAuth  from '../middleware/UserMiddleware';


//repository import
import UserRepository from "../repository/UserRepository/UserRepository";

//services import
import GenerateOtp from "../services/GenerateOtp";
import EncryptPassword from "../services/BcryptPassword";
import SendEmail from "../services/SendEmail";
import {AppWriteOtp} from "../services/AppWriteOtp";
import JWTToken from "../services/GenerateToken";
 
//services
const generateOtp = new GenerateOtp();
const encryptPassword = new EncryptPassword();
const sendEmail = new SendEmail();
const jwtToken = new JWTToken();
const appWriteOtp = new AppWriteOtp()

//repositories
const userRepository = new UserRepository();

//useCases
const userUsecase = new UserUsecase(
  userRepository,
  generateOtp,
  encryptPassword,
  jwtToken,
  appWriteOtp,
  sendEmail
);

//controllers
const userController = new UserController(userUsecase);

const route = express.Router();

//  Register, Login, Logout, Password Reset.

route.post("/Register", (req, res, next) => {
    userController.Register(req, res, next);
  });

// route.post("/Login", (req, res, next) => {
//     userController.Login(req, res, next);
//   });

//   route.post("/Verify", (req, res, next) => {
//     userController.Verify(req, res, next);
//   });

//   route.post("/Logout", (req, res, next) => {
//     userController.Logout(req, res, next);
//   });

  route.post("/ResetORForgotPassword", (req, res, next) => {
    userController.ResetORForgotPassword(req, res, next);
  });

  route.post("/VerifyOtp", (req, res, next) => {
    userController.VerifyOtp(req, res, next);
  });

// route.use(errorHandle);
 

export default route;
