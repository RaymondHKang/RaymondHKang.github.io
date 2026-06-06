import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-16 sm:py-20">
      <div className="card p-8 text-center sm:p-12">
        <h2 className="text-2xl font-semibold sm:text-3xl">Get in touch</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Open to full-time roles, internships, and interesting collaborations.
          The fastest way to reach me is email or LinkedIn.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${site.email}`} className="btn-primary">
            Email me
          </a>
          <a
            href={site.social.linkedin}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
