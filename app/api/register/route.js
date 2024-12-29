import bcrypt from "bcrypt";
import { userModel } from "./user.model";
import { dbConnect } from "../lib/db";
import { registerSchema } from "./user.validation";

export async function POST(req) {
  await dbConnect();

  const { email, password, phoneNumber, name } = await req.json();

  const { error } = registerSchema.validate({ email, password, phoneNumber, name });
  if (error) {
    return new Response(
      JSON.stringify({ error: error.details.map((detail) => detail.message) }),
      { status: 400 }
    );
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists." }), {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    email,
    password: hashedPassword,
    phoneNumber,
    name,
  });

  const { password: _, ...userWithoutPassword } = newUser.toObject();

  return new Response(JSON.stringify(userWithoutPassword), { status: 201 });
}
