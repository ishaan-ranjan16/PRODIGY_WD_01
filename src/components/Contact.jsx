import { useState } from "react";

export default function Contact() {
  const [sent,   setSent]   = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    setSent(true);
    setFields({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  }

  const inputCls =
    "w-full bg-white border border-border rounded-xl px-5 py-[14px] text-ink text-[0.9rem] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(232,80,26,0.12)] placeholder:text-muted font-sans";

  return (
    <section id="contact" className="px-[5vw] py-[8rem] bg-cream">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left: copy */}
        <div>
          <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-accent mb-4">
            ✦ Get in Touch
          </p>
          <h2 className="font-display font-black text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink mb-6">
            Ready to Build<br />Something Great?
          </h2>
          <p className="text-[0.95rem] text-muted leading-[1.85] mb-10">
            Drop us a line and we'll get back within 24 hours. Whether you're starting fresh
            or scaling fast — we're ready.
          </p>

          {/* Contact info pills */}
          <div className="flex flex-col gap-4">
            {[
              { icon: "📧", label: "admin@nexus.io"       },
              { icon: "📍", label: "Bengaluru, India"    },
              { icon: "⏱️", label: "Response within next 24 hrs" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-[0.88rem] text-inklt font-medium">
                <span className="w-9 h-9 rounded-full bg-[rgba(232,80,26,0.08)] flex items-center justify-center text-[1rem]">
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-[0_4px_24px_rgba(26,26,24,0.06)]">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
              <span className="text-[3rem]">✅</span>
              <p className="font-display font-bold text-[1.6rem] text-ink">Message Sent!</p>
              <p className="text-[0.9rem] text-muted">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className={inputCls}
                />
                <input
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className={inputCls}
                />
              </div>
              <textarea
                name="message"
                value={fields.message}
                onChange={handleChange}
                placeholder="Tell us about your project…"
                rows={5}
                className={`${inputCls} resize-none`}
              />
              <button
                onClick={handleSubmit}
                className="self-start inline-flex items-center gap-2 bg-accent text-white text-[0.82rem] font-bold tracking-[0.08em] uppercase px-8 py-4 rounded-full border-none cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(232,80,26,0.35)]"
              >
                Send Message
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}