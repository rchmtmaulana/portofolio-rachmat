export const projects = [
    {
        id: 1,
        title: "Sistem Klasifikasi Kendaraan Berbasis AI",
        category: "Proyek Skripsi (PT Margautama Nusantara)",
        
        description:
            "Sistem pendukung keputusan untuk gardu tol hybrid yang menggabungkan Computer Vision dan Sensor. Membantu petugas tol mengidentifikasi golongan kendaraan secara akurat untuk meminimalkan kesalahan input manual.",

        fullDescription:
            "Proyek ini dikembangkan sebagai alat bantu digital (assistive tool) bagi petugas di Gardu Tol Hybrid Makassar (PT Margautama Nusantara). Sebelumnya, petugas harus mengamati fisik kendaraan dan menentukan golongan secara manual sepenuhnya. Dengan sistem ini, petugas mendapatkan rekomendasi golongan otomatis di layar monitor secara real-time. Peran petugas bergeser dari 'penginput data' menjadi 'verifikator', di mana mereka hanya perlu mengonfirmasi hasil deteksi sistem atau melakukan koreksi jika diperlukan.",

        problem:
            "Klasifikasi kendaraan secara manual mengharuskan petugas melakukan pengamatan visual terus-menerus terhadap setiap kendaraan yang lewat. Proses repetitif ini menyebabkan kelelahan visual (visual fatigue) yang tinggi, yang sering kali berujung pada kesalahan penentuan golongan (human error), terutama saat kondisi cuaca buruk atau pencahayaan minim di mana fisik kendaraan sulit terlihat jelas.",

        solution:
            "Mengembangkan sistem deteksi cerdas berbasis 'Sensor Fusion' menggunakan Python (Flask). Sistem menggabungkan data visual dari Kamera (YOLOv8) dan data fisik dari Sensor untuk memberikan output prediksi golongan kendaraan. Prediksi ini ditampilkan langsung pada dashboard petugas sebagai 'Saran Golongan'. Petugas dapat langsung menyetujui saran tersebut atau merevisinya dengan satu klik, membuat proses kerja lebih ergonomis dan akurat.",

        impact: [
            "Mengurangi beban kognitif dan kelelahan visual petugas tol secara signifikan",
            "Meningkatkan konsistensi akurasi penentuan golongan kendaraan",
            "Mempercepat proses pengambilan keputusan petugas (dari identifikasi manual menjadi sekadar verifikasi)",
        ],

        challenges: [
            "Isu Kerapatan Kendaraan (Tailgating): Dalam kondisi antrean padat, kendaraan seringkali terlalu rapat sehingga terdeteksi sebagai satu objek besar oleh kamera. Solusinya, saya menggunakan logika input sensor fisik sebagai 'pemisah' (separator) untuk membedakan batas antar-kendaraan secara presisi.",
            "Integrasi Hardware: Menghubungkan sensor IoT dengan backend Flask membutuhkan penanganan concurrency yang hati-hati agar saran golongan muncul tepat saat kendaraan berada di depan petugas.",
        ],

        gallery: [
            "/gif.gif",
            "/galeri-avc-2.jpg",
            "/galeri-avc-3.jpg",
            "/galeri-avc-1.jpg",
        ],

        features: [
            "Algoritma Sensor Fusion (Sensor + Kamera)",
            "Rekomendasi Golongan Otomatis (AI-Assisted)",
            "Dashboard Verifikasi Petugas Interaktif",
            "Mekanisme Koreksi Manual yang Mudah",
            "Pencatatan Log Akurasi Sistem vs Petugas",
            "Sistem Toleransi Kesalahan (Fault Tolerance)",
        ],

        techStack: [
            "Python",
            "Flask",
            "React.js",
            "OpenCV",
            "YOLOv8",
            "IoT/Sensors",
        ],

        image: "/avc.jpg",

        githubLink: "https://github.com/rchmtmaulana/repo-skripsi-anda",
        demoLink: null,
    },
    {
        id: 2,
        title: "Corporate Financial Management System",
        category: "Internship @ Samudera Indonesia",

        description:
            "Sistem pelaporan keuangan internal berbasis web untuk digitalisasi alur reimbursement dan cash advance. Fitur mencakup multi-level approval dan tracking real-time.",

        fullDescription:
            "Selama masa magang di PT Samudera Indonesia Tbk (Cabang Makassar), saya berkolaborasi dalam pengembangan sistem manajemen keuangan internal yang mencakup siklus pendanaan operasional secara menyeluruh. Aplikasi ini mendigitalisasi tiga fungsi krusial: Pengajuan Reimbursement, Permintaan Dana Di Muka (Bon Sementara), dan Laporan Pertanggungjawaban (LPJ) penggunaan dana, menjadikannya sistem yang terpusat, transparan, dan akuntabel.",

        problem:
            "Penggunaan formulir kertas membuat data sulit dilacak dan memperlambat proses kerja. Tantangan utamanya meliputi risiko hilangnya dokumen fisik, keterlambatan persetujuan (approval) akibat mobilitas manajer, serta sulitnya memantau status 'Bon Sementara' yang belum di-LPJ-kan (belum dipertanggungjawabkan) secara real-time, yang berdampak pada selisih pencatatan arus kas.",

        solution:
            "Membangun Single Page Application (SPA) responsif menggunakan React.js dan Firebase. Sistem dirancang dengan alur kerja modular untuk menangani tiga skenario transaksi berbeda: Reimbursement, Request Bon Sementara, dan Penyelesaian LPJ. Implementasi 'Role-Based Access Control (RBAC)' memastikan keamanan persetujuan berjenjang (Staff -> Supervisor -> Finance) dapat dilakukan secara digital dari mana saja.",

        impact: [
            "Meningkatkan efisiensi alur persetujuan dengan menggantikan dokumen fisik menjadi sistem digital (Paperless)",
            "Eliminasi total risiko kehilangan dokumen fisik melalui penyimpanan Cloud",
            "Peningkatan akuntabilitas kas melalui monitoring real-time status Bon Sementara",
        ],

        challenges: [
            "Kompleksitas Logika Bisnis: Menerjemahkan SOP keuangan manual yang ketat (seperti aturan limit waktu pelaporan penggunaan dana dan hierarki approval) ke dalam logika aplikasi tanpa celah.",
            "Keamanan Data (Firestore Rules): Mengimplementasikan aturan keamanan database yang kompleks untuk memastikan data sensitif hanya bisa diakses dan diubah oleh role yang berhak (RBAC).",
            "PDF Generation: Tantangan teknis dalam menghasilkan laporan PDF siap cetak yang presisi langsung dari browser (Client-side generation).",
        ],

        gallery: [
            "/galeri-intern-1.png",
            "/galeri-intern-5.png",
            "/galeri-intern-6.png",
            "/galeri-intern-2.jpg",
        ],

        features: [
            "3 Modul Utama: Reimbursement, Bon Sementara, & LPJ",
            "Persetujuan Digital Berjenjang (Staff -> Supervisor -> Finance)",
            "Pelacakan Status Bon Sementara (Settlement Tracking)",
            "Keamanan Akses Berbasis Peran (RBAC)",
            "Ekspor Laporan Otomatis ke PDF",
            "Tampilan Responsif (Bisa Approval lewat HP)",
        ],

        techStack: [
            "React.js",
            "Firebase Auth",
            "Cloud Firestore",
            "Bootstrap",
            "PDF Generation",
        ],

        image: "/intern_samudera.jpg",

        githubLink: null,

        demoLink: "https://smdr-mks.com",
    },
    {
        id: 3,
        title: "EduSensei - VTuber Learning Platform",
        category: "P2MW Grant Awardee (Ministry of Education)",

        description:
            "Platform e-learning interaktif yang didanai oleh Kemdikbud. Menggabungkan materi video berbasis Virtual YouTuber dengan fitur kuis evaluasi untuk pengalaman belajar yang lebih efektif.",

        fullDescription:
            "EduSensei adalah proyek startup EdTech yang berhasil memenangkan pendanaan hibah kompetitif P2MW (Program Pembinaan Mahasiswa Wirausaha) dari Kemdikbud. Sebagai Frontend Developer, saya membangun platform pembelajaran berbasis web yang unik. Di sini, materi pelajaran tidak disampaikan oleh guru konvensional, melainkan melalui video rekaman berbasis VTuber (Virtual YouTuber) yang menarik visualnya. Platform ini juga memberikan kesempatan kepada siswa mengerjakan kuis setelah menonton video untuk mengukur pemahaman materi.",

        problem:
            "Metode pembelajaran daring asinkron (menonton rekaman video biasa) sering kali membuat siswa pasif dan cepat bosan, mengakibatkan materi tidak terserap dengan baik. Tanpa adanya mekanisme evaluasi langsung setelah menonton, sulit untuk memastikan apakah siswa benar-benar menyimak konten yang disampaikan.",

        solution:
            "Mengembangkan platform Video-on-Demand (VOD) interaktif menggunakan React.js. Solusi ini menggabungkan daya tarik visual karakter VTuber untuk menjaga fokus siswa, dengan mekanisme 'Active Recall' melalui kuis terintegrasi. Siswa menonton materi yang telah direkam sebelumnya, lalu sistem secara otomatis menyajikan soal evaluasi yang relevan sebelum mereka bisa lanjut ke materi berikutnya.",

        impact: [
            "Berhasil mengamankan pendanaan hibah nasional P2MW Kemdikbud (Validasi tingkat nasional)",
            "Meningkatkan retensi perhatian siswa melalui pendekatan visual VTuber yang gamified",
            "Memastikan pemahaman materi 100% sebelum lanjut ke bab berikutnya melalui sistem 'Quiz-Lock'",
        ],

        challenges: [
            "Sinkronisasi Video & Kuis: Tantangan teknis dalam menangani 'Video Events' di React untuk mendeteksi kapan video selesai diputar secara akurat guna membuka kunci (unlock) fitur kuis.",
            "Desain UI yang Seimbang: Merancang antarmuka yang menarik secara visual (tema anime/VTuber) namun tetap bersih (distraction-free) agar siswa fokus pada materi ajar.",
        ],

        gallery: [
            "/galeri-edusensei-1.png",
            "/galeri-edusensei-3.png",
            "/galeri-edusensei-2.png",
            "/galeri-edusensei-4.jpg",
        ],

        features: [
            "Manajemen Video Pembelajaran (VOD) Berbasis VTuber",
            "Sistem Kuis Evaluasi Pasca-Video",
            "Antarmuka Siswa & Dashboard Progres Belajar",
            "Navigasi Materi Terstruktur",
            "Proyek Didanai Hibah P2MW (Tingkat Nasional)",
        ],

        techStack: [
            "React.js",
            "Tailwind CSS",
            "Web Development",
            "Interactive UI",
        ],

        image: "/edusensei.jpg",

        githubLink: "https://github.com/rchmtmaulana/repo-edusensei",
        demoLink: "https://edusensei-demo.com",
    },
    // {
    //     id: 4,
    //     title: "SkinScan - AI Skin Disease Detection",
    //     category: "Bangkit Academy Capstone",

    //     description:
    //         "Aplikasi seluler bertenaga AI untuk mendeteksi penyakit kulit. Bertanggung jawab penuh atas infrastruktur Cloud, mendeploy model ML ke Google Cloud Platform (GCP) dan manajemen API.",

    //     fullDescription:
    //         "Sebagai Cloud Computing Cohort di Bangkit Academy, saya memimpin pengembangan infrastruktur backend untuk SkinScan, aplikasi Android yang menggunakan Machine Learning untuk mengidentifikasi jenis penyakit kulit. Fokus utama peran saya adalah menjembatani model AI (yang dibuat tim ML) dengan aplikasi mobile (yang dibuat tim Android) melalui API yang skalabel dan reliabel di Google Cloud.",

    //     problem:
    //         "Aplikasi medis berbasis AI membutuhkan resource komputasi yang besar untuk menjalankan model inferensi (prediksi). Menjalankan model ini langsung di HP pengguna (on-device) akan membuat aplikasi lambat dan boros baterai. Selain itu, backend harus mampu menangani lonjakan pengguna secara tiba-tiba tanpa down.",

    //     solution:
    //         "Merancang arsitektur **Serverless Microservices** di Google Cloud Platform (GCP). Model ML dideploy menggunakan **Cloud Run** (containerized) untuk memastikan auto-scaling (infrastruktur otomatis membesar saat pengguna banyak dan mengecil saat sepi). Saya juga membangun RESTful API sebagai gateway komunikasi, menggunakan **Cloud Storage** untuk menyimpan gambar pengguna, dan **Firestore** untuk database metadata.",

    //     features: [
    //         "Arsitektur Serverless menggunakan Google Cloud Run",
    //         "Deployment Model ML & Serving API",
    //         "Infrastruktur Auto-scaling untuk Trafik Tinggi",
    //         "Penyimpanan Gambar Aman (Cloud Storage Buckets)",
    //         "Integrasi RESTful API dengan Aplikasi Mobile",
    //         "Proyek Capstone Bangkit (Kohort Lulusan Terbaik)",
    //     ],

    //     techStack: [
    //         "GCP",
    //         "Cloud Run",
    //         "Docker",
    //         "Cloud Storage",
    //         "Firestore",
    //         "Python API",
    //     ],

    //     image: "/skinscan.jpg",

    //     githubLink: "https://github.com/rchmtmaulana/SkinScan-Project",
    //     demoLink: null,
    // },
];
