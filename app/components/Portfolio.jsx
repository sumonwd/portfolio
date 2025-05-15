import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  ChevronDown,
  Code2,
  Globe,
  Database,
  Smartphone,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Sun,
  Moon,
} from "lucide-react";
import { projects } from "../data/projects.jsx";
import { useTheme } from "../contexts/ThemeContext";

export default function Portfolio() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted]);

  const navigation = ["Home", "About", "Skills", "Projects", "Contact"];

  const skills = {
    languages: ["PHP", "JavaScript", "Dart", "TypeScript", "HTML/CSS"],
    frameworks: {
      Backend: ["Laravel", "Node.js"],
      Frontend: ["React.js", "Next.js", "Vue.js", "Nuxt.js"],
      Mobile: ["Flutter"],
      CSS: ["TailwindCSS", "Bootstrap", "Material-UI"],
    },
  };

  const scrollToSection = (section) => {
    setActiveSection(section.toLowerCase());
    setIsMenuOpen(false);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProject = (projectId) => {
    console.log(projectId);
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white min-h-screen overflow-hidden transition-colors">
      {/* Animated Background - only render when mounted */}
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-gray-200 dark:border-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Senior Software Developer
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              5 Years of Experience • Full-Stack • Mobile Development
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["PHP", "JavaScript", "React", "Laravel", "Flutter"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm border border-gray-300 dark:border-slate-700"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <button
            onClick={() => scrollToSection("Projects")}
            className="group bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 px-8 py-3 rounded-full font-medium text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            View My Work
            <ChevronDown
              className="inline-block ml-2 group-hover:translate-y-1 transition-transform"
              size={20}
            />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate Senior Software Developer with 5 years of
                experience creating innovative digital solutions. Specializing
                in full-stack development and mobile applications, I bring ideas
                to life through clean code and modern technologies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                My expertise spans from building scalable backend systems with
                Laravel and PHP to creating dynamic user interfaces with
                React.js and Vue.js. I also develop cross-platform mobile
                applications using Flutter.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Calendar
                    className="text-indigo-600 dark:text-indigo-400"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    5 Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="text-green-600 dark:text-green-400"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    50+ Projects Completed
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Globe size={32} />,
                  label: "Web Development",
                  value: "50+ Projects",
                },
                {
                  icon: <Smartphone size={32} />,
                  label: "Mobile Apps",
                  value: "15+ Apps",
                },
                {
                  icon: <Database size={32} />,
                  label: "Databases",
                  value: "SQL & NoSQL",
                },
                {
                  icon: <Code2 size={32} />,
                  label: "Languages",
                  value: "5+ Languages",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors"
                >
                  <div className="text-indigo-600 dark:text-indigo-400 mb-2">
                    {stat.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{stat.label}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gray-100 dark:bg-slate-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                Frameworks & Tools
              </h3>
              <div className="space-y-4">
                {Object.entries(skills.frameworks).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-white dark:bg-slate-800 rounded text-sm border border-gray-200 dark:border-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 p-6 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleViewProject(project.id)}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out if you'd like to collaborate or just say hi!
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-slate-800">
        <p>&copy; 2025 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
