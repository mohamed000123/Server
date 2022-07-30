"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordsRouter = void 0;
const express_1 = __importDefault(require("express"));
const words_controller_1 = require("../controllers/words.controller");
const joi_1 = require("../utils/joi");
const scoreValidation_1 = require("../middleware/validation/scoreValidation");
exports.wordsRouter = express_1.default.Router();
exports.wordsRouter.get("/words", words_controller_1.words);
exports.wordsRouter.post("/rank", (0, joi_1.validateRequest)(scoreValidation_1.scoreValidator, "body"), words_controller_1.rank);
