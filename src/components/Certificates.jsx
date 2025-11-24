import React from "react";
import { certificates } from "../data/certificates";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                        Achievements
                    </h2>
                    <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                        Certifications & Awards
                    </h3>
                </div>

                {/* Grid Sertifikat */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-lg transition duration-300 flex items-start gap-4 group"
                        >
                            {/* Thumbnail Sertifikat (Diubah dari Icon menjadi Image) */}
                            <div className="flex-shrink-0 w-20 h-16 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    // Tambahkan onError untuk jaga-jaga jika gambar tidak ketemu
                                    onError={(e) => {
                                        e.target.src =
                                            "https://placehold.co/100x80?text=No+Img";
                                    }}
                                />
                            </div>

                            {/* Teks Info */}
                            <div className="flex-grow">
                                <h4 className="text-lg font-bold text-slate-900 leading-tight line-clamp-2">
                                    {cert.title}
                                </h4>
                                <p className="text-slate-600 text-sm mt-1 font-medium">
                                    {cert.issuer}
                                </p>
                                <p className="text-slate-400 text-xs mt-1">
                                    Issued: {cert.date}
                                </p>

                                {/* Tombol Lihat Kredensial */}
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-3 hover:underline"
                                    >
                                        Verify Credential{" "}
                                        <FaExternalLinkAlt size={10} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
