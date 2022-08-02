const Joi = require("joi");
export const scoreValidator = Joi.object().keys({
  score: Joi.number().integer().min(0).max(100).required(),
});
