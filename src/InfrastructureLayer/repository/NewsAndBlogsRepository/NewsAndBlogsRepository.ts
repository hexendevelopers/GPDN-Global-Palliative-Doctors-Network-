import IBlog from "../../../DomainLayer/BlogDomain.";
import NewsAndBlogsRepo from "../../../UsecaseLayer/Interface/NewsAndBlogsRepo";
import BlogSchema from "../../database/BlogSchema";


class NewsAndBlogsRepository implements NewsAndBlogsRepo {

    
    async fetchNewsAndBlogs(): Promise<string | any> {
        try {
          const NewsAndBlogs = await BlogSchema.find();
          return NewsAndBlogs;
        } catch (error) {
          console.log(error);
          return error;
        }
      }

      
      async addNewsAndBlogs(NewsAndBlogs:IBlog): Promise<string | any> {
        try {
          const newNewsAndBlogs = new BlogSchema(NewsAndBlogs);
          const savedNewsAndBlogs = await newNewsAndBlogs.save();
         return savedNewsAndBlogs;
        } catch (error) {
          console.log(error);
          return error;
        }
      }
      

      async editNewsAndBlogs(NewsAndBlogs:IBlog): Promise<string | any> {
        try {
          const editNewsAndBlogs = await BlogSchema.findByIdAndUpdate(
            NewsAndBlogs._id,
            { $set: { ...NewsAndBlogs } },
            { new: true }
          );
         return editNewsAndBlogs;
        } catch (error) {
          console.log(error);
          return error;
        }
      }
      

      async deleteNewsAndBlogs(BlogId:string): Promise<string | any> {
        try {
          const savedNewsAndBlogs = await BlogSchema.findByIdAndDelete(BlogId);
          return savedNewsAndBlogs;
        } catch (error) {
          console.log(error);
          return error;
        }
      }

      async findNewsAndBlogsById(BlogId:string ): Promise<string | any> {
        try {
          const NewsAndBlogs = await BlogSchema.findOne({ _id : BlogId });
          return NewsAndBlogs;
        } catch (error) {
          console.log(error);
          return error;
        }
      }

}


export default NewsAndBlogsRepository;
