import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import {
    FaGithub,
    FaArrowLeft,
    FaCheckCircle,
    FaLightbulb,
    FaChartLine,
    FaTimes,
} from "react-icons/fa";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div className="text-center py-20">Project not found!</div>;
    }

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 font-medium transition group"
                >
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition" />{" "}
                    Back to Home
                </Link>

                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-3 items-center">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                            {project.category}
                        </span>
                        {project.techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-slate-500 text-sm font-medium border border-slate-200 px-2 py-1 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl mb-12"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                                Overview
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg text-justify">
                                {project.fullDescription}
                            </p>
                        </section>

                        <div className="grid grid-cols-1 gap-8">
                            <section className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                                    <span className="bg-red-200 p-1 rounded">
                                        ⚠️
                                    </span>{" "}
                                    The Problem
                                </h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {project.problem}
                                </p>
                            </section>

                            <section className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                                    <span className="bg-green-200 p-1 rounded">
                                        💡
                                    </span>{" "}
                                    The Solution
                                </h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {project.solution}
                                </p>
                            </section>
                        </div>

                        {project.challenges && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
                                    <FaLightbulb className="text-yellow-500" />{" "}
                                    Challenges & Learnings
                                </h2>
                                <ul className="space-y-4">
                                    {project.challenges.map(
                                        (challenge, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100"
                                            >
                                                <span className="text-2xl mt-[-2px]">
                                                    🧗
                                                </span>
                                                <span className="text-slate-600 leading-relaxed">
                                                    {challenge}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </section>
                        )}

                        {project.gallery && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                                    Project Gallery
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.gallery.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`Gallery ${idx}`}
                                            onClick={() =>
                                                setSelectedImage(img)
                                            }
                                            className="rounded-lg shadow-sm border border-slate-200 hover:scale-105 transition duration-300 cursor-pointer object-cover h-48 w-full"
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
                            <h3 className="font-bold text-slate-900 mb-6 text-lg">
                                Key Features
                            </h3>
                            <ul className="space-y-4">
                                {project.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3"
                                    >
                                        <FaCheckCircle
                                            className="text-blue-500 mt-1 flex-shrink-0"
                                            size={16}
                                        />
                                        <span className="text-slate-600 text-sm leading-relaxed">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {project.impact && (
                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                                        <FaChartLine className="text-blue-600" />{" "}
                                        Key Impact
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.impact.map((imp, idx) => (
                                            <li
                                                key={idx}
                                                className="bg-blue-50 text-blue-800 text-sm px-3 py-2 rounded-lg font-medium border border-blue-100"
                                            >
                                                📈 {imp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* {project.githubLink && (
                                <div className="mt-8">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center w-full gap-2 bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition shadow-lg shadow-slate-300/50"
                                    >
                                        <FaGithub size={20} /> View Source Code
                                    </a>
                                </div>
                            )}

                            {project.demoLink && (
                                <div className="mt-3">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center w-full gap-2 bg-white text-blue-600 border border-blue-200 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
                                    >
                                        🌐 Live Demo
                                    </a>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-red-400 transition transform hover:scale-110"
                        >
                            <FaTimes size={30} />
                        </button>

                        <img
                            src={selectedImage}
                            alt="Full Preview"
                            className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
