import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="section-shell py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          Hi, I&apos;m <span className="gradient-text">{site.name}</span>
        </h1>
        <p className="mt-6 text-lg text-muted sm:text-xl">{site.tagline}</p>
        <p className="mt-4 max-w-2xl text-base text-muted">{site.bio}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View projects
          </a>
          <a href={site.social.linkedin} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.social.github} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href={site.resumeUrl}
            className="btn-secondary sm:hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
