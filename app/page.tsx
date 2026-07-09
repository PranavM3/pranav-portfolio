import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Code2,
  Compass,
  GraduationCap,
  Mail,
  Sparkles,
  Trophy,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { HeroVisual } from "@/components/hero-visual";
import { LoadingScreen } from "@/components/loading-screen";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  about,
  achievements,
  certifications,
  codingProfiles,
  education,
  experience,
  featuredProject,
  gallery,
  navItems,
  profile,
  projects,
  skills,
  timeline,
} from "@/data/portfolio";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(244,182,194,0.24),_transparent_32%)]" />
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
          <Link href="#hero" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-700">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7a1f2d]/20 bg-[#7a1f2d]/10 text-[#7a1f2d]">
              PM
            </span>
            Pranav M.
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-zinc-950">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <section id="hero" className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#7a1f2d]/20 bg-white/70 px-4 py-2 text-sm text-[#7a1f2d] shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Available for premium product and frontend roles
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-7xl">
              {profile.role}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              {profile.headline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">
                  Let&apos;s build something exceptional
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#projects">View selected work</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-600">
              <div className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 backdrop-blur">
                {profile.location}
              </div>
              <div className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 backdrop-blur">
                {profile.availability}
              </div>
            </div>
          </div>
          <HeroVisual />
        </section>

        <AnimatedSection id="about" className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-10 lg:p-14">
            <SectionHeading
              eyebrow="About"
              title="Crafted for product teams that care about feel, speed, and trust."
              description="I combine high-end visual design with grounded engineering to create digital products that feel effortless from the first click."
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4 text-lg leading-8 text-zinc-700">
                <p>{about.paragraph}</p>
                <p>
                  My approach is simple: shape the product experience around outcomes, then build it with the discipline of a strong design system and a performance-first mindset.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[#7a1f2d]/12 bg-[#fff7f8] p-6">
                <div className="flex items-center gap-3 text-[#7a1f2d]">
                  <Compass size={20} />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em]">What I bring</p>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-zinc-700">
                  {about.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 shrink-0 text-[#7a1f2d]" size={18} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="education" className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Education"
            title="A foundation in engineering, design, and product fluency."
            description="The work reflects a balance of technical depth and thoughtful product leadership."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {education.map((item) => (
              <div key={item.degree} className="rounded-[1.5rem] border border-white/60 bg-white/70 p-7 shadow-sm backdrop-blur-xl">
                <div className="flex items-center gap-3 text-[#7a1f2d]">
                  <GraduationCap size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">{item.period}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-950">{item.degree}</h3>
                <p className="mt-2 text-lg font-medium text-zinc-700">{item.institution}</p>
                <p className="mt-4 text-base leading-8 text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience" className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Experience"
            title="Building products that balance polish, performance, and clarity."
            description="Most of my work sits at the intersection of frontend engineering, product strategy, and visual craft."
          />
          <div className="mt-10 space-y-6">
            {experience.map((item) => (
              <div key={item.role} className="rounded-[1.75rem] border border-white/60 bg-white/70 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[#7a1f2d]">
                      <BriefcaseBusiness size={18} />
                      <span className="text-sm font-semibold uppercase tracking-[0.24em]">{item.company}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-zinc-950">{item.role}</h3>
                  </div>
                  <p className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600">{item.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-base leading-8 text-zinc-700">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 shrink-0 text-[#7a1f2d]" size={18} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <SectionHeading
                eyebrow="Featured project"
                title="Northstar Intelligence"
                description="A premium analytics workspace that turned complex product data into calm, confident decision-making."
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
              <Button asChild className="mt-6" size="lg">
                <Link href={featuredProject.link} target="_blank" rel="noreferrer">
                  Explore the case study
                  <ArrowUpRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-3">
              <Image src={featuredProject.image} alt={featuredProject.title} width={900} height={560} className="rounded-[1.25rem] object-cover" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Projects"
            title="A portfolio shaped by thoughtful execution and measurable outcomes."
            description="Each engagement is focused on quality, shipment speed, and a premium user experience."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 shadow-[0_18px_45px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                <div className="overflow-hidden p-3">
                  <Image src={project.image} alt={project.title} width={700} height={420} className="h-48 w-full rounded-[1.25rem] object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="px-6 pb-8">
                  <h3 className="text-xl font-semibold text-zinc-950">{project.title}</h3>
                  <p className="mt-3 text-base leading-8 text-zinc-600">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-zinc-600">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-zinc-700">{project.impact}</p>
                  <Link href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7a1f2d]">
                    Explore project
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
            <div>
              <SectionHeading
                eyebrow="Skills"
                title="A modern stack with a premium product lens."
                description="The work is grounded in high-quality code, thoughtful systems, and collaborative execution."
              />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {skills.map((group) => (
                <div key={group.title} className="rounded-[1.25rem] border border-zinc-200 bg-zinc-50/80 p-5">
                  <h3 className="text-lg font-semibold text-zinc-950">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Code2 size={14} className="text-[#7a1f2d]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/60 bg-[#fff7f8] p-8 shadow-sm">
              <SectionHeading
                eyebrow="Achievements"
                title="Momentum shaped by quality and consistency."
                description="The outcomes speak as much to product thinking as they do to technical execution."
              />
              <div className="mt-8 space-y-4 text-base leading-8 text-zinc-700">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4">
                    <Trophy className="mt-1 shrink-0 text-[#7a1f2d]" size={18} />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur-xl">
              <SectionHeading
                eyebrow="Certifications"
                title="Continuous growth in craft and product discipline."
                description="A commitment to staying sharp, current, and deeply useful."
              />
              <div className="mt-8 space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title} className="flex items-center justify-between rounded-[1.25rem] border border-zinc-200 bg-zinc-50/80 px-4 py-4">
                    <div>
                      <p className="font-semibold text-zinc-950">{cert.title}</p>
                      <p className="text-sm text-zinc-600">{cert.issuer}</p>
                    </div>
                    <BadgeCheck className="text-[#7a1f2d]" size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl lg:p-12">
            <SectionHeading
              eyebrow="Coding profiles"
              title="A steady practice in code, design, and experimentation."
              description="I keep a public pulse on product thinking through regular technical exploration and learning."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {codingProfiles.map((profileItem) => (
                <Link key={profileItem.label} href={profileItem.url} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-[#7a1f2d]/10 bg-[#fff7f8] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-3 text-[#7a1f2d]">
                    <Code2 size={18} />
                    <span className="text-sm font-semibold uppercase tracking-[0.24em]">{profileItem.label}</span>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-zinc-950">{profileItem.stat}</p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Journey timeline"
            title="A path shaped by product curiosity and thoughtful growth."
            description="Every step has reinforced a clear approach: build refined experiences, then keep improving them."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-[1.5rem] border border-white/60 bg-white/70 p-7 shadow-sm backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7a1f2d]">{item.year}</p>
                <h3 className="mt-3 text-xl font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <SectionHeading
            eyebrow="Gallery"
            title="Selected moments from a product-minded design practice."
            description="A visual record of polished interfaces, thoughtful motion, and systems built to last."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 shadow-sm backdrop-blur-xl">
                <Image src={item.image} alt={item.title} width={700} height={420} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#7a1f2d]">
                    <Camera size={16} />
                    <span className="text-sm font-semibold uppercase tracking-[0.24em]">{item.title}</span>
                  </div>
                  <p className="mt-3 text-base leading-8 text-zinc-600">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-[2rem] border border-white/60 bg-zinc-950 p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)] lg:p-12">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s shape the next product experience together."
              description="If you’re building something ambitious and want an experience that feels premium from the first interaction, I’d love to hear about it."
              tone="light"
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div className="space-y-4 text-lg leading-8 text-zinc-300">
                <p>I enjoy partnering with founders, product teams, and design-led organizations that care deeply about quality.</p>
                <p>Whether you need a launch-ready frontend, a stronger design system, or a polished product narrative, I can help move it forward.</p>
              </div>
              <div className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-base font-medium text-white transition hover:text-[#f4b6c2]">
                  <Mail size={18} />
                  {profile.email}
                </a>
                <a href="https://github.com/pranavm" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base font-medium text-white transition hover:text-[#f4b6c2]">
                  <Code2 size={18} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base font-medium text-white transition hover:text-[#f4b6c2]">
                  <BriefcaseBusiness size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/60 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Pranav M. Crafted for modern product teams.</p>
          <div className="flex items-center gap-4">
            <Link href="#hero" className="transition hover:text-zinc-950">Back to top</Link>
            <Link href="#projects" className="transition hover:text-zinc-950">Selected work</Link>
          </div>
        </footer>
      </main>
    </SmoothScrollProvider>
  );
}
