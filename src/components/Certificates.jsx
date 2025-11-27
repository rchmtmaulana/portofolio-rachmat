import React from "react";
import { certificates } from "../data/certificates";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                        <FaAward className="text-lg" />
                        <span>Achievements</span>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">
                        Certifications & Awards
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Professional certifications that validate my technical
                        skills and continuous learning commitment
                    </p>
                </div>

                {/* Certificate Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {certificates.map((cert) => (
                        <article
                            key={cert.id}
                            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col"
                        >
                            {/* Certificate Image */}
                            <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src =
                                            "https://placehold.co/400x300/e2e8f0/64748b?text=Certificate";
                                    }}
                                />
                            </div>

                            {/* Certificate Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 min-h-[56px]">
                                    {cert.title}
                                </h3>

                                {/* Issuer & Date */}
                                <div className="mb-3 text-sm text-slate-600">
                                    <p className="font-medium">{cert.issuer}</p>
                                    <p className="text-slate-500 mt-1">
                                        Issued: {cert.date}
                                    </p>
                                </div>

                                {/* Verify Credential Button */}
                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    {cert.link ? (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                                        >
                                            Verify Credential
                                            <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-100 text-slate-500 text-sm font-medium rounded-lg cursor-not-allowed">
                                            No verification available
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
