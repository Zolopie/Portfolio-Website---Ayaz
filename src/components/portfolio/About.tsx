const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border/60">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-primary">About</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              A bit about me
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer who enjoys turning real business
              problems into clean, reliable software. Most of my work sits at
              the intersection of practical web apps and AI-powered tooling —
              from CRMs and workforce apps to assistants that help people work
              smarter.
            </p>
            <p>
              I specialize in building end-to-end products with React on the
              frontend and Node.js on the backend, with a strong eye for UX and
              code maintainability.
            </p>
            <p className="text-foreground/90">
              I'm currently looking for <span className="text-primary">junior developer roles</span> where I can keep
              learning, contribute meaningfully, and ship great products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
