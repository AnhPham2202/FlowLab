export function Overview() {
  return (
    <section className="min-h-screen bg-[radial-gradient(60%_50%_at_70%_10%,#eef2ff_0%,transparent_60%),linear-gradient(180deg,#f9fafb,#f3f4f6)] px-6 pt-24 md:px-10">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* LEFT */}
        <div>
          {/* Tech badges */}
          <div className="mb-5 flex gap-2">
            {['React', 'TypeScript', 'Tailwind'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-6xl">
            Design systems.
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Understand deeply.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
            FlowLab is an interactive playground to visualize and experiment
            with system design concepts commonly asked in interviews — Kafka,
            Spring Security, and distributed architectures.
          </p>

          {/* Actions */}
          <div className="mt-7 flex gap-3">
            <a
              href="/playground"
              className="gradient-primary gradient-primary-hover rounded-xl px-6 py-3 font-semibold text-white shadow-primary transition"
            >
              Get started
            </a>

            <button className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-card)] px-6 py-3 font-semibold text-[var(--text-secondary)] shadow-primary transition hover:bg-slate-50">
              Learn more
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex h-[420px] items-center justify-center rounded-2xl border border-[var(--border-light)] bg-[var(--bg-card)] text-[var(--text-muted)] shadow-[var(--shadow-card)]">
          Playground Preview
        </div>
      </div>
    </section>
  );
}
