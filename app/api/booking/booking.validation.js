import Joi from 'joi';

const passengerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  dateOfBirth: Joi.date().iso().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  emergencyFirstName: Joi.string().required(),
  emergencyLastName: Joi.string().required(),
  emergencyEmail: Joi.string().email().required(),
  emergencyPhoneNumber: Joi.string().required(),
  travellerNumber: Joi.string().required(),

  middleName: Joi.string().optional().allow(''),
  suffix: Joi.string().optional().allow(''),
  redressNumber: Joi.string().optional().allow(''),
});

export const bookingValidation = Joi.object({
  passengerList: Joi.array().items(passengerSchema).min(1).required(),
  selectedDepartingFlight: Joi.string().required(), 
  selectedReturningFlight: Joi.string().optional(), 
  selectedSeatsDeparting: Joi.array().items(Joi.string()).min(1).required(),
  selectedSeatsReturning: Joi.array().items(Joi.string()).optional(),
  user_id: Joi.string().required(), 
});

