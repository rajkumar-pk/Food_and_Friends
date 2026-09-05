import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";
import validator from "validator";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body || {};

  // 1. Check for missing fields first
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler("Please fill all the fields!", 400));
  }

  // 2. Validate format explicitly before reaching Mongoose
  if (!validator.isEmail(email)) {
    return next(new ErrorHandler("Please provide a valid email!", 400));
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      time,
      date,
    });

    return res.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );

      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    return next(error);
  }
};