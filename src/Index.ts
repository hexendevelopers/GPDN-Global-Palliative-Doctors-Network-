import { httpServer } from "./InfrastructureLayer/config/app";
import { connectDB } from "./InfrastructureLayer/config/connect-DBs";

const PORT = process.env.MYPORT || 3000;

const startServer = async (): Promise<void> => {
  await connectDB();
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
  