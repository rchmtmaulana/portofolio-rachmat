import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <span className="text-2xl font-bold">
                            Rachmat<span className="text-blue-500">.dev</span>
                        </span>
                        <p className="text-slate-400 mt-2 text-sm">
                            © {new Date().getFullYear()} Rachmat Maulana. All
                            rights reserved.
                        </p>
                        <p className="text-slate-400 mt-2 text-sm">
                            rachmat.maulana.work@gmail.com
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/rchmtmaulana"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-white transition"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/rachmat-maulana"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-white transition"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:rachmat.maulana.work@gmail.com"
                            className="text-slate-400 hover:text-white transition"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center">
                    <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
                        Built with <FaReact className="text-blue-400" />{" "}
                        React.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
