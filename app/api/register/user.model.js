import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  bookings: [],
},);

export const userModel = mongoose.models.user || mongoose.model("user", userSchema);
