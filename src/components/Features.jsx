import { useRef, useEffect, useState } from "react";

const CARDS = [
  { icon: "⚡", title: "Hyper Performance",   desc: "Sub-10ms response times with distributed edge infrastructure spanning 60+ regions globally." },
  { icon: "🛡️", title: "Zero-Trust Security",  desc: "End-to-end encryption, biometric auth, and real-time threat intelligence built into every layer." },
  { icon: "🔮", title: "AI-Powered Insights",  desc: "Predictive analytics that surface opportunities before they become obvious to everyone else." },
  { icon: "🧩", title: "Modular Design",        desc: "Compose your stack from 200+ integrations. No bloat, no compromise — only what you need." },
  { icon: "🌐", title: "Global CDN",            desc: "Static assets served from the closest edge node. Your users never notice latency again." },
  { icon: "📈", title: "Infinite Scalability",  desc: "From side project to enterprise — architecture that scales without re-architecture." },
];

function FeatureCard({ icon, title, desc, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative bg-white border border-border rounded-2xl p-8 group cursor-default overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(232,80,26,0.12)] hover:-translate-y-1 hover:border-[rgba(232,80,26,0.3)]"
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ${index * 0.08}s ease, transform 0.6s ${index * 0.08}s ease, box-shadow 0.4s ease, border-color 0.4s ease`,
      }}
    >
      {/* Decorative corner accent */}
      <span className="absolute top-0 right-0 w-16 h-16 rounded-bl-[3rem] bg-[rgba(232,80,26,0.05)] transition-all duration-500 group-hover:bg-[rgba(232,80,26,0.1)]" />

      <span className="block text-[2rem] mb-5">{icon}</span>
      <h3 className="font-display font-bold text-[1.35rem] text-ink mb-3 transition-colors duration-300 group-hover:text-accent">
        {title}
      </h3>
      <p className="text-[0.88rem] text-muted leading-[1.75]">{desc}</p>

      {/* bottom accent line */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent rounded-b-xl transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="px-[5vw] py-[8rem] bg-paper">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-accent mb-3">
            ✦ Core Capabilities
          </p>
          <h2 className="font-display font-black text-[clamp(2.6rem,6vw,4.5rem)] leading-[1] tracking-tight text-ink">
            Why Nexus<br />Stands Apart
          </h2>
        </div>
        <p className="text-[0.92rem] text-muted leading-[1.8] max-w-[340px]">
          Every feature is crafted with obsessive attention to detail — because the tools you use shape the work you produce.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CARDS.map((card, i) => (
          <FeatureCard key={card.title} {...card} index={i} />
        ))}
      </div>
    </section>
  );
}