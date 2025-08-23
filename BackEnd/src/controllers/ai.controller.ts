import { Request, Response } from "express";
import aiService from "../services/ai.service";



export const getReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const code: string = req.body.code;

    if (!code) {
      res.status(400).send("Prompt is required");
      return;
    }

    const response = await aiService(code);
    res.send(response);
  } catch (error) {
    console.error("Error in getReview:", error);
    res.status(500).send("Internal Server Error");
  }
};
