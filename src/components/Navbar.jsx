import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <HashLink
                            smooth
                            to="/#home"
                            className="font-bold text-xl text-slate-800"
                        >
                            Rachmat<span className="text-blue-600">.dev</span>
                        </HashLink>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <HashLink
                            smooth
                            to="/#home"
                            className="text-slate-600 hover:text-blue-600 transition"
                        >
                            Home
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#projects"
                            className="text-slate-600 hover:text-blue-600 transition"
                        >
                            Projects
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#skills"
                            className="text-slate-600 hover:text-blue-600 transition"
                        >
                            About
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#certificates"
                            className="text-slate-600 hover:text-blue-600 transition"
                        >
                            Certificates
                        </HashLink>

                        <HashLink
                            smooth
                            to="/#contact"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
                        >
                            Contact Me
                        </HashLink>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <HashLink
                            smooth
                            to="/#home"
                            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#projects"
                            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#skills"
                            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#certificates"
                            className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Certificates
                        </HashLink>

                        <HashLink
                            smooth
                            to="/#contact"
                            className="block mx-3 my-2 px-4 py-2 text-center text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Me
                        </HashLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
