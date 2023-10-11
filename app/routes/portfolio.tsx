import { Link, Outlet } from "@remix-run/react";

// route is here.
export default function PortfolioRoute() {
  return (
    <div id="root">
        <header><h1>Welcome to my portfolio</h1></header>
        <div className="flex-container">
            <div className="flex-item">
                <h2 id="articles"><Link className="fa-inverse" id="article" to={`/portfolio/1`}>Articles</Link></h2>
            </div>
            <div className="flex-item">
                <Outlet />
            </div>
        </div>
    </div>
  );
}
