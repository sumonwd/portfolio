import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
 index("routes/home.tsx"),
  route("project/:projectId", "routes/project.$projectId.tsx"),
  // Catch-all route for 404s
  route("*", "routes/404.tsx")
] satisfies RouteConfig;