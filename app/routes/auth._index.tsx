import { redirect } from "@remix-run/react";

export const loader = function () {
  return redirect("/auth/sign-in");
};
