import type { Route } from "./+types/home";
import Portfolio from "../components/Portfolio.jsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Senior Software Developer - Portfolio" },
    {
      name: "description",
      content:
        "Professional portfolio showcasing 5 years of experience in full-stack and mobile development",
    },
  ];
}

export default function Home() {
  return <Portfolio />;
}
