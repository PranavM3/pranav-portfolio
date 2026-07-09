import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  tone = "dark",
}: SectionHeadingProps) {
  const eyebrowClass =
    tone === "light"
      ? "border-white/20 bg-white/10 text-white"
      : "border-[#7a1f2d]/20 bg-[#7a1f2d]/10 text-[#7a1f2d]";
  const titleClass = tone === "light" ? "text-white" : "text-zinc-950";
  const descriptionClass = tone === "light" ? "text-zinc-300" : "text-zinc-600";

  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"}`}>
      <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}>
        {eyebrow}
      </span>
      <div className="flex w-full items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}>
            {title}
          </h2>
          <p className={`mt-3 text-base leading-8 sm:text-lg ${descriptionClass}`}>
            {description}
          </p>
        </div>
        {action ? <div className="hidden sm:block">{action}</div> : null}
      </div>
    </div>
  );
}
