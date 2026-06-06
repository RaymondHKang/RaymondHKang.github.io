import { certifications, education, site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <div className="card p-8 sm:p-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
        <p className="mt-4 max-w-3xl text-muted">{site.bio}</p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-muted">Location</dt>
            <dd className="mt-1 text-foreground">{site.location}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">Email</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="text-accent hover:underline"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted">Languages</dt>
            <dd className="mt-1 text-foreground">{site.languages.join(", ")}</dd>
          </div>
        </dl>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={item.degree} className="border-l-2 border-accent/40 pl-4">
                <p className="font-medium text-foreground">{item.degree}</p>
                <p className="text-sm text-muted">{item.school}</p>
                <p className="text-sm text-muted">
                  {item.period}
                  {item.detail ? ` · ${item.detail}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-card-border px-3 py-1 text-sm text-foreground"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
