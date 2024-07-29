import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export default function Red() {
  return (
    <>
      <div> Red</div>
      <Outlet />
    </>
  );
}
