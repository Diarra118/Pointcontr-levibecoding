import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Palette,
  Brain,
  GraduationCap,
  Github,
  GitBranch,
  Wind,
  Mail,
  ExternalLink,
} from "lucide-react";
import profileImage from "@/assets/profile2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saran Diarra — Développeur Frontend" },
      {
        name: "description",
        content:
          "Portfolio de Saran Diarra, développeur Frontend passionné par la création d'interfaces web modernes, performantes et responsives.",
      },
      {
        property: "og:title",
        content: "Saran Diarra — Développeur Frontend",
      },
      {
        property: "og:description",
        content:
          "Développeur Frontend passionné par la création d'interfaces web modernes, performantes et responsives.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Saran Diarra — Développeur Frontend",
      },
      {
        name: "twitter:description",
        content:
          "Développeur Frontend passionné par la création d'interfaces web modernes, performantes et responsives.",
      },
    ],
  }),
  component: Index,
});

const passions = [
  { label: "Développement Web", icon: Code2 },
  { label: "JavaScript", icon: JSIcon },
  { label: "React", icon: ReactIcon },
  { label: "UI/UX Design", icon: Palette },
  { label: "Intelligence Artificielle", icon: Brain },
  { label: "Apprentissage continu", icon: GraduationCap },
];

const technologies = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#181717" },
  { name: "Tailwind CSS", color: "#06B6D4" },
];

function JSIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6.5 19.5L7.5 18.2C8.3 18.9 9.1 19.3 10.1 19.3C11.1 19.3 11.7 18.8 11.7 17.8V10.5H13.3V17.8C13.3 19.7 12.1 20.7 10.1 20.7C8.5 20.7 7.3 20 6.5 19.5Z"
        fill="#181717"
      />
      <path
        d="M15.3 19.4L16.3 18.2C17.1 18.9 17.9 19.3 18.9 19.3C19.9 19.3 20.5 18.8 20.5 18C20.5 17.1 19.9 16.8 18.6 16.2L18 15.9C16.1 15.1 15 14.2 15 12.3C15 10.5 16.3 9.3 18.5 9.3C19.8 9.3 20.8 9.8 21.6 10.7L20.6 11.8C19.9 11.2 19.3 10.9 18.5 10.9C17.6 10.9 17.1 11.4 17.1 12.1C17.1 12.9 17.6 13.2 18.8 13.7L19.4 14C21.5 14.9 22.6 15.8 22.6 17.8C22.6 19.9 21 20.7 18.9 20.7C17.2 20.7 15.9 20 15.3 19.4Z"
        fill="#181717"
      />
    </svg>
  );
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function TechBadge({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        boxShadow: `0 2px 10px -4px ${color}30`,
      }}
    >
      <span
        className="inline-block h-5 w-5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{name}</span>
    </span>
  );
}

function PassionCard({
  label,
  icon: Icon,
  delay,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  delay: string;
}) {
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 opacity-0 animate-fade-up ${delay}`}
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-sm font-semibold text-foreground">{label}</span>
    </div>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden hero-gradient mesh-dots">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/8 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-hero-glow/15 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 sm:px-8 lg:px-12">
        {/* Profile picture */}
        <div className="opacity-0 animate-scale-in delay-100">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-hero-glow/60 blur-md" />
            <img
              src={profileImage}
              alt="Saran Diarra"
              width={128}
              height={128}
              className="relative h-28 w-28 rounded-full border-4 border-card object-cover shadow-xl sm:h-32 sm:w-32"
            />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mt-8 text-center font-display text-4xl font-extrabold tracking-tight text-foreground opacity-0 animate-fade-up delay-200 sm:text-5xl lg:text-6xl">
          Bonjour, je suis{" "}
          <span className="bg-gradient-to-r from-primary to-hero-glow bg-clip-text text-transparent">
            Saran Diarra
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl text-center text-lg font-medium leading-snug text-muted-foreground opacity-0 animate-fade-up delay-300 sm:text-xl">
          Développeur Frontend passionné par la création d'interfaces web modernes,
          performantes et responsives.
        </p>

        {/* Bio paragraph */}
        <p className="mt-6 max-w-3xl text-center text-base leading-relaxed text-foreground/80 opacity-0 animate-fade-up delay-400 sm:text-lg">
          Depuis que j'ai découvert le développement web, j'ai été fasciné par la
          capacité à transformer des idées en expériences interactives et accessibles.
          J'aime relever de nouveaux défis techniques, explorer les dernières
          technologies du web et concevoir des interfaces qui allient esthétique,
          performance et expérience utilisateur. Mon apprentissage est continu :
          chaque projet est une opportunité de progresser et d'affiner mon savoir-faire.
        </p>

        {/* Passions */}
        <div className="mt-10 w-full max-w-3xl opacity-0 animate-fade-up delay-500">
          <h2 className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Mes passions
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {passions.map((passion, index) => (
              <PassionCard
                key={passion.label}
                label={passion.label}
                icon={passion.icon}
                delay={`delay-${(index + 6) * 100}`}
              />
            ))}
          </div>
        </div>

        {/* Objective */}
        <div className="mt-10 max-w-3xl rounded-3xl border border-primary/10 bg-primary/5 px-6 py-6 text-center opacity-0 animate-fade-up delay-800 backdrop-blur-sm sm:px-10 sm:py-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Mon objectif
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90 sm:text-lg">
            Mon objectif est de devenir un développeur Frontend professionnel capable
            de concevoir des applications web modernes, rapides, accessibles et
            intuitives en utilisant les meilleures technologies du web.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up delay-800 sm:flex-row sm:gap-5">
          <Button
            asChild
            size="lg"
            className="group rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
          >
            <a href="mailto:saran.diarra@example.com">
              <Mail className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
              Me contacter
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground"
          >
            <a
              href="https://github.com/sarandiarra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Voir mon GitHub
              <ExternalLink className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* Technologies */}
        <div className="mt-14 w-full max-w-3xl opacity-0 animate-fade-up delay-800">
          <h2 className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Technologies
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((tech) => (
              <TechBadge key={tech.name} {...tech} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground opacity-0 animate-fade-in delay-800">
          © 2026 Saran Diarra — Développeur Frontend.
        </footer>
      </div>
    </main>
  );
}
