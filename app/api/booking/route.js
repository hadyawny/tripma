import { NextResponse } from "next/server";
import { bookingValidation } from "./booking.validation";
import { bookingModel } from "./booking.model";
import { dbConnect } from "../lib/db";

export async function GET(req) {
  await dbConnect();

  try {
    const bookings = await bookingModel.find();
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  const { error } = bookingValidation.validate(body);
  if (error) {
    return NextResponse.json(
      { error: error.details.map((detail) => detail.message) },
      { status: 400 }
    );
  }

  try {
    const newBooking = new bookingModel(body);
    await newBooking.save();

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
