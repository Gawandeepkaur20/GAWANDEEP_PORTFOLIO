import type { Certificate, Experience, Project, Skill } from "@/types/portfolio";
import signalZeroImg from "@/assets/projects/signal_dash.png";
import signalHome from "@/assets/projects/signal_mem.png";
import signalStory from "@/assets/projects/signal_ch1.png";
import signalInventory from "@/assets/projects/signal_ch2.png";
import signalMemory from "@/assets/projects/signal_action.png";
import careerPilotImg from "@/assets/projects/career_dash.png";
import careerPilotPro from "@/assets/projects/career_profile.png";
import careerDisplay from "@/assets/projects/career_display.png";
import careerQues from "@/assets/projects/career_ques.png";
import careerChat from "@/assets/projects/career_chat.png";
import boutiqueImg from "@/assets/projects/boutique_dash.png";
import boutiqueGen from "@/assets/projects/genairecom.png";
import boutiqueDashboard from "@/assets/projects/boutique_dash2.png";
import boutiqueOrders from "@/assets/projects/orders.png";
import boutiqueFashion from "@/assets/projects/fashion.png";
import aiBlogImg from "@/assets/projects/blog_dash.png";
import aiBlogGen from "@/assets/projects/blog_gen.png";
import aiBlogSeo from "@/assets/projects/seo.png";
import aiBlogPost from "@/assets/projects/post.png";
import aiBlogComment from "@/assets/projects/comments.png";
import objectDetectionImg from "@/assets/projects/object_dash.png";
import objectDetectionCam from "@/assets/projects/object_cam.png";
import objectDetectionHis from "@/assets/projects/object_history.png";
import objectDetectionVideo from "@/assets/projects/object_video.png";


export const aboutCards = [
  {
    title: "Profile",
    body: "Gawandeep Kaur is a B.Tech Computer Science & Engineering student focused on AI and full-stack development.",
  },
  {
    title: "Education",
    body: "B.Tech Computer Science & Engineering at Punjabi University, Patiala, 2023-2027. CGPA: 8.72/10 up to the 6th semester.",
  },
  {
    title: "Professional Focus",
    body: "Building full-stack web applications, AI-powered applications, practical LLM solutions, and computer vision systems.",
  },
  {
    title: "Core Technologies",
    body: "Python, JavaScript, React.js, Node.js, MongoDB, Streamlit, REST APIs, and LLM integration.",
  },
  {
    title: "Project Work",
    body: "Hands-on projects include MERN business tools, AI career guidance, object detection, and AI-assisted content platforms.",
  },
  {
    title: "Approach",
    body: "I focus on clear user workflows, maintainable implementation, and AI features that solve practical problems.",
  },
];

export const currentStack = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Streamlit",
  "REST APIs",
  "LLM integration",
  "OpenCV",
  "Flutter",
  "Dart",
];

export const skills: Skill[] = [
  { name: "HTML5", category: "Frontend", level: "Confident", icon: "Code2" },
  { name: "CSS3", category: "Frontend", level: "Confident", icon: "Palette" },
  { name: "JavaScript", category: "Frontend", level: "Confident", icon: "Code2" },
  { name: "TypeScript", category: "Frontend", level: "Working", icon: "Braces" },
  { name: "React.js", category: "Frontend", level: "Confident", icon: "Atom" },
  { name: "Node.js", category: "Backend", level: "Working", icon: "Server" },
  { name: "Express.js", category: "Backend", level: "Working", icon: "Workflow" },
  { name: "REST APIs", category: "Backend", level: "Confident", icon: "Cable" },
  { name: "MERN Stack", category: "Backend", level: "Working", icon: "Layers3" },
  { name: "Python", category: "AI", level: "Confident", icon: "Terminal" },
  { name: "Streamlit", category: "AI", level: "Working", icon: "Bot" },
  { name: "LLMs", category: "AI", level: "Working", icon: "BrainCircuit" },
  { name: "Prompt Engineering", category: "AI", level: "Working", icon: "Sparkles" },
  { name: "OpenCV", category: "AI", level: "Working", icon: "BrainCircuit" },
  { name: "YOLO", category: "AI", level: "Working", icon: "Bot" },
  { name: "NLP", category: "AI", level: "Working", icon: "Workflow" },
  { name: "MongoDB", category: "Databases", level: "Working", icon: "Database" },
  { name: "Firebase", category: "Databases", level: "Working", icon: "Flame" },
  { name: "Flutter", category: "Mobile Development", level: "Working", icon: "Smartphone" },
  { name: "C", category: "Languages", level: "Working", icon: "FileCode2" },
  { name: "C++", category: "Languages", level: "Working", icon: "FileCode2" },
  { name: "JavaScript", category: "Languages", level: "Confident", icon: "Code2" },
  { name: "Python", category: "Languages", level: "Confident", icon: "Terminal" },
  { name: "TypeScript", category: "Languages", level: "Working", icon: "Braces" },
  { name: "Dart", category: "Languages", level: "Working", icon: "Code2" },
  { name: "Git", category: "Tools", level: "Confident", icon: "GitBranch" },
  { name: "GitHub", category: "Tools", level: "Confident", icon: "GitBranch" },
  { name: "VS Code", category: "Tools", level: "Confident", icon: "Code2" },
  { name: "Postman", category: "Tools", level: "Working", icon: "Cable" },
  { name: "Canva", category: "Tools", level: "Working", icon: "Palette" },
  { name: "Data Structures & Algorithms", category: "Core Concepts", level: "Working", icon: "Puzzle" },
  { name: "OOP", category: "Core Concepts", level: "Working", icon: "Layers3" },
  { name: "DBMS", category: "Core Concepts", level: "Working", icon: "Database" },
  { name: "Operating Systems", category: "Core Concepts", level: "Working", icon: "Server" },
  { name: "Computer Networks", category: "Core Concepts", level: "Working", icon: "Cable" },
];

