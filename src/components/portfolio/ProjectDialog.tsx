import { ExternalLink, Github, Lightbulb, Sparkles, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Project } from "./projectsData";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ProjectDialog = ({ project, open, onOpenChange }: Props) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border p-0 rounded-2xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-secondary">
          <img
            src={project.cover}
            alt={`${project.title} preview`}
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute left-6 bottom-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-background/70 backdrop-blur px-2.5 py-1 text-xs text-foreground">
              {project.year}
            </span>
            <span className="rounded-full border border-border bg-background/70 backdrop-blur px-2.5 py-1 text-xs text-foreground">
              {project.role}
            </span>
            <span className="rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-xs text-primary">
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <DialogHeader className="text-left space-y-1">
            <DialogTitle className="text-2xl md:text-3xl font-semibold tracking-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-primary text-sm">
              {project.tagline}
            </DialogDescription>
          </DialogHeader>

          {/* Overview */}
          <div className="mt-6 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            {project.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Problem & Solution */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-secondary/40 p-5">
              <div className="flex items-center gap-2 text-foreground">
                <Target className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-semibold">Problem</h4>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 p-5">
              <div className="flex items-center gap-2 text-foreground">
                <Lightbulb className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-semibold">Solution</h4>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-border bg-background/40 p-4 text-center"
              >
                <div className="text-base md:text-lg font-semibold text-foreground">
                  {h.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
                  {h.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-semibold text-foreground">Key features</h4>
            </div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery (only if multiple) */}
          {project.gallery.length > 1 && (
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-foreground">Screens</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {project.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-border bg-secondary"
                  >
                    <img
                      src={src}
                      alt={`${project.title} screen ${i + 1}`}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-foreground">Tech stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-smooth shadow-glow"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-smooth"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
