import IBlog from "../../../DomainLayer/BlogDomain.";
import IResource from "../../../DomainLayer/ResourceDomain";
import IThread from "../../../DomainLayer/ThreadsDomain";
import IUnit from "../../../DomainLayer/UnitDomain";
import IUser from "../../../DomainLayer/UserDomain";
import AdminRepo from "../../../UsecaseLayer/Interface/AdminRepo";
import BlogSchema from "../../database/BlogSchema";
import ResourceSchema from "../../database/ResourceSchema";
import ThreadSchema from "../../database/ThreadSchema";
import UnitSchema from "../../database/UnitSchema.";
import UserSchema from "../../database/UserSchema";


class AdminRepository implements AdminRepo {


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

      

      async updateUser(update: IUser): Promise<IUser | any> {
        try {
          const newUser = new UserSchema(update);
          const savedUser = await newUser.save();
          return savedUser.toObject() as IUser;
        } catch (error) {
          console.log(error);
          return error;
        }
      }


      async deleteUser(userId :string): Promise<string | any>{
        try{
         
            const deleteUser = await UserSchema.findByIdAndDelete(userId);
            return 'deleteUser'

        }catch(error){
            console.log(error)
        }
      }

      

      async fetchUser(): Promise<string | any>{
        try{
         
            const fetchUser = await UserSchema.find();
            return fetchUser

        }catch(error){
            console.log(error)
        }
      }

      
      async fetchThread(): Promise<string | any>{
        try{
         
            const fetchThread = await ThreadSchema.find();
            return fetchThread

        }catch(error){
            console.log(error)
        }
      }


      

      async threadActionStatus(threadId :string , actionStatus:string): Promise<string | any>{
        try{
         
            const fetchThread = await ThreadSchema.findByIdAndUpdate(
                threadId,
                { $set: { approvalStatus: actionStatus } },   
                { new: true } 
            );;
            return fetchThread

        }catch(error){
            console.log(error)
        }
      }

      async editThread( thread:IThread): Promise<IThread | any>{
        try{
    
          const editThread = await ThreadSchema.findByIdAndUpdate(
            thread._id, 
            { $set: { ...thread } }, 
            { new: true }
          );

          return editThread;
    
        }catch(error){
          console.log(error)
        }
      }

      

      async deleteUserComment( threadId:string , userId :string): Promise<IThread | any>{
        try{
    
            const deleteUserComment = await ThreadSchema.findByIdAndUpdate(
                threadId,
                { $pull: { comments: userId } },
                { new: true }
              );

          return deleteUserComment;
    
        }catch(error){
          console.log(error)
        }
      }

      

      async deleteThread( threadId:string): Promise<IThread | any>{
        try{
    
            const deleteThread = await ThreadSchema.findByIdAndDelete( threadId );

          return deleteThread;
    
        }catch(error){
          console.log(error)
        }
      }

      
      async fetchResource(): Promise<IResource | any>{
        try{
    
            const fetchResource = await ResourceSchema.find();

          return fetchResource;
    
        }catch(error){
          console.log(error)
        }
      }

      async resourceActionStatus(resourceId :string , actionStatus:string): Promise<string | any>{
        try{
         
            const fetchResource = await ResourceSchema.findByIdAndUpdate(
                resourceId,
                { $set: { approvalStatus: actionStatus } },   
                { new: true } 
            );;
            return fetchResource

        }catch(error){
            console.log(error)
        }
      }
      

      async fetchBlogs(): Promise<IBlog | any>{
        try{
    
            const fetchBlogs = await BlogSchema.find();

          return fetchBlogs;
    
        }catch(error){
          console.log(error)
        }
      }
      
      async blogActionStatus(blogId :string , actionStatus:string): Promise<string | any>{
        try{
         
            const fetchResource = await ResourceSchema.findByIdAndUpdate(
                blogId,
                { $set: { approvalStatus: actionStatus } },   
                { new: true } 
            );;
            return fetchResource

        }catch(error){
            console.log(error)
        }
      }

      async fetchPalliative(): Promise<IUnit | any>{
        try{
          const fetchPalliative = await UnitSchema.find();
          return fetchPalliative;
        }catch(error){
          console.log(error)
        }
      }
      

      async addPalliative(unit:IUnit): Promise<IUnit | any>{
        try{
            const newBlog = new BlogSchema(unit);
            const savedBlog = await newBlog.save();
            return savedBlog;
        }catch(error){
          console.log(error)
        }
      }

      
      async editPalliative(unit:IUnit): Promise<IUnit | any>{
        try{
            const savedBlog = await UnitSchema.findByIdAndUpdate(
                unit?._id,
                { $set: { ...unit } }, 
                { new: true }
              );
            return savedBlog;
        }catch(error){
          console.log(error)
        }
      }
      

      async removePalliative(unitId:string): Promise<IUnit | any>{
        try{
            const removePalliative = await UnitSchema.findByIdAndDelete(unitId);
            return removePalliative;
        }catch(error){
          console.log(error)
        }
      }


}

export default AdminRepository;