export const projects: Project[] = [
  {
    title: "Boutique Management System",
    slug: "boutique-management-system",
    image: [
      { src: boutiqueImg, title: "Login & Dashboard" },
      { src: boutiqueDashboard, title: "Business Dashboard" },
      { src: boutiqueOrders, title: "Order Management" },
      { src: boutiqueGen, title: "Customer Management" },
      { src: boutiqueFashion, title: "Worker & Fashion Management" },
    ],
    categories: ["MERN", "Web", "Full Stack", "AI"],
    overview:
      "A full-stack boutique management system with role-based authentication, order management, invoicing, dashboards, analytics, Razorpay payments, and AI-assisted fashion features.",
    problem:
      "Boutique teams need a reliable way to manage customers, workers, measurements, orders, invoices, payments, and business visibility without scattered manual records.",
    solution:
      "Built a centralized MERN platform with secure access, customer and worker modules, order lifecycle tracking, measurement records, invoice generation, dashboard analytics, Razorpay payment integration, AI size recommendation, and Fashion Advisor functionality.",
    architecture:
      "Developed with React.js, Node.js, Express.js, MongoDB, Redux Toolkit, JWT authentication, Razorpay integration, and modular dashboard components.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Redux Toolkit", "JWT"],
    keyFeatures: [
      "Role-based authentication",
      "Customer management",
      "Worker management",
      "Order management",
      "Measurement records",
      "Invoice generation",
      "Dashboard analytics",
      "Razorpay payment integration",
      "AI size recommendation",
      "Fashion Advisor functionality",
    ],
    challenges: [
      "Designing relationships between customers, workers, measurements, and orders",
      "Keeping dashboards modular across business workflows",
      "Integrating secure payment handling",
    ],
    lessons: [
      "Clear data models make business workflows easier to maintain",
      "Dashboard UX improves when repeated operational tasks stay close together",
    ],
    futureScope: ["Inventory planning", "Customer notifications", "Advanced analytics"],
    metrics: ["Full-stack MERN system", "Razorpay payments", "AI-assisted fashion features"],
    timeline: "4 weeks",
    githubUrl: "https://github.com/",
  },
  {
    title: "CareerPilot AI",
    slug: "career-pilot-ai",
    image: [
      { src: careerPilotImg, title: "Landing Page" },
      { src: careerChat, title: "AI Career Chat" },
      { src: careerDisplay, title: "Career Analysis Dashboard" },
      { src: careerQues, title: "Interview Preparation" },
      { src: careerPilotPro, title: "Resume Analysis" },
    ],
    categories: ["AI", "Python", "Web"],
    overview:
      "An AI-powered career guidance platform for career recommendations, interview preparation, resume analysis, and interactive AI chat.",
    problem:
      "Students often need structured help understanding career paths, resume gaps, and interview preparation workflows.",
    solution:
      "Built a Streamlit application using Gemini API and prompt engineering to provide career recommendations, resume analysis, interview support, and AI chat.",
    architecture:
      "Implemented with Python, Streamlit, Gemini API integration, prompt workflows, resume processing, and structured guidance modules.",
    techStack: ["Python", "Streamlit", "Gemini API", "Prompt Engineering"],
    keyFeatures: ["Career recommendations", "Interview preparation", "Resume analysis", "Interactive AI chat"],
    challenges: ["Structuring useful AI responses", "Keeping career guidance clear and actionable"],
    lessons: ["Prompt structure matters for reliable user guidance", "AI workflows need clear input and output boundaries"],
    futureScope: ["Learning roadmap generation", "Job search integrations", "Mock interview workflows"],
    metrics: ["AI career guidance", "Resume analysis workflow", "Interactive chat"],
    timeline: "2 weeks",
    githubUrl: "https://github.com/Gawandeepkaur20/CodeAlpha_Chatbot-for-FAQs.git",
  },
  {
    title: "VisionGuard - Object Detection & Tracking",
    slug: "object-detection-tracking",
    image: [
      { src: objectDetectionImg, title: "Project Dashboard" },
      { src: objectDetectionCam, title: "Live Webcam Detection" },
      { src: objectDetectionVideo, title: "Video Tracking" },
      { src: objectDetectionHis, title: "Detection Results" },
    ],
    categories: ["AI", "Python", "Computer Vision"],
    overview:
      "A computer vision application for real-time object detection and tracking using YOLO and OpenCV.",
    problem:
      "Monitoring video streams requires object detection that can process frames continuously and support practical tracking workflows.",
    solution:
      "Developed a YOLO and OpenCV pipeline with image preprocessing for real-time detection, video processing, and continuous monitoring.",
    architecture:
      "Built with Python, OpenCV, YOLO, image preprocessing utilities, and video input handling for live and recorded streams.",
    techStack: ["Python", "OpenCV", "YOLO"],
    keyFeatures: ["Real-time object detection", "Object tracking", "Image preprocessing", "Live webcam support", "Video monitoring"],
    challenges: ["Balancing detection speed with clarity", "Handling frame-by-frame video processing"],
    lessons: ["Preprocessing improves detection workflows", "Computer vision projects need careful testing across inputs"],
    futureScope: ["Alert workflows", "Counting modules", "Deployment-ready monitoring views"],
    metrics: ["Real-time detection", "YOLO pipeline", "OpenCV video processing"],
    timeline: "2 weeks",
    githubUrl: "https://github.com/Gawandeepkaur20/CodeAlpha_-Object-Detection-and-Tracking.git",
  },
  {
    title: "ZENTICLE - Blog Writing Platform",
    slug: "zenticle-blog-writing-platform",
    image: [
      { src: aiBlogImg, title: "Homepage" },
      { src: aiBlogGen, title: "AI Blog Generator" },
      { src: aiBlogPost, title: "Blog Editor" },
      { src: aiBlogSeo, title: "SEO Optimization" },
      { src: aiBlogComment, title: "Published Blog :Comments,like,dislike" },
    ],
    categories: ["MERN", "AI", "Web", "Full Stack"],
    overview:
      "A MERN-based blogging platform with JWT authentication, rich-text editing, image uploads, Unsplash integration, and AI-powered blog generation.",
    problem:
      "Blogging platforms need secure author workflows, media handling, editor tools, and faster drafting support.",
    solution:
      "Developed a full-stack platform with authentication, rich-text editing, image upload flows, Unsplash integration, and AI-assisted blog generation.",
    architecture:
      "Built with React.js, Node.js, MongoDB, Redux, JWT authentication, editor components, media handling, and AI generation modules.",
    techStack: ["React.js", "Node.js", "MongoDB", "Redux", "JWT", "Unsplash API"],
    keyFeatures: ["JWT authentication", "Rich-text editing", "Image uploads", "Unsplash integration", "AI blog generation"],
    challenges: ["Connecting editor state with generated content", "Managing authentication and media workflows"],
    lessons: ["AI writing tools work best when paired with editable author controls", "Content platforms need clean state management"],
    futureScope: ["Content scheduling", "Collaborative editing", "Author analytics"],
    metrics: ["MERN blogging platform", "AI-powered generation", "Authenticated publishing"],
    timeline: "3 weeks",
    githubUrl: "https://github.com/Gawandeepkaur20/Blog.git",
  },
];

