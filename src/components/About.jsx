export default function About() {
  return (
    <section
      id="about"
      className="px-[5vw] py-[8rem] bg-cream grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
    >
      {/* ── Spinning rings visual ── */}
      <div className="relative aspect-square max-w-[420px] mx-auto w-full order-2 lg:order-1">
        {/* Background circle fill */}
        <div className="absolute inset-[10%] rounded-full bg-[rgba(232,80,26,0.04)]" />

        {/* Ring 1 — slow */}
        <div className="absolute inset-0 rounded-full border border-[rgba(232,80,26,0.18)] animate-spinSlow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(232,80,26,0.6)]" />
        </div>
        {/* Ring 2 — medium reverse */}
        <div className="absolute inset-[14%] rounded-full border border-[rgba(240,165,0,0.2)] animate-spinRev">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent2 shadow-[0_0_8px_rgba(240,165,0,0.6)]" />
        </div>
        {/* Ring 3 — fast */}
        <div className="absolute inset-[29%] rounded-full border border-[rgba(232,80,26,0.25)] animate-spinFast">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(232,80,26,0.6)]" />
        </div>
        {/* Center core */}
        <div
          className="absolute inset-[44%] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,80,26,0.2) 0%, transparent 70%)" }}
        />
        {/* Center dot */}
        <div className="absolute inset-[49%] rounded-full bg-accent shadow-[0_0_16px_rgba(232,80,26,0.5)]" />

        {/* Corner label */}
        <span className="absolute -bottom-6 right-0 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-muted">
          Core Engine v2.0
        </span>
      </div>

      {/* ── Text ── */}
      <div className="order-1 lg:order-2">
        <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-accent mb-4">
          ✦ Our Mission
        </p>
        <h2 className="font-display font-black text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink mb-7">
          Built by Builders,<br />For Builders
        </h2>
        <p className="text-[0.95rem] text-muted leading-[1.85] mb-5">
          Nexus was born from frustration with tools that get in the way. We stripped
          everything unnecessary and engineered a platform where complexity becomes capability.
        </p>
        <p className="text-[0.95rem] text-muted leading-[1.85] mb-10">
          Every decision — from architecture to UI — is made with one question:{" "}
          <em className="text-inklt not-italic font-semibold border-b border-dashed border-accent">
            does this make the builder faster?
          </em>
        </p>

        {/* Pills row */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["Reliable", "Scalable", "Secure", "Fast", "Open"].map((tag) => (
            <span
              key={tag}
              className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-accent border border-[rgba(232,80,26,0.25)] bg-[rgba(232,80,26,0.05)] px-4 py-[5px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent text-white text-[0.82rem] font-bold tracking-[0.08em] uppercase px-8 py-4 rounded-full no-underline transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(232,80,26,0.35)]"
        >
          Join the Waitlist
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}