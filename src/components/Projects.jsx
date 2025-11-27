import React from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
    <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
        My Portfolio
    </h2>
    <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
        Featured Projects
    </h3>
    <p className="mt-4 max-w-2xl mx-auto text-slate-500">
        Showcasing expertise in Software Engineering, Artificial Intelligence, and Cloud Computing through real-world applications.
    </p>
</div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
                        >
                            <div className="relative h-48 bg-slate-200 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <Link
                                    to={`/project/${project.id}`}
                                    className="hover:text-blue-600 transition"
                                >
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                                        {project.title} ➡
                                    </h4>
                                </Link>
                                <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="flex items-center gap-4 pt-4 border-t border-slate-100 mt-auto">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm font-medium transition"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm font-medium transition"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
