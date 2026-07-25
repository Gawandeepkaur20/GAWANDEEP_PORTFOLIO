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
import codeAplha from "@/assets/certificates/codeaplha.png";
import aiMl from "@/assets/certificates/ai.ml_workshop.jpg";
import flutterWork from "@/assets/certificates/flutter_workshop.jpg";
import dotSquares from "@/assets/certificates/dotsquares_intern.jpg";
import arcadeMile from "@/assets/certificates/arcade_milestone.jpg";









export const aboutCards = [
  {
    title: "Introduction",
    body: "Gawandeep Kaur is an AI Engineer and Full Stack Developer focused on practical software that turns complex workflows into clear, useful products.",
  },
  {
    title: "Education",
    body: "B.Tech in Computer Science Engineering at Punjabi University Patiala, with a strong interest in intelligent systems and product engineering.",
  },
  {
    title: "Current Focus",
    body: "Building AI-assisted applications, responsive web platforms, and reliable full stack systems with thoughtful user experience.",
  },
  {
    title: "What I'm Learning",
    body: "Model evaluation, agentic workflows, cloud-native development, automation patterns, and stronger software architecture practices.",
  },
  {
    title: "Interests",
    body: "Artificial intelligence, developer tools, automation, cloud, interface design, and the craft of building products that feel dependable.",
  },
  {
    title: "What Drives Me",
    body: "Solving real-world problems with calm, maintainable technology and building experiences that make users feel more capable.",
  },
];

export const currentStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "MongoDB",
  "Express",
  "Flutter",
  "Firebase",
  "Google Cloud",
  "Tailwind CSS",
  "HTML",
  "Flutter",
];

export const skills: Skill[] = [
  { name: "React", category: "Frontend", level: "Advanced", icon: "Atom" },
  { name: "Flutter", category: "Mobile Development", level: "Intermediate", icon: "Smartphone" },
  { name: "Dart",  category: "Languages", level: "Intermediate", icon: "Code2" },
  { name: "TypeScript", category: "Frontend", level: "Confident", icon: "Braces" },
  { name: "Tailwind CSS", category: "Frontend", level: "Confident", icon: "Palette" },
  { name: "Node.js", category: "Backend", level: "Confident", icon: "Server" },
  { name: "Express", category: "Backend", level: "Working", icon: "Workflow" },
  { name: "REST APIs", category: "Backend", level: "Confident", icon: "Cable" },
  { name: "Prompt Design", category: "AI", level: "Confident", icon: "Sparkles" },
  { name: "Python ML", category: "AI", level: "Working", icon: "BrainCircuit" },
  { name: "Automation", category: "AI", level: "Working", icon: "Bot" },
  { name: "Google Cloud", category: "Cloud", level: "Working", icon: "Cloud" },
  { name: "Firebase", category: "Cloud", level: "Confident", icon: "Flame" },
  { name: "MongoDB", category: "Databases", level: "Confident", icon: "Database" },
  { name: "SQL", category: "Databases", level: "Working", icon: "Table2" },
  { name: "JavaScript", category: "Languages", level: "Advanced", icon: "Code2" },
  { name: "Python", category: "Languages", level: "Confident", icon: "Terminal" },
  { name: "Java", category: "Languages", level: "Working", icon: "FileCode2" },
  { name: "Git", category: "Tools", level: "Confident", icon: "GitBranch" },
  { name: "Vite", category: "Tools", level: "Confident", icon: "Zap" },
  { name: "Leadership", category: "Soft Skills", level: "Advanced", icon: "Users" },
  { name: "Problem Solving", category: "Soft Skills", level: "Advanced", icon: "Puzzle" },
];

