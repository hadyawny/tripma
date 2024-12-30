
import { logout } from "@/app/actions/authActions";
import React from "react";

export default function LogoutForm() {
  return (
    <div>
      <form action={logout}>
        <button className=" bg-purpleBlue text-grey-100 px-5 py-3.5 rounded-md" type="submit">
          Sign out
        </button>
      </form>
    </div>
  );
}
