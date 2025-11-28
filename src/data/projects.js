export const projects = [
    {
        id: 1,
        title: "AI-Based Vehicle Classification System",
        category: "Thesis Project (Makassar Toll Road)",
        description:
            "Decision support system for hybrid toll gates combining Computer Vision and sensor technology. Assists toll operators in accurately identifying vehicle classes to minimize manual input errors.",
        fullDescription:
            "This project was developed as a digital assistive tool for hybrid toll gate operators on the Makassar Toll Road (managed by PT Makassar Metro Network and PT Makassar Airport Network). Previously, operators had to manually observe vehicle physical characteristics and determine classifications entirely by themselves. With this system, operators receive automated class recommendations displayed in real-time on their monitor. Their role shifts from 'data entry personnel' to 'verifier,' where they only need to confirm the system's detection results or make corrections when necessary.",
        problem:
            "Manual vehicle classification requires operators to perform continuous visual observation of every passing vehicle. This repetitive process causes high visual fatigue, often leading to classification errors (human error), especially during poor weather conditions or low lighting where vehicle physical characteristics are difficult to discern clearly.",
        solution:
            "Developed an intelligent detection system based on 'Sensor Fusion' using Python (Flask). The system combines visual data from Camera (YOLOv8) and physical data from Sensors to provide vehicle class prediction output. These predictions are displayed directly on the operator's dashboard as 'Class Suggestions.' Operators can immediately approve these suggestions or revise them with one click, making the workflow more ergonomic and accurate.",
        impact: [
            "Significantly reduced cognitive load and visual fatigue for toll operators",
            "Improved consistency in vehicle classification accuracy",
            "Accelerated operator decision-making process (from manual identification to simple verification)",
        ],
        challenges: [
            "Vehicle Density Issue (Tailgating): During congested queues, vehicles are often too close together and detected as one large object by the camera. The solution involved using physical sensor input logic as a 'separator' to precisely distinguish boundaries between vehicles.",
            "Hardware Integration: Connecting IoT sensors with the Flask backend required careful concurrency handling to ensure class suggestions appeared precisely when vehicles were in front of operators.",
        ],
        gallery: [
            "/gif.gif",
            "/galeri-avc-2.jpg",
            "/galeri-avc-3.jpg",
            "/galeri-avc-1.jpg",
        ],
        features: [
            "Sensor Fusion Algorithm (Sensor + Camera)",
            "Automated Class Recommendation (AI-Assisted)",
            "Interactive Operator Verification Dashboard",
            "Easy Manual Correction Mechanism",
            "System vs Operator Accuracy Log Recording",
            "Fault Tolerance System",
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
            "Web-based internal financial reporting system for digitizing reimbursement and cash advance workflows. Features include multi-level approval and real-time tracking.",
        fullDescription:
            "During my internship at PT Samudera Indonesia Tbk (Makassar Branch), I collaborated in developing an internal financial management system covering the complete operational funding cycle. This application digitizes three crucial functions: Reimbursement Submission, Advance Payment Request (Cash Advance), and Accountability Report (Settlement Report) for fund usage, creating a centralized, transparent, and accountable system.",
        problem:
            "Using paper forms made data difficult to track and slowed down work processes. Main challenges included risk of losing physical documents, approval delays due to manager mobility, and difficulty monitoring real-time status of unsettled Cash Advances, which impacted cash flow recording discrepancies.",
        solution:
            "Built a responsive Single Page Application (SPA) using React.js and Firebase. The system was designed with modular workflows to handle three different transaction scenarios: Reimbursement, Cash Advance Request, and Settlement Report Completion. Implementation of 'Role-Based Access Control (RBAC)' ensures secure multi-level approval (Staff -> Supervisor -> Finance) can be performed digitally from anywhere.",
        impact: [
            "Improved approval workflow efficiency by replacing physical documents with a digital system (Paperless)",
            "Total elimination of physical document loss risk through Cloud storage",
            "Enhanced cash accountability through real-time monitoring of Cash Advance status",
        ],
        challenges: [
            "Business Logic Complexity: Translating strict manual financial SOPs (such as rules on fund usage reporting time limits and approval hierarchies) into application logic without gaps.",
            "Data Security (Firestore Rules): Implementing complex database security rules to ensure sensitive data can only be accessed and modified by authorized roles (RBAC).",
            "PDF Generation: Technical challenge in generating print-ready PDF reports precisely directly from the browser (Client-side generation).",
        ],
        gallery: [
            "/galeri-intern-1.png",
            "/galeri-intern-5.png",
            "/galeri-intern-6.png",
            "/galeri-intern-2.jpg",
        ],
        features: [
            "3 Core Modules: Reimbursement, Cash Advance, & Settlement Report",
            "Multi-Level Digital Approval (Staff -> Supervisor -> Finance)",
            "Cash Advance Status Tracking (Settlement Tracking)",
            "Role-Based Access Security (RBAC)",
            "Automated Report Export to PDF",
            "Responsive Display (Mobile Approval Supported)",
        ],
        techStack: [
            "React.js",
            "Firebase Auth",
            "Cloud Firestore",
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
            "Interactive e-learning platform funded by the Ministry of Education. Combines Virtual YouTuber-based video content with quiz evaluation features for a more effective learning experience.",
        fullDescription:
            "EduSensei is an EdTech startup project that successfully secured competitive grant funding from P2MW (Student Entrepreneurship Development Program) by the Ministry of Education. As Frontend Developer, I built a unique web-based learning platform. Here, educational content is delivered not by conventional teachers, but through visually engaging VTuber (Virtual YouTuber) recorded videos. The platform also provides opportunities for students to complete quizzes after watching videos to assess material comprehension.",
        problem:
            "Asynchronous online learning methods (watching regular recorded videos) often make students passive and quickly bored, resulting in poor material retention. Without direct evaluation mechanisms after watching, it's difficult to ensure students actually paid attention to the delivered content.",
        solution:
            "Developed an interactive Video-on-Demand (VOD) platform using React.js. This solution combines the visual appeal of VTuber characters to maintain student focus with 'Active Recall' mechanisms through integrated quizzes. Students watch pre-recorded content, then the system automatically presents relevant evaluation questions before they can proceed to the next material.",
        impact: [
            "Successfully secured national P2MW grant funding from the Ministry of Education (National-level validation)",
            "Increased student attention retention through gamified VTuber visual approach",
            "Ensured 100% material comprehension before advancing to the next chapter through 'Quiz-Lock' system",
        ],
        challenges: [
            "Video & Quiz Synchronization: Technical challenge in handling 'Video Events' in React to accurately detect when videos finished playing to unlock quiz features.",
            "Balanced UI Design: Designing a visually appealing interface (anime/VTuber theme) while maintaining a clean (distraction-free) layout so students focus on educational content.",
        ],
        gallery: [
            "/galeri-edusensei-1.png",
            "/galeri-edusensei-3.png",
            "/galeri-edusensei-2.png",
            "/galeri-edusensei-4.jpg",
        ],
        features: [
            "VTuber-Based Learning Video Management (VOD)",
            "Post-Video Evaluation Quiz System",
            "Student Interface & Learning Progress Dashboard",
            "Structured Content Navigation",
            "P2MW Grant-Funded Project (National Level)",
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
    {
        id: 4,
        title: "SkinScan - AI Skin Disease Detection",
        category: "Bangkit Academy Capstone",

        description:
            "AI-powered mobile application for skin disease detection. Fully responsible for Cloud infrastructure, deploying ML models to Google Cloud Platform (GCP) and API management.",

        fullDescription:
            "As a Cloud Computing Cohort at Bangkit Academy, I led the backend infrastructure development for SkinScan, an Android application that uses Machine Learning to identify types of skin diseases. My primary role focused on bridging the AI model (built by the ML team) with the mobile application (built by the Android team) through a scalable and reliable API on Google Cloud.",

        problem:
            "AI-based medical applications require substantial computational resources to run inference models (predictions). Running these models directly on user devices (on-device) would make the application slow and drain battery life. Additionally, the backend must be capable of handling sudden user traffic spikes without downtime.",

        solution:
            "Designed a Serverless Microservices architecture on Google Cloud Platform (GCP). The ML model was deployed using Cloud Run (containerized) to ensure auto-scaling (infrastructure automatically scales up during high traffic and scales down during low traffic). I also built a RESTful API as the communication gateway, using Cloud Storage to store user images, and Firestore for metadata database.",

        features: [
            "Serverless Architecture using Google Cloud Run",
            "ML Model Deployment & API Serving",
            "Auto-scaling Infrastructure for High Traffic",
            "Secure Image Storage (Cloud Storage Buckets)",
            "RESTful API Integration with Mobile Application",
            "Bangkit Capstone Project (Distinguished Graduate Cohort)",
        ],

        techStack: [
            "GCP",
            "Cloud Run",
            "Docker",
            "Cloud Storage",
            "Firestore",
            "Python API",
        ],

        image: "/skinscan.jpg",

        githubLink: "https://github.com/rchmtmaulana/SkinScan-Project",
        demoLink: null,
    },
];
