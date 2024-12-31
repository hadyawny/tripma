import mongoose from 'mongoose';

const passengerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true, match: /\S+@\S+\.\S+/ }, 
  phoneNumber: { type: String, required: true },
  emergencyFirstName: { type: String, required: true },
  emergencyLastName: { type: String, required: true },
  emergencyEmail: { type: String, required: true, match: /\S+@\S+\.\S+/ },
  emergencyPhoneNumber: { type: String, required: true },
  travellerNumber: { type: String, required: true },

  // Optional values
  middleName: { type: String, default: '' },
  suffix: { type: String, default: '' },
  redressNumber: { type: String, default: '' },
});

const bookingSchema = new mongoose.Schema({
  passengerList: { 
    type: [passengerSchema],
    required: true,
  },
  selectedDepartingFlight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'flight', // Assuming you have a Flight model
    required: true,
  },
  selectedReturningFlight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'flight', 
    required: false, 
  },
  selectedSeatsDeparting: {
    type: [String],
    required: true,
  },
  selectedSeatsReturning: {
    type: [String], 
    required: false,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    required: true,
  },
}, { timestamps: true });

export const bookingModel = mongoose.model.booking || mongoose.model('booking', bookingSchema);

