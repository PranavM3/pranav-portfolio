"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Camera,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe2,
  Mail,
  Monitor,
  Orbit,
  Sparkles,
  Trophy,
  Workflow,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { LoadingScreen } from "@/components/loading-screen";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  achievements,
  codingProfiles,
  featuredProject,
  navItems,
  profile,
  projects,
  timeline,
} from "@/data/portfolio";

const snapshotCards = [
  { label: "Current study", value: "B.Tech AI & Data Science", detail: "Sri Eshwar College of Engineering" },
  { label: "Internships", value: "NIELIT", detail: "Computer Vision & AI Monitoring" },
  { label: "International experience", value: "UiTM Malaysia", detail: "Cloud & Digital Transformation" },
  { label: "Key domains", value: "Computer Vision • ML • Data", detail: "Cloud & Product Thinking" },
];

const workflowStages = [
  "Student camera",
  "Face detection",
  "Eye tracking",
  "Head pose detection",
  "Object detection",
  "Suspicious activity detection",
  "Admin dashboard",
  "Live alerts",
  "Report generation",
];

const ecosystemNodes = [
  { label: "Computer Vision", icon: Camera },
  { label: "Machine Learning", icon: BrainCircuit },
  { label: "Data Analytics", icon: Database },
  { label: "Cloud Computing", icon: Cloud },
  { label: "Python", icon: Code2 },
  { label: "React", icon: Monitor },
  { label: "OpenCV", icon: Camera },
  { label: "NumPy", icon: Cpu },
];

const whyHireMe = [
  { title: "AI Solutions", description: "Practical systems grounded in real-world constraints." },
  { title: "Computer Vision", description: "Hands-on experience with monitoring and detection pipelines." },
  { title: "Cloud Computing", description: "Exposure to digital transformation and scalable thinking." },
  { title: "Problem Solving", description: "Built solutions through internships, projects, and hackathon work." },
  { title: "Leadership", description: "Collaborated in cross-functional and international environments." },
  { title: "Professional Communication", description: "Clear, thoughtful communication across teams and audiences." },
];

