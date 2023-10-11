import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { CombinedJson } from "~/types";
import { getArticles } from "~/utils/articles.server";
import { getExperience } from "~/utils/experience.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;
    console.log(`id: ${id}`)

    let articles = null
    let experience = null
    if (id == "experience") {
        experience = await getExperience();
    }
    if (id == "articles") {
        articles = await getArticles(20)
    }
    const combinedJson = {
        displayArticles: articles,
        displayExperience: experience,
    };
    return json(combinedJson);
}

export default function PortfolioIdRoute() {
    const data: CombinedJson = useLoaderData();
    return (
      <article>
        <ul>
            {data.displayArticles && data.displayArticles.map(({ title, url, id }) => (
            <li key={id}>
                <Link key={id} to={url} target="_blank">{title}</Link>
            </li>
            ))}
            {data.displayExperience && data.displayExperience.map(({ id, company, position }) => (
            <li key={id}>{id}: {position} @ {company}</li>
            ))}
        </ul>
      </article>
    );
}
