import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <section className="container flex flex-col items-center justify-center">
      <Outlet />
    </section>
  );
}
