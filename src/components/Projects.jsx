import { projects } from "@/data/site";

function ProjectLinks({ liveUrl, repoUrl }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {liveUrl ? (
        <a
          href={liveUrl}
          className="text-sm font-medium text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo
        </a>
      ) : null}
      {repoUrl ? (
        <a
          href={repoUrl}
          className="text-sm font-medium text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">Projects</h2>
        <p className="mt-3 text-muted">
          Selected work that highlights how I approach problems, write code, and
          ship results.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="card flex h-full flex-col p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.period ? (
                <span className="shrink-0 text-sm text-muted">{project.period}</span>
              ) : null}
            </div>
            <p className="mt-3 flex-1 text-muted">{project.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    •
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-card-border px-3 py-1 text-xs font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <ProjectLinks liveUrl={project.liveUrl} repoUrl={project.repoUrl} />
          </article>
        ))}
      </div>
    </section>
  );
}
