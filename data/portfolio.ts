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
  name: "Pranav M.",
  role: "Senior Frontend Engineer & Product Builder",
  intro:
    "I craft premium, conversion-driven digital experiences for startups and modern SaaS teams—blending thoughtful design, fast interfaces, and measurable product impact.",
  location: "Bengaluru, India",
  email: "hello@pranavm.dev",
  availability: "Available for select product and engineering roles",
  headline:
    "I turn bold product ideas into polished, scalable experiences that feel as refined as they are reliable.",
};

export const about = {
  paragraph:
    "With a strong foundation in product engineering and design systems, I focus on building high-trust digital products that look exceptional and perform effortlessly. My work spans performance-led frontend architecture, elegant UI systems, and strategy-first product collaboration.",
  highlights: [
    "8+ years shipping product experiences for ambitious startups",
    "Deep expertise in React, Next.js, TypeScript, and design systems",
    "Known for balancing speed, clarity, and premium visual craft",
  ],
};

export const education: EducationItem[] = [
  {
    institution: "University of Mumbai",
    degree: "B.Tech in Computer Engineering",
    period: "2016 – 2020",
    description:
      "Built a strong technical foundation in software architecture, human-centered design, and product development.",
  },
  {
    institution: "NPTEL / Coursera",
    degree: "Specializations in UI Systems & Product Strategy",
    period: "2021 – 2023",
    description:
      "Expanded expertise in advanced frontend performance, interface design, and modern growth practices.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Northstar Labs",
    period: "2022 – Present",
    highlights: [
      "Led the frontend rebuild for a SaaS analytics platform used by 200k+ customers.",
      "Introduced motion systems, accessible components, and a design-language framework across the product.",
      "Improved core web vitals and conversion rate by 34% through thoughtful UX and performance work.",
    ],
  },
  {
    role: "Product Engineer",
    company: "Atelier AI",
    period: "2020 – 2022",
    highlights: [
      "Built onboarding and growth surfaces that helped the company expand from seed to Series A.",
      "Collaborated closely with founders and designers to turn product strategy into intuitive experiences.",
      "Created reusable UI primitives that shortened delivery time for new launches.",
    ],
  },
];

export const featuredProject: ProjectItem = {
  title: "Northstar Intelligence",
  summary:
    "A premium analytics workspace for modern teams, combining real-time reporting, elegant data storytelling, and a frictionless product experience.",
  stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "GSAP"],
  impact: "Raised activation by 28% and reduced abandonment during onboarding by 41%.",
  image: "/images/project-feature.svg",
  link: "https://github.com/pranavm",
};

export const projects: ProjectItem[] = [
  {
    title: "Aether Commerce",
    summary:
      "A polished storefront experience for a premium fashion brand, emphasizing storytelling, motion, and conversion clarity.",
    stack: ["React", "Next.js", "Shopify", "Motion"],
    impact: "Lifted average order value by 18% through better merchandising journeys.",
    image: "/images/project-one.svg",
    link: "https://github.com/pranavm/aether-commerce",
  },
  {
    title: "Lumen Finance",
    summary:
      "An elegant financial dashboard that translated complex workflows into calm, actionable, investor-friendly interfaces.",
    stack: ["TypeScript", "Node", "Tailwind", "Charts"],
    impact: "Improved task completion speed by 22% for customer success teams.",
    image: "/images/project-two.svg",
    link: "https://github.com/pranavm/lumen-finance",
  },
  {
    title: "Signal Studio",
    summary:
      "A collaborative design workspace where teams manage experiments, feedback, and rapid iteration without losing momentum.",
    stack: ["Next.js", "WebSockets", "Figma APIs", "Motion"],
    impact: "Cut review turnaround time by 35% for cross-functional teams.",
    image: "/images/project-three.svg",
    link: "https://github.com/pranavm/signal-studio",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Product & Interface",
    items: ["User Experience Design", "Design Systems", "Accessibility", "Visual Storytelling"],
  },
  {
    title: "Frontend Engineering",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Delivery & Strategy",
    items: ["Performance Optimization", "A/B Testing", "Product Thinking", "Cross-functional Leadership"],
  },
];

export const achievements = [
  "Built a design system adopted by 5 product squads across two markets.",
  "Recognized for shipping a flagship launch under a 6-week timeline with a high-quality bar.",
  "Delivered performance improvements that translated to measurable business growth.",
];

export const certifications = [
  { title: "Google UX Design Certificate", issuer: "Google" },
  { title: "Frontend Web Development", issuer: "Meta" },
  { title: "Advanced React & Next.js", issuer: "Frontend Masters" },
];

export const codingProfiles = [
  { label: "GitHub", url: "https://github.com/pranavm", stat: "30+ public repositories" },
  { label: "LeetCode", url: "https://leetcode.com/pranavm", stat: "150+ problems solved" },
  { label: "CodePen", url: "https://codepen.io/pranavm", stat: "Experimental UI playground" },
];

export const timeline: TimelineItem[] = [
  { year: "2018", title: "First shipped product", description: "Built a community platform for local creators with a focus on speed and clarity." },
  { year: "2020", title: "Joined a growth-stage startup", description: "Moved into product engineering, owning frontend experiences for customer-facing products." },
  { year: "2022", title: "Led platform redesign", description: "Rebuilt a complex SaaS interface with a more premium visual language and stronger performance." },
  { year: "2025", title: "Focused on premium product craft", description: "Now partnering with founders and product teams to create high-end digital experiences." },
];

export const gallery = [
  { title: "Crafted UI systems", caption: "Design systems that scale from prototype to production.", image: "/images/gallery-one.svg" },
  { title: "Motion-led storytelling", caption: "Elegant transitions that guide attention and delight users.", image: "/images/gallery-two.svg" },
  { title: "High-performance product work", caption: "A thoughtful balance of smooth interaction and technical rigor.", image: "/images/gallery-three.svg" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
