import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
