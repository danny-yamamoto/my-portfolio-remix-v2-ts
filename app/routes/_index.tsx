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
      <header><h1 className="fa-inverse">Welcome to Remix</h1></header>
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
