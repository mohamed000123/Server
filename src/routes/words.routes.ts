import express from "express";
import { words, rank } from "../controllers/words.controller";
import { validateRequest } from "../utils/joi";
import { scoreValidator } from "../middleware/validation/scoreValidation";
export const wordsRouter = express.Router();

wordsRouter.get("/words", words);
wordsRouter.post("/rank", validateRequest(scoreValidator, "body"), rank);
