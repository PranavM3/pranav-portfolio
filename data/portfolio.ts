export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  image: string;
  link: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const profile = {
  name: "Pranav M",
  role: "AI & Data Science Engineer",
  intro:
    "I build practical AI systems, computer vision pipelines, and data-driven experiences that turn ideas into impact.",
  location: "India",
  email: "pranav.m2024aids@sece.ac.in",
  availability: "Open to internships, research, and AI engineering opportunities",
  headline:
    "I design and ship intelligent solutions across machine learning, computer vision, cloud deployment, and polished web experiences.",
};

export const about = {
  paragraph:
    "As an AI & Data Science student, I’m passionate about turning real-world problems into intelligent systems. My work spans computer vision, predictive modeling, cloud-based deployment, and thoughtful product-facing interfaces.",
  highlights: [
    "Hands-on experience with computer vision, ML pipelines, and cloud computing",
    "Built AI systems for exam monitoring, sustainability, and modern product prototypes",
    "Strong foundation in Python, machine learning, web technologies, and collaborative problem solving",
  ],
};

export const education: EducationItem[] = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "2024 – Present",
    description:
      "Building a strong foundation in machine learning, data analytics, cloud computing, and real-world problem solving.",
  },
  {
    institution: "Independent learning & hands-on projects",
    degree: "Applied AI, Computer Vision & Web Engineering",
    period: "2024 – Present",
    description:
      "Strengthening my practice through internships, hackathons, and end-to-end builds that connect research with deployment.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "AI Internship Trainee",
    company: "NIELIT",
    period: "2025",
    highlights: [
      "Developed an AI-based online exam cheating detection system with real-time monitoring workflows.",
      "Built computer vision-based tracking modules for suspicious behavior detection and alerting.",
      "Worked across model design, feature selection, and deployment-focused experimentation.",
    ],
  },
  {
    role: "Innovation Program Participant",
    company: "UiTM Malaysia",
    period: "2025",
    highlights: [
      "Contributed to an SDG-focused heritage sustainability solution in an international innovation setting.",
      "Applied cloud, data, and collaborative problem-solving concepts to create a practical prototype.",
      "Helped the team earn recognition for creativity, impact, and cross-functional execution.",
    ],
  },
];

export const featuredProject: ProjectItem = {
  title: "AI-Based Online Exam Cheating Detection System",
  summary:
    "A computer vision and AI-driven monitoring system designed to detect suspicious activity during online exams and support safer assessment workflows.",
  stack: ["Python", "OpenCV", "MediaPipe", "Flask", "Cloud"],
  impact: "Built a practical prototype for real-time monitoring with a strong focus on accuracy, reliability, and deployment readiness.",
  image: "/images/project-feature.svg",
  link: "https://github.com/PranavM3/pranav-portfolio",
};

export const projects: ProjectItem[] = [
  {
    title: "AI-Based Online Exam Monitoring",
    summary:
      "An intelligent monitoring workflow that combines computer vision and AI logic for detecting potential cheating during online assessments.",
    stack: ["Python", "OpenCV", "Flask", "Computer Vision"],
    impact: "Created a strong proof of concept for applied AI in academic and assessment environments.",
    image: "/images/project-one.svg",
    link: "https://github.com/PranavM3/pranav-portfolio",
  },
  {
    title: "SDG Heritage Sustainability Solution",
    summary:
      "A collaborative innovation project focused on sustainability, heritage awareness, and practical digital impact.",
    stack: ["Cloud", "Data", "Product Thinking", "Collaboration"],
    impact: "Demonstrated how data-informed solutions can support meaningful social and environmental goals.",
    image: "/images/project-two.svg",
    link: "https://github.com/PranavM3/pranav-portfolio",
  },
  {
    title: "Interactive AI/DS Portfolio Experience",
    summary:
      "A polished portfolio experience that presents my projects, learning journey, and technical interests through modern web design.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    impact: "Showcases my work with a responsive, premium experience that reflects both engineering and design discipline.",
    image: "/images/project-three.svg",
    link: "https://github.com/PranavM3/pranav-portfolio",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    items: ["Python", "PyTorch", "scikit-learn", "OpenCV", "Data Analysis"],
  },
  {
    title: "Data & Cloud",
    items: ["Pandas", "NumPy", "SQL", "Cloud basics", "Deployment"],
  },
  {
    title: "Web & Product",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git & GitHub"],
  },
];

export const achievements = [
  "Completed a 4-week AI internship at NIELIT and built a real-time cheating detection system.",
  "Secured recognition in the UiTM Malaysia innovation program for a sustainability-focused solution.",
  "Participated in Freshathon 2k25 and Createathon, turning ideas into functional prototypes under tight deadlines.",
];

export const certifications = [
  { title: "AI Internship Program", issuer: "NIELIT" },
  { title: "Machine Learning Foundations", issuer: "Independent Study" },
  { title: "Cloud & Web Development Fundamentals", issuer: "Hands-on Projects" },
];

export const codingProfiles = [
  { label: "GitHub", url: "https://github.com/PranavM3/pranav-portfolio", stat: "Portfolio and AI project work" },
  { label: "LinkedIn", url: "https://www.linkedin.com/", stat: "Professional profile" },
  { label: "LeetCode", url: "https://leetcode.com/", stat: "Problem solving and coding practice" },
];

export const timeline: TimelineItem[] = [
  { year: "2024", title: "Started the AI & Data Science path", description: "Built a strong base in programming, data, and applied problem solving." },
  { year: "2025", title: "Completed AI internship at NIELIT", description: "Worked on a computer vision-based solution for online exam monitoring." },
  { year: "2025", title: "Joined the UiTM innovation program", description: "Contributed to an SDG-inspired sustainability solution with a global team." },
  { year: "2026", title: "Building intelligent products", description: "Now focusing on practical AI systems, polished interfaces, and deployment-ready prototypes." },
];

export const gallery = [
  { title: "Computer vision experiments", caption: "Hands-on work at the intersection of AI and real-world problem solving.", image: "/images/gallery-one.svg" },
  { title: "Applied AI prototyping", caption: "Turning research concepts into practical, testable systems.", image: "/images/gallery-two.svg" },
  { title: "Polished digital storytelling", caption: "Presenting technical work with clarity, structure, and design care.", image: "/images/gallery-three.svg" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
