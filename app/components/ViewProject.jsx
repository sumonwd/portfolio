import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Globe,
  Calendar,
  Users,
  CheckCircle,
  Code2,
  Sun,
  Moon,
} from "lucide-react";
import { getProjectById } from "../data/projects.jsx";
import { useTheme } from "../contexts/ThemeContext";

export default function ViewProject({ projectId }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeImage, setActiveImage] = useState(0);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const projectData = getProjectById(projectId);
    if (projectData) {
      setProject(projectData);
    } else {
      navigate("/");
    }
  }, [projectId, navigate]);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted]);

  if (!project) {
    return null;
  }

  const tabs = ["Overview", "Features", "Technical", "Gallery"];

  const handleBackToPortfolio = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white min-h-screen transition-colors">
      {isMounted && (
        <div
          className="fixed inset-0 pointer-events-none transition-all duration-300"
          style={{
            background:
              theme === "dark"
                ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, transparent 40%)`
                : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08) 0%, transparent 40%)`,
          }}
        />
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-gray-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleBackToPortfolio}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="hidden sm:inline">Source Code</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
              >
                <Globe size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {project.tagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar
                className="text-indigo-600 dark:text-indigo-400"
                size={20}
              />
              <span className="text-gray-700 dark:text-gray-300">
                {project.year}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users
                className="text-indigo-600 dark:text-indigo-400"
                size={20}
              />
              <span className="text-gray-700 dark:text-gray-300">
                {project.team}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle
                className="text-green-600 dark:text-green-400"
                size={20}
              />
              <span className="text-gray-700 dark:text-gray-300">
                {project.status}
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 dark:bg-slate-800 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === tab.toLowerCase()
                      ? "bg-white dark:bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-900 dark:text-white"
                      : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  {project.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700"
                    >
                      <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        {metric.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-100 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700">
                  <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">
                      {project.testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.testimonial.position}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative">
                  {/* <img
                    src={project.images[0]}
                    alt="Project screenshot"
                    className="rounded-lg shadow-2xl w-full"
                  /> */}
                  <div className="bg-gray-100 dark:bg-slate-800 h-96 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      Project Screenshot
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 dark:from-slate-950/50 to-transparent rounded-lg" />
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-indigo-500 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-indigo-600 dark:text-indigo-400 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 mt-1">
                          •
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-600 dark:text-green-400 mt-1"
                          size={16}
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Technical Tab */}
          {activeTab === "technical" && (
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Technical Stack
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {Object.entries(project.technologies).map(
                  ([category, techs]) => (
                    <div
                      key={category}
                      className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700"
                    >
                      <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="bg-gray-100 dark:bg-slate-800/30 p-8 rounded-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code2 className="text-indigo-600 dark:text-indigo-400" />
                  Architecture Overview
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                      Frontend Architecture
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Built with modern JavaScript frameworks for optimal
                      performance and user experience. Implementing
                      component-based architecture with state management for
                      scalability.
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• Component-based architecture</li>
                      <li>• Server-side rendering for SEO</li>
                      <li>• Responsive design patterns</li>
                      <li>• Progressive web app features</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                      Backend Architecture
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      RESTful API design with robust authentication and
                      authorization. Utilizing modern backend frameworks for
                      scalability and maintainability.
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• Microservices architecture</li>
                      <li>• API-first development</li>
                      <li>• Horizontal scaling capability</li>
                      <li>• Event-driven architecture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Project Gallery
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <div className="bg-gray-100 dark:bg-slate-800 h-96 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      Gallery Image {activeImage + 1}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative rounded-lg overflow-hidden ${
                        activeImage === index ? "ring-2 ring-indigo-500" : ""
                      }`}
                    >
                      <div className="bg-gray-100 dark:bg-slate-800 h-20 w-full flex items-center justify-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Thumb {index + 1}
                        </p>
                      </div>
                      {activeImage === index && (
                        <div className="absolute inset-0 bg-indigo-500/20" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-t from-gray-100 dark:from-slate-900 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in This Project?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Let's discuss how I can help bring your ideas to life with similar
            solutions
          </p>
          <button
            onClick={handleBackToPortfolio}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            View More Projects
          </button>
        </div>
      </section>
    </div>
  );
}
