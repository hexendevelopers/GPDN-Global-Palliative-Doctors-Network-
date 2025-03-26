import IUser from "../../../DomainLayer/UserDomain";
import UserSchema from "../../database/UserSchema";

import UserRepo from "../../../UsecaseLayer/Interface/UserRepo";
import IOtp from "../../../DomainLayer/OtpDomain";
import OtpSchema from "../../database/OtpSchema";

class UserRepository implements UserRepo {
  async findByEmail(email: string): Promise<IUser | any> {
    try {
      const User = await UserSchema.findOne({ email: email });
      return User;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async AddUser(addNewUser: IUser): Promise<IUser | any> {
    try {
      const newUser = new UserSchema(addNewUser);
      const savedUser = await newUser.save();
      return savedUser.toObject() as IUser;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async AddOtp(email: string, otp: number): Promise<IOtp | any> {
    try {
      const newOtp = new OtpSchema({
        email,
        otp,
        otpGeneratedAt: new Date(),
      });

      const savedOtp = await newOtp.save();
      return savedOtp.toObject() as IOtp;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findUserOtp(email: string): Promise<IOtp | any> {
    try {
      const UserOtp = await OtpSchema.findOne({ email });
      return UserOtp;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteUserOtp(email: string): Promise<void | any> {
    try {
      await OtpSchema.deleteOne({ email });
      return "User otp deleted successfully";
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findUserByNumber(phoneNumber: string): Promise<IUser | any> {
    const user = await UserSchema.findOne({ phoneNumber: phoneNumber });
    return user;
  }
}

export default UserRepository;
