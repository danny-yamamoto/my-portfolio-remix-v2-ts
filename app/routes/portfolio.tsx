import { Link, Outlet } from "@remix-run/react";

// route is here.
export default function PortfolioRoute() {
  return (
    <div id="root">
        <header><h1>Welcome to my portfolio</h1></header>
        <div className="flex-container">
            <div className="flex-item">
                <h2 id="articles"><Link className="fa-inverse contents-button" id="articles" to={`/portfolio/articles`}>Articles</Link></h2>
                <h2 id="experience"><Link className="fa-inverse contents-button" id="experience" to={`/portfolio/experience`}>Experience</Link></h2>
            </div>
            <div className="flex-item">
                <Outlet />
            </div>
        </div>
    </div>
  );
}
