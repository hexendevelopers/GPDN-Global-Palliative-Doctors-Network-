import express, { Request, Response, NextFunction } from "express";

//controller import
import AdminController from "../../ControllerLayer/AdminController/AdminController";

//usecase import
import AdminUsecase from "../../UsecaseLayer/AdminUsecase/AdminUsecase";

// error handle
// import errorHandle from '../middleware/ErrorHandlingMiddleware';
// import userAuth  from '../middleware/UserMiddleware';


//repository import
import AdminRepository from "../repository/AdminRepository/AdminRepository";

//services import
import GenerateOtp from "../services/GenerateOtp";
import EncryptPassword from "../services/BcryptPassword";
import GenerateEmail from "../services/SendEmail";
import {AppWriteOtp} from "../services/AppWriteOtp";
import JWTToken from "../services/GenerateToken";
 
//services
const generateOtp = new GenerateOtp();
const encryptPassword = new EncryptPassword();
const generateEmail = new GenerateEmail();
const jwtToken = new JWTToken();
const appWriteOtp = new AppWriteOtp()

//repositories
const adminRepository = new AdminRepository();

//useCases
const adminUsecase = new AdminUsecase(
  adminRepository,
  generateOtp,
  encryptPassword,
  jwtToken,
  appWriteOtp,
  generateEmail
);

//controllers
const adminController = new AdminController(adminUsecase);

const route = express.Router();

// User Management: Manage users, roles, and permissions. 
// Forum Moderation: Approve, edit, or delete discussions. 
// Content Moderation: Approve/decline blogs and resources. 
// Palliative Care Units Management: Add, edit, remove listings. 
// Analytics Dashboard: Provide user activity insights and KPIs. 


// ------------------ User Management
route.post("/createUser", (req, res, next) => {
  adminController.createUser(req, res, next);
});
route.post("/updateUser", (req, res, next) => {
  adminController.updateUser(req, res, next);
});
route.post("/deleteUser", (req, res, next) => {
  adminController.deleteUser(req, res, next);
});
route.post("/fetchUser", (req, res, next) => {
  adminController.fetchUser(req, res, next);
});

//------------------------Forum Moderation

route.post("/fetchThreads", (req, res, next) => {
  adminController.fetchThreads(req, res, next);
});
route.post("/approveORdeclineThreads", (req, res, next) => {
  adminController.approveORdeclineThreads(req, res, next);
});
route.post("/editThreads", (req, res, next) => {
  adminController.editThreads(req, res, next);
});
route.post("/deleteThreads", (req, res, next) => {
  adminController.deleteThreads(req, res, next);
});

//-----------------------------  Content Moderation

route.post("/fetchResource", (req, res, next) => {
  adminController.fetchResource(req, res, next);
});
route.post("/approveORdeclineResource", (req, res, next) => {
  adminController.approveORdeclineResource(req, res, next);
});
route.post("/fetchBlogs", (req, res, next) => {
  adminController.fetchBlogs(req, res, next);
});
route.post("/approveORdeclineBlogs", (req, res, next) => {
  adminController.approveORdeclineBlogs(req, res, next);
});

//----------------------------Palliative Care Units Management


route.post("/fetchPalliative", (req, res, next) => {
  adminController.fetchPalliative(req, res, next);
});
route.post("/addPalliative", (req, res, next) => {
  adminController.addPalliative(req, res, next);
});
route.post("/editPalliative", (req, res, next) => {
  adminController.editPalliative(req, res, next);
});
route.post("/removePalliative", (req, res, next) => {
  adminController.removePalliative(req, res, next);
});


//-------------------------  Analytics Dashboard




// route.use(errorHandle);
 

export default route;
