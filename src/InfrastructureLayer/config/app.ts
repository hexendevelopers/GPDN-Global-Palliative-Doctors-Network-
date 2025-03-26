import * as dotenv from 'dotenv';
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import http from "http";
import cors from "cors";
import UserRoute from "../router/UserRoute";
import ThreadRoute from "../router/ThreadRoute";
// import agentRoute from "../router/agent-route";


dotenv.config();


const app = express();

export const httpServer = http.createServer(app);

app.use(
  cors({
    origin: "*",
    // methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    // credentials: true,
    // allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/user", UserRoute);
app.use("/thread", ThreadRoute);
// app.use("/admin", adminRoute);
// app.use("/agent", agentRoute);

export default app;
