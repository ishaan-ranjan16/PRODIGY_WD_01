export default function Hero() {
  return (
    <section
      id="home"
      className="noise relative min-h-screen flex items-center px-[5vw] pt-[calc(72px+4rem)] pb-28 overflow-hidden bg-cream"
    >
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 opacity-60 z-0" />

      {/* Warm gradient blobs */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 85% 40%, rgba(232,80,26,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 55% 45% at 5%  75%, rgba(240,165,0,0.07) 0%, transparent 60%)`,
        }}
      />

      {/* Big decorative number */}
      <span
        className="absolute right-[3vw] top-[12%] font-display font-black text-[22vw] leading-none select-none pointer-events-none z-0"
        style={{ color: "rgba(232,80,26,0.045)", letterSpacing: "-0.04em" }}
        aria-hidden="true"
      >
        *
      </span>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[680px]">

        {/* Tag badge */}
        <div className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-accent border border-[rgba(232,80,26,0.3)] bg-[rgba(232,80,26,0.05)] px-[14px] py-[7px] rounded-full mb-8 animate-fadeUp">
          <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse" />
          Next-Gen Platform
        </div>

        {/* Headline */}
        <h1
          className="font-display font-black text-[clamp(3.8rem,9vw,8.5rem)] leading-[0.95] tracking-[-0.02em] mb-8"
          style={{ animationFillMode: "both" }}
        >
          <span className="block text-ink animate-fadeUp" style={{ animationDelay: "0.05s" }}>
            Build
          </span>
          <span className="block text-accent animate-fadeUp" style={{ animationDelay: "0.13s" }}>
            Beyond
          </span>
          <span
            className="block animate-fadeUp"
            style={{
              animationDelay: "0.21s",
              WebkitTextStroke: "2px #1a1a18",
              color: "transparent",
            }}
          >
            Limits
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-[1.05rem] leading-[1.8] text-muted max-w-[460px] mb-12 animate-fadeUp"
          style={{ animationDelay: "0.3s" }}
        >
          A cutting-edge platform engineered for creators who refuse to settle.
          Craft experiences that captivate, convert, and endure.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex gap-4 flex-wrap animate-fadeUp"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#features"
            className="inline-flex items-center gap-2 bg-accent text-white text-[0.82rem] font-bold tracking-[0.08em] uppercase px-8 py-4 rounded-full no-underline transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(232,80,26,0.35)]"
          >
            Explore Features
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-transparent text-ink text-[0.82rem] font-bold tracking-[0.08em] uppercase px-8 py-4 rounded-full border-2 border-[#ddd8cc] no-underline transition-all duration-300 hover:-translate-y-[2px] hover:border-accent hover:text-accent"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* ── Geometric Orb (right side) ── */}
      <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 w-[clamp(200px,34vw,460px)] aspect-square hidden lg:block animate-float z-10">
        <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
          {/* Outer rings */}
          <circle cx="240" cy="240" r="220" stroke="rgba(232,80,26,0.1)"  strokeWidth="1" />
          <circle cx="240" cy="240" r="180" stroke="rgba(232,80,26,0.07)" strokeWidth="1" />
          <circle cx="240" cy="240" r="140" stroke="rgba(232,80,26,0.12)" strokeWidth="1" />
          {/* Hexagon */}
          <polygon
            points="240,55 352,118 352,362 240,425 128,362 128,118"
            stroke="rgba(232,80,26,0.22)"
            strokeWidth="1.5"
            fill="rgba(232,80,26,0.03)"
          />
          <polygon
            points="240,95 328,144 328,336 240,385 152,336 152,144"
            stroke="rgba(240,165,0,0.18)"
            strokeWidth="1"
            fill="none"
          />
          {/* Center glow */}
          <circle cx="240" cy="240" r="55" fill="rgba(232,80,26,0.07)" />
          <circle cx="240" cy="240" r="22" fill="rgba(232,80,26,0.14)" />
          <circle cx="240" cy="240" r="7"  fill="#e8501a" />
          {/* Corner dots */}
          {[
            [240, 55], [352, 118], [352, 362],
            [240, 425], [128, 362], [128, 118],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4.5" fill="#e8501a" opacity="0.8" />
          ))}
          {/* Cross hairs */}
          <line x1="240" y1="165" x2="240" y2="315" stroke="rgba(232,80,26,0.18)" strokeWidth="1" strokeDasharray="5 5" />
          <line x1="165" y1="240" x2="315" y2="240" stroke="rgba(232,80,26,0.18)" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-[5vw] flex items-center gap-3 text-[0.7rem] tracking-[0.16em] uppercase text-muted z-10">
        <span className="w-10 h-px bg-border relative overflow-hidden">
          <span className="absolute inset-0 bg-accent animate-scrollLine" />
        </span>
        Scroll to discover
      </div>
    </section>
  );
}