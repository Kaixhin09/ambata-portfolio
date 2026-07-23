export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-line bg-surface px-8 py-14 text-center sm:px-16">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">Next level</p>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl sm:text-5xl font-semibold text-paper">
          Got a project in mind? Let's build it.
        </h2>
        <p className="mt-4 font-body text-sm text-muted">
          Based in Silang, Cavite — open to internships, freelance, and full-time roles.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jval0914@gmail.com"
            className="rounded-full bg-amber px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
          >
            jval0914@gmail.com
          </a>
          <a>
            0995 301 0383
          </a>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Jhay Vic Ambata</p>
        <a
          href="https://github.com/Kaixhin09"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-paper"
        >
          github.com/Kaixhin09
        </a>
      </footer>
    </section>
  );
}