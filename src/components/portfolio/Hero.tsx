import { ArrowRight, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for junior developer roles
          </div>
          <h1
            className="fade-in-up mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-gradient"
            style={{ animationDelay: "80ms" }}
          >
            Alex Morgan
          </h1>
          <p
            className="fade-in-up mt-4 text-lg md:text-xl text-foreground/90"
            style={{ animationDelay: "160ms" }}
          >
            Full-Stack Developer
          </p>
          <p
            className="fade-in-up mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
            style={{ animationDelay: "220ms" }}
          >
            I build business applications and AI-powered tools — focused on
            clean code, great UX, and shipping useful software.
          </p>

          <div
            className="fade-in-up mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-smooth shadow-glow"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-smooth"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-smooth"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
