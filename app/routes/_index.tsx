import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
};

export default function Index() {
  return (
    <div>
      <div id="container">
        <div id="sidebar">
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
