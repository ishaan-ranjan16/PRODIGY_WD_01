import { useRef, useEffect, useState } from "react";

const STATS = [
  { num: "99.99%", label: "Uptime SLA",          desc: "Guaranteed availability" },
  { num: "2M+",    label: "Active Developers",    desc: "Across 120 countries"    },
  { num: "8ms",    label: "Avg. Latency",         desc: "Global P99 response time" },
  { num: "60+",    label: "Edge Regions",         desc: "Worldwide infrastructure" },
];

function StatCard({ num, label, desc, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative bg-white border border-border rounded-2xl p-8 text-left group hover:border-[rgba(232,80,26,0.3)] hover:shadow-[0_6px_30px_rgba(232,80,26,0.1)] transition-all duration-400 overflow-hidden"
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ${index * 0.1}s ease, transform 0.6s ${index * 0.1}s ease, box-shadow 0.4s ease`,
      }}
    >
      <span className="block font-display font-black text-[clamp(2.8rem,6vw,4.5rem)] leading-none tracking-tight text-accent mb-2">
        {num}
      </span>
      <div className="text-[0.82rem] font-bold tracking-[0.08em] uppercase text-ink mb-1">{label}</div>
      <div className="text-[0.8rem] text-muted">{desc}</div>

      {/* bottom bar */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent rounded-b-xl transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="px-[5vw] py-[8rem] bg-paper">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-accent mb-3">
            ✦ By the Numbers
          </p>
          <h2 className="font-display font-black text-[clamp(2.6rem,6vw,4.5rem)] leading-[1] tracking-tight text-ink">
            Proof in the Metrics
          </h2>
        </div>
        <p className="text-[0.92rem] text-muted leading-[1.8] max-w-[300px]">
          Numbers that speak for themselves — no marketing spin required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}