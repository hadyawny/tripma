import { NextResponse } from "next/server";
import { airportModel } from "./airport.model";
import { dbConnect } from "../lib/db";
import { airportSchema } from "./airport.validation";

// GET all airports
export async function GET(req) {
  await dbConnect();
  try {
    const airports = await airportModel.find({});
    return NextResponse.json(airports);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch airports" }, { status: 500 });
  }
}

// POST a new airport
export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  // Validate the request body
  const { error } = airportSchema.validate(body);
  if (error) {
    return NextResponse.json(
      { error: error.details.map((detail) => detail.message) },
      { status: 400 }
    );
  }

  try {
    const newAirport = new airportModel(body);
    await newAirport.save();

    return NextResponse.json(newAirport, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