export const projects: Project[] = [
  {
    title: "Signal Zero",
    slug: "signal-zero",
    image: [
  {
    src: signalZeroImg,
    title: "Landing Page",},
  {
    src: signalHome,
    title: "Mission Dashboard",
   
  },
  {
    src: signalStory,
    title: "Interactive Story",
    
  },
  {
    src: signalInventory,
    title: "Memory Archive",
    
  },
  {
    src:signalMemory,
    title:"Actions",
  }
],
    categories: ["AI", "Python", "Web"],
    overview:
      "An AI-powered interactive visual novel where users recover lost human memories through dynamic storytelling, AI-generated visuals, and immersive audio.",
    problem:
      "Traditional interactive stories rely on fixed storylines, limiting replayability and personalization.",
    solution:
      "Developed a dynamic narrative engine that generates unique story chapters based on user choices, accompanied by AI-generated illustrations and text-to-speech narration for an engaging experience.",
    architecture:
      "Built with Streamlit as the frontend, Gemini API for story generation, Pollinations AI for image generation, gTTS for narration, JSON-based state management, and modular Python services for prompts, images, and audio.",
    techStack: [
      "Python",
      "Streamlit",
      "Gemini API",
      "Pollinations AI",
      "gTTS",
      "JSON"
    ],
    keyFeatures: [
      "AI-generated branching storyline",
      "Dynamic image generation",
      "Text-to-speech narration",
      "Persistent game state",
      "Memory archive system",
      "Genre customization"
    ],
    challenges: [
      "Maintaining consistent AI-generated story flow",
      "Synchronizing images with narrative",
      "Managing application state across chapters"
    ],
    lessons: [
      "Prompt engineering significantly improves AI consistency",
      "State management is crucial for interactive AI applications"
    ],
    futureScope: [
      "Voice-based player interaction",
      "Save/load multiple story sessions",
      "Multiplayer storytelling",
      "Character memory system"
    ],
    metrics: [
      "AI-powered storytelling engine",
      "Dynamic multimedia generation",
      "Interactive branching narrative"
    ],
    timeline: "1 week",
    githubUrl: "https://github.com/Gawandeepkaur20/SIGNAL_ZERO.git",
    demoUrl: "https://example.com/"
  },

  {
    title: "Career Pilot AI",
    slug: "career-pilot-ai",
     image: [
  {
    src: careerPilotImg,
    title: "Landing Page",
   
  },
  {
    src: careerChat,
    title: "AI Career Chat",
  
  },
  {
    src: careerDisplay,
    title: "Career Analysis Dashboard",

  },
  {
    src: careerQues,
    title: "Interview Preparation",
    
  },
  {
    src: careerPilotPro,
    title: "Resume Analysis",
    
  }
],
    categories: ["AI", "Python", "Web", "Full Stack"],
    overview:
      "An AI-powered career guidance platform that analyzes resumes, recommends career paths, improves resumes, and assists users with interview preparation.",
    problem:
      "Students often struggle to identify skill gaps, optimize resumes, and prepare effectively for placements.",
    solution:
      "Built an intelligent career assistant that provides resume analysis, personalized career recommendations, interview question generation, and AI-powered guidance.",
    architecture:
      "Frontend built with Streamlit, integrated Gemini API for career guidance, resume parsing modules, and structured AI workflows for personalized recommendations.",
    techStack: [
      "Python",
      "Streamlit",
      "Gemini API",
      "PDF Processing",
      "NLP"
    ],
    keyFeatures: [
      "Resume analysis",
      "Career recommendations",
      "Skill gap detection",
      "Interview preparation",
      "AI career assistant"
    ],
    challenges: [
      "Generating personalized recommendations",
      "Extracting structured information from resumes"
    ],
    lessons: [
      "AI recommendations become more useful when supported by structured data",
      "User-friendly workflows improve engagement"
    ],
    futureScope: [
      "Job portal integration",
      "ATS score prediction",
      "Mock interview simulator",
      "Learning roadmap generation"
    ],
    metrics: [
      "Multiple AI career modules",
      "Resume intelligence workflow",
      "Placement-focused assistant"
    ],
    timeline: "2 weeks",
    githubUrl: "https://github.com/Gawandeepkaur20/CodeAlpha_Chatbot-for-FAQs.git",
    demoUrl: "https://example.com/"
  },

  {
    title: "Object Detection & Tracking",
    slug: "object-detection-tracking",
     image: [
  {
    src: objectDetectionImg,
    title: "Project Dashboard",
  
  },
  {
    src: objectDetectionCam,
    title: "Live Webcam Detection",
  
  },
  {
    src: objectDetectionVideo,
    title: "Video Tracking",
    
  },
  {
    src: objectDetectionHis,
    title: "Detection Results",
    
  }
],
    categories: ["AI", "Python", "Computer Vision"],
    overview:
      "A real-time computer vision application capable of detecting and continuously tracking multiple objects in live video streams.",
    problem:
      "Conventional object detection systems identify objects in individual frames but fail to maintain object identity over time.",
    solution:
      "Implemented an object detection pipeline integrated with tracking algorithms to assign persistent IDs and monitor object movement across frames.",
    architecture:
      "Python-based application using YOLO for object detection, OpenCV for video processing, and tracking algorithms such as DeepSORT for real-time object tracking.",
    techStack: [
      "Python",
      "YOLO",
      "OpenCV",
      "DeepSORT",
      "NumPy"
    ],
    keyFeatures: [
      "Real-time object detection",
      "Multi-object tracking",
      "Persistent object IDs",
      "Bounding boxes",
      "Live webcam support"
    ],
    challenges: [
      "Maintaining tracking accuracy during occlusion",
      "Balancing speed with detection accuracy"
    ],
    lessons: [
      "Detection and tracking must be optimized together",
      "Efficient frame processing improves real-time performance"
    ],
    futureScope: [
      "Vehicle counting",
      "Crowd analytics",
      "Smart surveillance integration"
    ],
    metrics: [
      "Real-time inference",
      "Multiple object tracking",
      "Live video processing"
    ],
    timeline: "2 weeks",
    githubUrl: "https://github.com/Gawandeepkaur20/CodeAlpha_-Object-Detection-and-Tracking.git",
    demoUrl: "https://example.com/"
  },

  {
    title: "AI Blog Website",
    slug: "ai-blog-website",
     image: [
  {
    src: aiBlogImg,
    title: "Homepage",

  },
  {
    src: aiBlogGen,
    title: "AI Blog Generator",
    
  },
  {
    src: aiBlogPost,
    title: "Blog Editor",
   
  },
  {
    src: aiBlogSeo,
    title: "SEO Optimization",
    
  },
  {
    src: aiBlogComment,
    title: "Published Blog :Comments,like,dislike",
    
  }
],
    categories: ["MERN", "AI", "Web", "Full Stack"],
    overview:
      "A modern blogging platform that combines traditional content management with AI-assisted blog generation and SEO optimization.",
    problem:
      "Creating high-quality blog content and optimizing it for search engines is time-consuming for content creators.",
    solution:
      "Developed a full-stack blogging platform featuring AI-powered content generation, rich-text editing, image uploads, SEO suggestions, and user authentication.",
    architecture:
      "Built using the MERN stack with Redux Toolkit, JWT authentication, React Quill editor, image upload services, and AI-powered content generation modules.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "React Quill"
    ],
    keyFeatures: [
      "AI blog generation",
      "Rich text editor",
      "SEO suggestions",
      "Image upload",
      "Authentication",
      "Blog management"
    ],
    challenges: [
      "Integrating AI-generated content with editor workflows",
      "Managing authentication and media uploads"
    ],
    lessons: [
      "AI should assist creators rather than replace them",
      "Content management requires careful UX design"
    ],
    futureScope: [
      "Collaborative editing",
      "Content scheduling",
      "AI plagiarism detection"
    ],
    metrics: [
      "Role-based authentication",
      "Rich content management",
      "AI-assisted writing"
    ],
    timeline: "3 weeks",
    githubUrl: "https://github.com/Gawandeepkaur20/Blog.git",
    demoUrl: "https://example.com/"
  },

  {
    title: "Boutique Management System",
    slug: "boutique-management-system",
      image: [
  {
    src: boutiqueImg,
    title: "Login & Dashboard",
    
  },
  {
    src: boutiqueDashboard,
    title: "Business Dashboard",
    
  },
  {
    src: boutiqueOrders,
    title: "Order Management",
    
  },
  {
    src: boutiqueGen,
    title: "Customer Management",
   
  },
  {
    src: boutiqueFashion,
    title: "Worker & Fashion Management",
    
  }
],
    categories: ["MERN", "Web", "Full Stack"],
    overview:
      "A comprehensive MERN-based boutique management platform that streamlines customer management, order processing, worker assignments, measurements, payments, and inventory operations.",
    problem:
      "Many boutique businesses rely on manual record keeping, making it difficult to manage orders, customer measurements, workers, and payments efficiently.",
    solution:
      "Built a centralized management system with secure authentication, role-based dashboards, order lifecycle tracking, customer measurements, payment integration, invoice generation, and business analytics.",
    architecture:
      "Developed using the MERN stack with React frontend, Express & Node.js backend, MongoDB database, Redux Toolkit for state management, JWT authentication, and Razorpay payment integration.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Razorpay"
    ],
    keyFeatures: [
      "Role-based authentication",
      "Customer management",
      "Order tracking",
      "Worker management",
      "Measurement records",
      "Invoice generation",
      "Online payments",
      "Dashboard analytics"
    ],
    challenges: [
      "Designing relationships between customers, orders, and measurements",
      "Building reusable admin dashboards",
      "Integrating secure online payments"
    ],
    lessons: [
      "Well-designed database models simplify complex business workflows",
      "Reusable components significantly improve maintainability"
    ],
    futureScope: [
      "Inventory forecasting",
      "Barcode integration",
      "Customer notifications",
      "Advanced business analytics"
    ],
    metrics: [
      "8+ business modules",
      "Role-based architecture",
      "End-to-end business workflow automation"
    ],
    timeline: "4 weeks",
    githubUrl: "https://github.com/",
    demoUrl: "https://example.com/"
  }
];

