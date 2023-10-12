import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getExperience } from "~/utils/experience.server";

export const loader = async () => {
    const experience = await getExperience()
    return json(experience)
} 

export default function PortfolioExperienceRoute() {
    const experience: any[] = useLoaderData()
    return (
        <ul>
        {experience && experience.map(({ id, company, position }) => (
            <li key={id} className="truncate-list-item">{id}: {position} @ {company}</li>
        ))}
        </ul>
    );
}
