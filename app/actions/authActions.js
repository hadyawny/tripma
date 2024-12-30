"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[a-z]/, "Password must include a lowercase letter")
    .regex(/[0-9]/, "Password must include a number")
    .regex(
      /[!@#$%^&*]/,
      "Password must include a special character (!@#$%^&*)"
    ),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[a-z]/, "Password must include a lowercase letter")
    .regex(/[0-9]/, "Password must include a number")
    .regex(
      /[!@#$%^&*]/,
      "Password must include a special character (!@#$%^&*)"
    ),

});

export async function userSignUp(prevState, formData) {
  const action = formData.get("action");

  if (action === "google") {
    await signIn(action, { redirectTo: "/" });
  } else if (action === "signup") {
    const email = formData.get("email");
    const password = formData.get("password");
    const terms = formData.has("terms");

    const validationResult = signupSchema.safeParse({
      email,
      password,
      terms,
    });

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return {
        ...prevState,
        data: { email, password, terms },
        zodErrors: validationResult.error.flatten().fieldErrors,
        message: "Missing Fields Failed to Register",
      };
    }

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        await signIn("credentials", {
          email,
          password,
          redirect: false,
      });
    } else {
        const error = await response.json();

        return { error: error.message || "Signup failed." };
      }
    } catch (err) {
      return { error: "An error occurred during signup. Please try again." };
    }
  }
}

export async function userSignin(prevState, formData) {
  const action = formData.get("action");

  if (action === "google") {
    await signIn(action, { redirectTo: "/" });
  } else if (action === "signin") {
    const email = formData.get("email");
    const password = formData.get("password");

    const validationResult = signinSchema.safeParse({
      email,
      password,
    });

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return {
        ...prevState,
        data: { email, password },
        zodErrors: validationResult.error.flatten().fieldErrors,
        message: "Missing Fields Failed to Register",
      };
    }

    try {
      const response = await fetch("http://localhost:3001/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        await signIn("credentials", {
          email,
          password,
          redirect: false,
            

      });
    } else {
        const error = await response.json();

        return { error: error.message || "signin failed." };
      }
    } catch (err) {
      return { error: "An error occurred during signup. Please try again." };
    }
  }
}

export async function logout() {
  await signOut({ redirectTo: "/" });
}
