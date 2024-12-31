"use server";

import { signIn, signOut } from "@/auth";




export async function logout() {
  await signOut({ redirectTo: "/" });
}



export async function nextAuthSignIn(email, password) {
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

}


export async function nextAuthGoogleSignIn() {
  await signIn("google", { redirectTo: "/" });
}