"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreValidator = void 0;
const Joi = require("joi");
exports.scoreValidator = Joi.object().keys({
    score: Joi.number().integer().min(0).max(100).required(),
});
