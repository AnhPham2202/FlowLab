export function Overview() {
    return (
        <section
            className="
        min-h-screen
        pt-24
        px-6 md:px-10
        bg-[radial-gradient(60%_50%_at_70%_10%,#eef2ff_0%,transparent_60%),linear-gradient(180deg,#f9fafb,#f3f4f6)]
      "
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* LEFT */}
                <div>
                    {/* Tech badges */}
                    <div className="flex gap-2 mb-5">
                        {["React", "TypeScript", "Tailwind"].map((tech) => (
                            <span
                                key={tech}
                                className="
                  px-3 py-1 rounded-full text-sm font-medium
                  bg-indigo-50 text-indigo-600
                  border border-indigo-100
                "
                            >
                {tech}
              </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1
                        className="
              text-4xl md:text-6xl
              font-extrabold leading-tight
              text-[var(--text-primary)]
            "
                    >
                        Design systems.
                        <br />
                        <span
                            className="
                gradient-primary
                bg-clip-text text-transparent
              "
                        >
              Understand deeply.
            </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="
              mt-4 max-w-xl
              text-[var(--text-secondary)]
            "
                    >
                        FlowLab is an interactive playground to visualize and experiment
                        with system design concepts commonly asked in interviews — Kafka,
                        Spring Security, and distributed architectures.
                    </p>

                    {/* Actions */}
                    <div className="mt-7 flex gap-3">
                        <a
                            href="/playground"
                            className="
                px-6 py-3 rounded-xl
                font-semibold text-white
                gradient-primary
                gradient-primary-hover
                shadow-primary
                transition
              "
                        >
                            Get started
                        </a>

                        <button
                            className="
                px-6 py-3 rounded-xl
                font-semibold
                bg-[var(--bg-card)]
                text-[var(--text-secondary)]
                border border-[var(--border-soft)]
                shadow-primary
                hover:bg-slate-50
                transition
              "
                        >
                            Learn more
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div
                    className="
            h-[420px]
            rounded-2xl
            bg-[var(--bg-card)]
            border border-[var(--border-light)]
            shadow-[var(--shadow-card)]
            flex items-center justify-center
            text-[var(--text-muted)]
          "
                >
                    Playground Preview
                </div>
            </div>
        </section>
    );
}