export default function Home() {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <main className="relative overflow-hidden bg-[linear-gradient(135deg,_#fffdfd_0%,_#fcf5f5_42%,_#fdf8f7_100%)] text-zinc-900">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-[#f1c8d1]/50 blur-3xl" />
          <div className="absolute right-[-5%] top-24 h-80 w-80 rounded-full bg-[#eec2b3]/45 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#f6ddd2]/40 blur-3xl" />
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
          <Link href="#hero" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-700">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7a1f2d]/20 bg-[#7a1f2d]/10 text-[#7a1f2d]">
              PM
            </span>
            {profile.name}
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-zinc-950">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <section id="hero" className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-12 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7a1f2d]/20 bg-white/70 px-4 py-2 text-sm text-[#7a1f2d] shadow-sm backdrop-blur">
                <Sparkles size={16} />
                Open to AI, ML, and data-driven opportunities
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">Artificial Intelligence & Data Science Engineer</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
                {profile.headline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#projects">
                    View projects
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="#contact">Contact me</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-600">
                <a href={`mailto:${profile.email}`} className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 backdrop-blur transition hover:border-[#7a1f2d]/20 hover:text-[#7a1f2d]">
                  {profile.email}
                </a>
                <a href="https://github.com/PranavM3/pranav-portfolio" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 backdrop-blur transition hover:border-[#7a1f2d]/20 hover:text-[#7a1f2d]">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 backdrop-blur transition hover:border-[#7a1f2d]/20 hover:text-[#7a1f2d]">
                  LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-[2rem] border border-[#7a1f2d]/10" />
              <div className="relative grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Current focus</p>
                    <Orbit size={18} className="text-[#7a1f2d]" />
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-zinc-950">AI systems</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">Computer vision, machine learning, practical deployment.</p>
                </div>
                <div className="rounded-[1.5rem] border border-zinc-200 bg-[#fff7f8] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Latest achievement</p>
                    <Trophy size={18} className="text-[#7a1f2d]" />
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-zinc-950">UiTM recognition</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">Third prize in an international sustainability-focused innovation program.</p>
                </div>
                <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Project snapshot</p>
                    <Workflow size={18} className="text-[#7a1f2d]" />
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-3xl font-semibold text-zinc-950">3</p>
                      <p className="mt-1 text-sm text-zinc-600">Projects</p>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-zinc-950">2</p>
                      <p className="mt-1 text-sm text-zinc-600">Internships</p>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-zinc-950">1</p>
                      <p className="mt-1 text-sm text-zinc-600">International program</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <AnimatedSection id="snapshot" className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-16">
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl lg:p-10">
            <SectionHeading
              eyebrow="Recruiter snapshot"
              title="Who is Pranav in under 10 seconds?"
              description="A fast read of academic grounding, project depth, internships, and technical focus."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {snapshotCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">{card.label}</p>
                  <p className="mt-3 text-lg font-semibold text-zinc-950">{card.value}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{card.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            <div className="grid gap-12 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
              <div>
                <SectionHeading
                  eyebrow="Featured project"
                  title={featuredProject.title}
                  description="A premium product-style launch for an AI monitoring system built for practical assessment use cases."
                />
                <p className="mt-6 text-lg leading-8 text-zinc-700">{featuredProject.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {featuredProject.stack.map((item) => (
                    <span key={item} className="rounded-full border border-[#7a1f2d]/15 bg-[#fff7f8] px-3 py-1.5 text-sm text-zinc-700">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-zinc-600">{featuredProject.impact}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href={featuredProject.link} target="_blank" rel="noreferrer">
                      GitHub
                      <ArrowUpRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="#contact">Discuss the work</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50/90 p-6">
                <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-3">
                  <Image src={featuredProject.image} alt={featuredProject.title} width={900} height={560} className="h-72 w-full rounded-[1.2rem] object-cover" />
                </div>
                <div className="mt-6 rounded-[1.5rem] border border-[#7a1f2d]/10 bg-[#fff7f8] p-5">
                  <div className="flex items-center gap-2 text-[#7a1f2d]">
                    <Workflow size={16} />
                    <p className="text-sm font-semibold uppercase tracking-[0.24em]">Workflow</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {workflowStages.map((stage, index) => (
                      <div key={stage} className="flex items-center gap-3 text-sm text-zinc-700">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#7a1f2d]/20 bg-white text-xs font-semibold text-[#7a1f2d]">
                          {index + 1}
                        </span>
                        {stage}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Project experience"
            title="Each project is designed like a product story, not a static card."
            description="A closer look at the systems, environments, and problem framing behind the work."
          />
          <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl lg:p-8">
            <div className="hidden grid-cols-[1.4fr_1fr_0.8fr_1.2fr_0.7fr_0.7fr] gap-4 border-b border-zinc-200 pb-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 md:grid">
              <span>Project</span>
              <span>Domain</span>
              <span>Stack</span>
              <span>Status</span>
              <span>GitHub</span>
              <span>Impact</span>
            </div>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="mt-4 grid gap-4 rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-5 md:grid-cols-[1.4fr_1fr_0.8fr_1.2fr_0.7fr_0.7fr]"
              >
                <div>
                  <p className="text-lg font-semibold text-zinc-950">{project.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{project.summary}</p>
                </div>
                <div className="text-sm text-zinc-600">{project.stack[0]}</div>
                <div className="text-sm text-zinc-600">{project.stack.slice(0, 2).join(" • ")}</div>
                <div>
                  <span className="rounded-full border border-[#7a1f2d]/20 bg-[#fff7f8] px-3 py-1 text-sm font-medium text-[#7a1f2d]">Active</span>
                </div>
                <div>
                  <Link href={project.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#7a1f2d]">Open</Link>
                </div>
                <div className="text-sm text-zinc-600">{project.impact}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl">
              <SectionHeading
                eyebrow="International experience"
                title="A global perspective shaped by collaboration and practical impact."
                description="My work has crossed academic, cultural, and technical boundaries."
              />
              <div className="mt-8 space-y-4">
                <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">NIELIT</p>
                      <p className="mt-2 text-xl font-semibold text-zinc-950">Computer Vision Internship</p>
                    </div>
                    <Globe2 size={20} className="text-[#7a1f2d]" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">Built a monitoring-oriented AI workflow with Python, Flask, and computer vision concepts such as face detection, eye tracking, and object detection.</p>
                </div>
                <div className="rounded-[1.5rem] border border-zinc-200 bg-[#fff7f8] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">UiTM Malaysia</p>
                      <p className="mt-2 text-xl font-semibold text-zinc-950">Cloud & Sustainability Innovation</p>
                    </div>
                    <BriefcaseBusiness size={20} className="text-[#7a1f2d]" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">Contributed to a sustainability-focused solution within an international innovation environment, applying cloud, digital transformation, and collaborative problem-solving.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl">
              <SectionHeading
                eyebrow="Technology ecosystem"
                title="An AI stack that stays grounded in engineering practice."
                description="The core landscape behind the work: AI, data, web, and deployment."
              />
              <div className="relative mt-10 flex min-h-[320px] items-center justify-center rounded-[2rem] border border-zinc-200 bg-[radial-gradient(circle,_rgba(244,182,194,0.2),_transparent_70%)] p-6">
                <div className="absolute flex h-28 w-28 items-center justify-center rounded-full border border-[#7a1f2d]/20 bg-white text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#7a1f2d] shadow-lg">
                  AI
                </div>
                {ecosystemNodes.map((node, index) => {
                  const positions = [
                    { left: "8%", top: "18%" },
                    { right: "8%", top: "18%" },
                    { left: "4%", bottom: "18%" },
                    { right: "4%", bottom: "18%" },
                    { left: "50%", top: "6%" },
                    { right: "50%", top: "6%" },
                    { left: "50%", bottom: "6%" },
                    { right: "50%", bottom: "6%" },
                  ];
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={node.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                      whileHover={{ y: -4, scale: 1.04 }}
                      className="absolute flex items-center gap-2 rounded-full border border-zinc-200 bg-white/85 px-3 py-2 text-sm text-zinc-700 shadow-sm"
                      style={positions[index]}
                    >
                      <Icon size={14} className="text-[#7a1f2d]" />
                      {node.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2.5rem] border border-white/70 bg-[#fff7f8] p-8 shadow-sm">
              <SectionHeading
                eyebrow="Achievements"
                title="Recognition shaped by effort, curiosity, and execution."
                description="A selective view of the moments that matter most."
              />
              <div className="mt-8 space-y-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <Trophy size={18} className="mt-0.5 text-[#7a1f2d]" />
                      <p className="text-base leading-8 text-zinc-700">{achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl">
              <SectionHeading
                eyebrow="Engineering journey"
                title="A roadmap of growth from fundamentals to applied AI."
                description="A story of building momentum through study, internships, collaboration, and projects."
              />
              <div className="mt-8 space-y-4">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-4 rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7a1f2d]/20 bg-[#fff7f8] text-sm font-semibold text-[#7a1f2d]">
                      {item.year}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-zinc-950">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl lg:p-10">
            <SectionHeading
              eyebrow="GitHub command center"
              title="A public engineering trail with projects, profiles, and technical curiosity."
              description="A direct window into the code, concepts, and work behind the portfolio."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-6">
                <div className="flex items-center gap-3 text-[#7a1f2d]">
                  <Code2 size={18} />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em]">Code presence</p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.25rem] border border-zinc-200 bg-white p-4">
                    <p className="text-2xl font-semibold text-zinc-950">3</p>
                    <p className="mt-1 text-sm text-zinc-600">Projects</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-zinc-200 bg-white p-4">
                    <p className="text-2xl font-semibold text-zinc-950">2</p>
                    <p className="mt-1 text-sm text-zinc-600">Internships</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-zinc-200 bg-white p-4">
                    <p className="text-2xl font-semibold text-zinc-950">1</p>
                    <p className="mt-1 text-sm text-zinc-600">International program</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-zinc-200 bg-[#fff7f8] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Coding profiles</p>
                <div className="mt-5 space-y-3">
                  {codingProfiles.map((profileItem) => (
                    <Link key={profileItem.label} href={profileItem.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-[1.25rem] border border-zinc-200 bg-white px-4 py-3 transition hover:border-[#7a1f2d]/20 hover:text-[#7a1f2d]">
                      <span className="font-semibold text-zinc-950">{profileItem.label}</span>
                      <span className="text-sm text-zinc-600">{profileItem.stat}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Why hire me"
            title="A clear case for impact, depth, and thoughtful execution."
            description="The strongest traits that matter to recruiters and teams."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyHireMe.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 text-[#7a1f2d]">
                  <BadgeCheck size={18} />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em]">{item.title}</p>
                </div>
                <p className="mt-4 text-base leading-8 text-zinc-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-[2.5rem] border border-white/70 bg-zinc-950 p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.2)] lg:p-12">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something intelligent together."
              description="If you’re looking for a thoughtful AI engineer with a strong product and research mindset, I’d be glad to connect."
              tone="light"
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div className="space-y-4 text-lg leading-8 text-zinc-300">
                <p>My work spans AI, computer vision, cloud-aware thinking, and polished digital experiences.</p>
                <p>I’m always interested in conversations around practical products, research-driven ideas, and real-world impact.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7a1f2d]/30 bg-[#7a1f2d]/15 text-lg font-semibold text-[#f4b6c2]">
                    PM
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{profile.name}</p>
                    <p className="text-sm text-zinc-400">{profile.role}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-sm text-zinc-300">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 transition hover:text-white">
                    <Mail size={16} />
                    {profile.email}
                  </a>
                  <a href="https://github.com/PranavM3/pranav-portfolio" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                    <Code2 size={16} />
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                    <BriefcaseBusiness size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/60 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Pranav M. Crafted for AI, data, and product-minded teams.</p>
          <div className="flex items-center gap-4">
            <Link href="#hero" className="transition hover:text-zinc-950">Back to top</Link>
            <Link href="#projects" className="transition hover:text-zinc-950">Selected work</Link>
          </div>
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
