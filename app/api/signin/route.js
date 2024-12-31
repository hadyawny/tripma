import bcrypt from 'bcryptjs';
import { userModel } from "../register/user.model";
import { dbConnect } from "../lib/db";

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  // Check if email is provided
  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password are required." }),
      { status: 400 }
    );
  }

  // Find the user by email
  const user = await userModel.findOne({ email });
  if (!user) {
    return new Response(
      JSON.stringify({ mesage: "User not found." }),
      { status: 400 }
    );
  }

  // Compare the provided password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return new Response(
      JSON.stringify({ message: "Invalid User or Password." }),
      { status: 400 }
    );
  }

  // Remove password from the user object before sending the response
  const { password: _, ...userWithoutPassword } = user.toObject();

  // Return the user data without the password
  return new Response(JSON.stringify(userWithoutPassword), { status: 200 });
}
