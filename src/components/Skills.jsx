import React from "react";
import { FaPython, FaReact, FaJava, FaDocker, FaGitAlt } from "react-icons/fa";
import {
    SiJavascript,
    SiFlask,
    SiGooglecloud,
    SiFirebase,
    SiTensorflow,
    SiTailwindcss,
    SiMysql,
} from "react-icons/si";

const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500" /> },
    { name: "Flask", icon: <SiFlask className="text-slate-800" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
                    Tech Stack
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                    Technologies I Work With
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition duration-300"
                        >
                            <div className="text-5xl mb-4">{skill.icon}</div>
                            <span className="font-medium text-slate-600">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
