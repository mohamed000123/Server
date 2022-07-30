"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const words_routes_1 = require("./routes/words.routes");
let cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
app.listen(4000, () => {
    console.log("server is listening on port 4000");
});
app.use(body_parser_1.default.json());
app.use("/api", words_routes_1.wordsRouter);
