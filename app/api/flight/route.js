import { NextResponse } from "next/server";
import { flightModel } from "./flight.model";
import { dbConnect } from "../lib/db";
import { flightSchema } from "./flight.validation";


export async function GET(req) {
  await dbConnect();

    // Get query parameters from the request URL
    const { searchParams } = req.nextUrl;
    const filters = {};
  
    // Add filtering by 'from' city, 'to' city, 'airline', and 'price range'
    if (searchParams.has('from')) {
      filters.from = searchParams.get('from');
    }
  
    if (searchParams.has('to')) {
      filters.to = searchParams.get('to');
    }
  
    if (searchParams.has('departDay')) {
      filters.departDay = searchParams.get('departDay');
    }

     if (searchParams.has('airline')) {
    const airline = searchParams.get('airline').replace(/\s+/g, ' ').trim();  // Normalize spaces
    filters.airline = { $regex: new RegExp(`^${airline}$`, 'i') };  // Case-insensitive match, ensure exact match
  }
  
    if (searchParams.has('maxPrice')) {
      const maxPrice = searchParams.get('maxPrice');
      filters.price = { $lte: parseInt(maxPrice, 10) };
    }
    

  try {
    const flights = await flightModel.find(filters);
    return NextResponse.json(flights);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch flights" }, { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  const { error } = flightSchema.validate(body);
  if (error) {
    return NextResponse.json(
      { error: error.details.map((detail) => detail.message) },
      { status: 400 }
    );
  }

  try {
    const newFlight = new flightModel(body);
    await newFlight.save();

    return NextResponse.json(newFlight, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
