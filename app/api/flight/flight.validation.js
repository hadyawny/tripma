import Joi from "joi";

export const flightSchema = Joi.object({
  from: Joi.string().required(),
  fromCity: Joi.string().required(),
  to: Joi.string().required(),
  toCity: Joi.string().required(),
  departDay: Joi.string().required(),
  airline: Joi.string().required(),
  fromTime: Joi.string().required(),
  toTime: Joi.string().required(),
  stops: Joi.number().required(),
  stopLength: Joi.string().optional(),
  price: Joi.number().required(),
  airlineLogo: Joi.string().required(),
  bookedSeats: Joi.array().items(Joi.string()).required(),
});