export const experiences: Experience[] = [
  {
    role: "AI Intern",
    organization: "MirAI School of Technology",
    duration: "2026",
    responsibilities: [
      "Explored AI product workflows, model-assisted interfaces, and applied automation patterns.",
      "Converted ambiguous problem statements into structured prototypes and technical notes.",
    ],
    achievements: [
      "Built practical AI experiments",
      "Strengthened prompt design and evaluation habits",
    ],
    technologies: ["Python", "AI workflows", "Automation", "React"],
  },

  {
    role: "MERN Stack Development Intern",
    organization: "Dotsquares Pvt. Ltd.",
    duration: "2025",
    responsibilities: [
      "Developed and maintained full-stack web applications using the MERN stack.",
      "Built responsive user interfaces with React and integrated RESTful APIs with Express.js and Node.js.",
      "Designed and managed MongoDB collections, optimized database queries, and collaborated using Git for version control.",
    ],
    achievements: [
      "Developed end-to-end MERN modules",
      "Integrated frontend with backend APIs",
      "Improved understanding of scalable full-stack architecture",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API",
      "Git",
    ],
  },

  {
    role: "Web Development Lead",
    organization: "Google Developer Groups (GDG) on Campus",
    duration: "2025 - Present",
    responsibilities: [
      "Led web initiatives, supported peer learning, and helped organize technical workshops.",
      "Guided students through frontend fundamentals, project planning, and deployment thinking.",
    ],
    achievements: [
      "Community leadership",
      "Workshop facilitation",
      "Hands-on development mentoring",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Firebase",
      "Google Cloud",
    ],
  },
];

