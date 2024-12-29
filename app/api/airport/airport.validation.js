import Joi from "joi";

export const airportSchema = Joi.object({
  code: Joi.string()
    .max(5)
    .required()
    .messages({
      "string.base": "Code must be a string",
      "string.max": "Code cannot exceed 5 characters",
      "any.required": "Code is required",
    }),
  city: Joi.string()
    .max(50)
    .required()
    .messages({
      "string.base": "City must be a string",
      "string.max": "City cannot exceed 50 characters",
      "any.required": "City is required",
    }),
});
