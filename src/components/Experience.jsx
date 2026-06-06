import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
        <p className="mt-3 text-muted">
          Professional, research, and teaching roles from my résumé.
        </p>
      </div>

      <div className="space-y-6">
        {experience.map((role) => (
          <article key={role.title + role.period} className="card p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <p className="mt-1 text-accent">{role.organization}</p>
                <p className="text-sm text-muted">{role.location}</p>
              </div>
              <p className="mt-2 shrink-0 text-sm font-medium text-muted sm:mt-0">
                {role.period}
              </p>
            </div>

            <ul className="mt-5 space-y-2 text-muted">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    •
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
