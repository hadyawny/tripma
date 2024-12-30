import mongoose from "mongoose";

const schema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  fromCity: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  toCity: {
    type: String,
    required: true,
  },
  departDay: {
    type: String,
    required: true,
  },
  airline: {
    type: String,
    required: true,
  },
  fromTime: {
    type: String,
    required: true,
  },
  toTime: {
    type: String,
    required: true,
  },
  stops: {
    type: Number,
    required: true,
  },
  stopLength: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  airlineLogo: {
    type: String,
    required: true,
  },
  bookedSeats: {
    type: [String],
    required: true,
  },
});

export const flightModel = mongoose.models.flight || mongoose.model("flight", schema);

