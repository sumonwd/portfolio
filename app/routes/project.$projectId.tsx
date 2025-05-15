import type { Route } from "./+types/project.$projectId";
import ViewProject from "../components/ViewProject.jsx";
import { getProjectById } from "../data/projects.jsx";

export function meta({ params }: Route.MetaArgs) {
  const project = getProjectById(params.projectId);

  return [
    { title: project ? `${project.title} - Portfolio` : "Project Not Found" },
    { name: "description", content: project?.description || "Project details" },
  ];
}

export default function ProjectView({ params }: Route.ComponentProps) {
  return <ViewProject projectId={params.projectId} />;
}
