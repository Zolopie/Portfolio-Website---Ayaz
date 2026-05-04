import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/60">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Contact</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
            Let's build something
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to junior developer roles, collaborations and freelance
            projects. The fastest way to reach me is by email.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-smooth shadow-glow"
          >
            <Mail className="h-4 w-4" /> hello@example.com
          </a>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:bg-secondary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:bg-secondary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <footer className="mt-24 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alex Morgan. Built with React & Tailwind.
        </footer>
      </div>
    </section>
  );
};

export default Contact;