export const additionalProjects: Project[] = [
  {
    title: "Signal Zero",
    slug: "signal-zero",
    image: [
      { src: signalZeroImg, title: "Landing Page" },
      { src: signalHome, title: "Mission Dashboard" },
      { src: signalStory, title: "Interactive Story" },
      { src: signalInventory, title: "Memory Archive" },
      { src: signalMemory, title: "Actions" },
    ],
    categories: ["AI", "Python", "Web"],
    overview:
      "An AI and Streamlit visual novel project where users recover lost human memories through branching storytelling and generated media.",
    problem: "Interactive story prototypes need flexible narrative flow without a large fixed content base.",
    solution:
      "Built a Streamlit experience using LLM prompts, generated visuals, audio narration, and JSON-based state management.",
    architecture:
      "Built with Streamlit, Gemini API, Pollinations AI, gTTS, JSON state, and modular Python services.",
    techStack: ["Python", "Streamlit", "Gemini API", "Pollinations AI", "gTTS"],
    keyFeatures: ["AI-generated story flow", "Generated images", "Narration", "Persistent state"],
    challenges: ["Maintaining story consistency", "Coordinating generated media with narrative state"],
    lessons: ["Prompt structure helps maintain narrative continuity", "State design matters for interactive AI experiences"],
    futureScope: ["Multiple save slots", "Voice interaction", "Character memory"],
    metrics: ["AI visual novel", "Streamlit prototype", "Generated multimedia"],
    timeline: "1 week",
    githubUrl: "https://github.com/Gawandeepkaur20/SIGNAL_ZERO.git",
  },
];

