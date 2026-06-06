import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">Skills</h2>
        <p className="mt-3 text-muted">
          Technologies and practices I use regularly in personal and professional
          work.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="card p-6">
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-background px-3 py-1 text-sm text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
