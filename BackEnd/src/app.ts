import express, { Application, Request, Response } from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

export default app;
