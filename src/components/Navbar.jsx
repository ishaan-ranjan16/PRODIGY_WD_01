import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "About",    href: "#about"    },
  { label: "Stats",    href: "#stats"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");

  /* scroll → frosted nav */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* active section via IntersectionObserver */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.45 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Desktop / Tablet Nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-[5vw] transition-all duration-500
          ${scrolled
            ? "bg-[rgba(250,248,243,0.88)] backdrop-blur-xl border-b border-[#ddd8cc] shadow-[0_2px_24px_rgba(26,26,24,0.08)]"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        {/* Logo */}
        <a href="#home" className="font-display font-black text-[1.75rem] tracking-tight text-ink no-underline relative group flex-shrink-0">
          Nex<span className="text-accent">us</span>
          <span className="absolute -bottom-[2px] left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full rounded-full" />
        </a>

        {/* Links — desktop */}
        <ul className="hidden md:flex gap-10 mx-auto list-none">
          {NAV_LINKS.map(({ label, href }) => {
            const id       = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`relative text-[0.8rem] font-semibold tracking-[0.1em] uppercase no-underline pb-1 transition-colors duration-300 group
                    ${isActive ? "text-accent" : "text-muted hover:text-ink"}`}
                >
                  {label}
                  {/* underline bar */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-accent rounded-full transition-all duration-400
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-white text-[0.78rem] font-bold tracking-[0.1em] uppercase px-6 py-[10px] rounded-full no-underline flex-shrink-0 relative overflow-hidden group transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(232,80,26,0.35)]"
        >
          <span className="absolute inset-0 bg-[#c43d10] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 z-0 rounded-full" />
          <span className="relative z-10">Get Started</span>
        </a>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] ml-auto p-2 bg-transparent border-none cursor-pointer z-[60]"
        >
          <span className={`block w-[24px] h-[2px] rounded-full transition-all duration-500 ${menuOpen ? "translate-y-[7px] rotate-45 bg-accent" : "bg-ink"}`} />
          <span className={`block w-[24px] h-[2px] rounded-full bg-ink transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[24px] h-[2px] rounded-full transition-all duration-500 ${menuOpen ? "-translate-y-[7px] -rotate-45 bg-accent" : "bg-ink"}`} />
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[rgba(250,248,243,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-opacity duration-500
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="font-display font-black text-[clamp(2.5rem,10vw,4.5rem)] text-muted no-underline transition-all duration-200 hover:text-accent hover:translate-x-2"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 bg-accent text-white text-[0.85rem] font-bold tracking-[0.1em] uppercase px-8 py-3 rounded-full no-underline"
        >
          Get Started
        </a>
      </div>
    </>
  );
}