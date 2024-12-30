import mongoose from "mongoose";

const schema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    maxlength: 5,
  },
  city: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

export const airportModel = mongoose.models.airport ||mongoose.model("airport", schema);

