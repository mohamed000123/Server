"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rank = exports.words = void 0;
const wordsService = require("../services/words.service");
const words = (req, res) => {
    try {
        let data = wordsService.words();
        res.send({
            status: 200,
            data
        });
    }
    catch (_a) {
        res.send({
            status: 500,
            message: "Internal Server Error"
        });
    }
};
exports.words = words;
const rank = (req, res) => {
    try {
        const score = req.body.score;
        let rank = wordsService.rank(score);
        res.send({
            status: 200,
            rank
        });
    }
    catch (_a) {
        res.send({
            status: 500,
            message: "Internal Server Error"
        });
    }
};
exports.rank = rank;