export const achievements = [
  {
    label: "TechSprint Hackathon",
    value: 10,
    suffix: " Finalist",
    description: "Ranked among the Top 10 teams for building an innovative software solution.",
  },
  {
    label: "GDG Leadership",
    value: 1,
    suffix: " Role",
    description: "Serving as Web Development Lead at Google Developer Groups on Campus.",
  },
  {
    label: "AI Projects",
    value: 5,
    suffix: "+ Built",
    description: "Developed AI-powered applications using LLMs, Computer Vision, and NLP.",
  },
  {
    label: "Internships",
    value: 2,
    suffix: " Completed",
    description: "Successfully completed AI internships at CodeAlpha and MirAI School of Technology.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Google Cloud Arcade - Premium Milestone",
    organization: "Google Cloud",
    issueDate: "2024",
    image:arcadeMile,
    summary:
      "Earned the Premium Milestone by completing advanced Google Cloud labs and challenges.",
  },
  {
    title: "Outstanding Performer - Flutter Workshop",
    organization: "Google Developer Groups (GDG) on Campus",
    issueDate: "2025",
    image:flutterWork,
    summary:
      "Recognized as an Outstanding Performer in Flutter application development.",
  },
  {
    title: "AI & Machine Learning Workshop",
    organization: "Google Developer Groups (GDG) on Campus",
    issueDate: "2025",
    image:aiMl,
    summary:
      "Completed hands-on training in AI, Machine Learning, and practical applications.",
  },
  {
    title: "AI Internship Certificate",
    organization: "CodeAlpha",
    issueDate: "2026",
    image:codeAplha,
    summary:
      "Completed an AI internship focused on chatbots, computer vision, and machine learning projects.",
  },
  {
    title: "AI Builder Internship Certificate",
    organization: "MirAI School of Technology",
    issueDate: "2026",
    image:dotSquares,
    summary:
      "Completed the AI Builder Internship with hands-on experience in Generative AI and intelligent applications.",
  },
  {
    title: "MERN Stack Internship Certificate",
    organization: "Dotsquares Pvt. Ltd.",
    issueDate: "2026",
    image:dotSquares,
    summary:
      "Completed a MERN Stack internship building full-stack web applications using React, Node.js, Express, and MongoDB.",
  },
];