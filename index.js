import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "./db/connect.js";
import recipeRouter from "./routes/recipeRoutes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "10mb" }));

const startServer = async () => {
  try {
    await connectDB(); //waits for DB to connect before continuing
    console.log("Database connected");

    app.use("/", recipeRouter);

    app.listen(3000);
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
