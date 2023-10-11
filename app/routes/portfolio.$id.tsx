import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { CombinedJson } from "~/types";
import { getArticles } from "~/utils/articles.server";

export const loader = async () => {
    const articles = await getArticles(20)
    const combinedJson = {
        displayArticles: articles,
      };
      return json(combinedJson);
}

export default function PortfolioIdRoute() {
    const data: CombinedJson = useLoaderData();
    return (
      <article>
        <h2><Link to={`/portfolio`}>Return to top &gt;</Link></h2>
        <ul>
            {data.displayArticles.map(({ title, url, id }) => (
            <li key={id}>
                <Link key={id} to={url} target="_blank">{title}</Link>
            </li>
            ))}
        </ul>
      </article>
    );
}
