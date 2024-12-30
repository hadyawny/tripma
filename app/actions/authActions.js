'use server'

import { signIn, signOut } from "@/auth";

export async function socialLogin(formData) {
  const action = formData.get("action");
  await signIn(action,{redirectTo: "/"});
}

export async function logout() {
    await signOut({redirectTo: "/"});
}
