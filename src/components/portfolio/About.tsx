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
             I’m a full-stack developer focused on building practical, real-world applications that solve everyday business problems. My work includes systems like CRM platforms, workforce management apps, and AI-inspired tools that help users make better decisions.
            </p>
            <p>
             I primarily work with JavaScript, using Node.js and Express on the backend, and modern frontend technologies to create clean, user-friendly interfaces. I enjoy designing complete systems from backend logic and APIs to frontend experience with a strong focus on simplicity, usability, and maintainability
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
