import mongoose from "mongoose";

global.mongoose = global.mongoose || { conn: null, promise: null };

export async function dbConnect() {
  if (global.mongoose.conn) {
    console.log("MongoDB connection is already established");
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const connString = process.env.MONGODB_URL;

    if (!connString) {
      throw new Error("MONGODB_URL is not defined in environment variables");
    }

    global.mongoose.promise = mongoose.connect(connString, {
      autoIndex: true, 
    });
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
    console.log("MongoDB connection successful");
    return global.mongoose.conn;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
}
