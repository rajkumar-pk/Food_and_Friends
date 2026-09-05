import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required!"],
    minLength: [3, "First name must be at least 3 characters long!"],
    maxLength: [30, "First name must be at most 30 characters long!"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required!"],
    minLength: [3, "Last name must be at least 3 characters long!"], // Fix text here
    maxLength: [30, "Last name must be at most 30 characters long!"], // Fix text here
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required!"],
    minLength: [11, "Phone number must contain exact 11 digits!"],
    maxLength: [11, "Phone number must contain exact 11 digits!"],
  },
  time: {
    type: String,
    required: [true, "Time is required!"],
  },
  date: {
    type: String,
    required: [true, "Date is required!"],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);