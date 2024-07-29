import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export default function AnotherLayout() {
  return (
    <>
      <div> Header - Another Layout</div>
      <Outlet />
      <div> footer</div>
    </>
  );
}
