const LINKS = ["Privacy", "Terms", "Twitter(X)", "GitHub"];

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-border px-[5vw] py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
      {/* Brand */}
      <a href="#home" className="font-display font-black text-[1.4rem] tracking-tight text-ink no-underline">
        Nex<span className="text-accent">us</span>
      </a>

      {/* Links */}
      <div className="flex gap-7">
        {LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-muted no-underline transition-colors duration-200 hover:text-accent"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-[0.78rem] text-muted">
        © 2026 <strong className="text-inklt font-semibold">Nexus</strong>. All rights reserved.
      </p>
    </footer>
  );
}