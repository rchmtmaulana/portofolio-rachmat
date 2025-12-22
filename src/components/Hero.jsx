import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen flex items-center"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between w-full">
                <div className="md:w-1/2 mt-10 md:mt-0 space-y-6 text-center md:text-left">
                    <h2 className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                        Rachmat Maulana
                    </h1>
                    <h3 className="text-xl md:text-2xl text-slate-600 font-medium">
                        Software Engineer{" "}
                        <span className="text-slate-400">|</span> Cloud & AI
                        Enthusiast
                    </h3>

                    <p className="text-slate-600 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Fresh Graduate Informatics Engineering from Hasanuddin
                        University. Passionate about building scalable web
                        applications with
                        <span className="font-semibold text-slate-800">
                            {" "}
                            React.js{" "}
                        </span>
                        and intelligent systems with{" "}
                        <span className="font-semibold text-slate-800">
                            {" "}
                            Python & Cloud Computing
                        </span>
                        .
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                        <a
                            href="/CV_Rachmat_Maulana.pdf"
                            download
                            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1"
                        >
                            Curriculum Vitae
                        </a>
                        <a
                            href="/IJAZAH S1 Rachmat Maulana.pdf"
                            download
                            className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-1"
                        >
                            Bachelor's Degree Certificate
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                        <a
                            href="https://github.com/rchmtmaulana"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white text-slate-700 rounded-full shadow-md hover:text-blue-600 hover:shadow-lg transition"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/rachmat-maulana"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white text-slate-700 rounded-full shadow-md hover:text-blue-600 hover:shadow-lg transition"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:rachmat.maulana.work@gmail.com"
                            className="p-3 bg-white text-slate-700 rounded-full shadow-md hover:text-blue-600 hover:shadow-lg transition"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end relative">
                    <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 left-4 top-4"></div>

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img
                            src="/profile.jpg"
                            alt="Rachmat Maulana"
                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