export const experiences: Experience[] = [
  {
    role: "AI Intern",
    organization: "Mirai School of Technology",
    duration: "July - August 2026",
    responsibilities: [
      "Developed AI-powered web applications using Python, Streamlit, LLMs, and AI APIs.",
      "Implemented prompt engineering workflows for intelligent application features.",
    ],
    achievements: [],
    technologies: ["Python", "Streamlit", "LLMs", "AI APIs", "Prompt Engineering"],
  },
  {
    role: "AI Intern",
    organization: "CodeAlpha",
    duration: "June - July 2026",
    responsibilities: [
      "Worked on AI/ML applications using Python and OpenCV.",
      "Contributed to model implementation, image processing, testing, and application development.",
    ],
    achievements: [],
    technologies: ["Python", "OpenCV", "AI/ML", "Image Processing"],
  },
  {
    role: "MERN Stack Development Intern",
    organization: "Dotsquares Pvt. Ltd.",
    duration: "June - July 2025",
    responsibilities: [
      "Developed full-stack web applications using the MERN stack.",
      "Implemented modular application features across frontend and backend workflows.",
    ],
    achievements: [],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const researchWork = [
  {
    title: "Research Work",
    organization: "Punjabi University Patiala",
    duration: "Aug 2024 - Dec 2024",
    type: "Academic research",
    supervisor: "Snehkunwar Sidhu",
    description:
      "Reviewed and analysed research papers on neural-network approaches for 5G/6G communication systems.",
  },
];

export const achievements = [
  {
    label: "Web Development Lead",
    meta: "Google Developer Groups (GDG) on Campus, Punjabi University Patiala, 2025-2026",
    description: "Led web development activities as part of GDG on Campus at Punjabi University Patiala.",
  },
  {
    label: "Premium Milestone",
    meta: "Google Cloud Arcade Facilitator Program 2024",
    description: "Earned the Premium Milestone in the Google Cloud Arcade Facilitator Program.",
  },
  {
    label: "GDG TechSprint",
    meta: "Top 10 Performer",
    description: "Recognized as a Top 10 Performer in GDG TechSprint.",
  },
];

const certificateAssetMap = Object.fromEntries(
  Object.entries(
    import.meta.glob("@/assets/certificates/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  ).map(([path, asset]) => [path.split("/").pop() ?? "", String(asset)]),
);

const getCertificateImage = (filename: string) => certificateAssetMap[filename] ?? undefined;

export const certificates: Certificate[] = [
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    issueDate: "Date not listed",
    summary: "Completed Cisco Networking Academy coursework in introductory cybersecurity concepts.",
    image: getCertificateImage("introduction-to-cybersecurity.jpg"),
  },
  {
    title: "Computer Vision",
    organization: "Kaggle",
    issueDate: "Date not listed",
    summary: "Completed Kaggle learning content focused on computer vision fundamentals.",
    image: getCertificateImage("computer-vision.jpg"),
  },
  {
    title: "Intro to Machine Learning",
    organization: "Kaggle",
    issueDate: "Date not listed",
    summary: "Completed Kaggle learning content covering introductory machine learning concepts.",
    image: getCertificateImage("intro-to-machine-learning.jpg"),
  },
  {
    title: "Intro to Deep Learning",
    organization: "Kaggle",
    issueDate: "Date not listed",
    summary: "Completed Kaggle learning content covering introductory deep learning concepts.",
    image: getCertificateImage("intro-to-deep-learning.jpg"),
  },
  {
    title: "MongoDB & CRUD Operations",
    organization: "MongoDB",
    issueDate: "Date not listed",
    summary: "Completed MongoDB learning focused on CRUD operations and document database workflows.",
    image: getCertificateImage("mongodb-crud-operations.jpg"),
  },
];
