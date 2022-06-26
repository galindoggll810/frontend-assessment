import express from "express";
import cors from "cors";
import helmet from "helmet";
import { todoItemRouter } from "./routes";


export const getApp = () => {
  const app = express();

  app.use(helmet());
  app.use(cors({
    origin: process.env.APP_DOMAIN || 'http://localhost:3000'
  }));
  app.use(express.json());
  app.use("/api/todoItems", todoItemRouter);
  return app;
};
