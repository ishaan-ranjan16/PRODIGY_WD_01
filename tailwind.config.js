/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["'Sora'",     "sans-serif"],
        display: ["'Playfair Display'", "serif"],
      },
      colors: {
        cream:   "#faf8f3",
        paper:   "#f2ede3",
        ink:     "#1a1a18",
        inklt:   "#3d3d38",
        muted:   "#8a8778",
        accent:  "#e8501a",
        accent2: "#f0a500",
        border:  "#ddd8cc",
      },
      animation: {
        fadeUp:       "fadeUp 0.8s ease both",
        float:        "float 7s ease-in-out infinite",
        scrollLine:   "scrollLine 2s linear infinite",
        spinSlow:     "spinSlow 22s linear infinite",
        spinRev:      "spinRev 15s linear infinite reverse",
        spinFast:     "spinFast 9s linear infinite",
        shimmer:      "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%":     { transform: "translateY(-18px) rotate(4deg)" },
        },
        scrollLine: {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(220%)" },
        },
        spinSlow: { from: { transform: "rotate(0deg)"   }, to: { transform: "rotate(360deg)" } },
        spinRev:  { from: { transform: "rotate(360deg)" }, to: { transform: "rotate(0deg)"   } },
        spinFast: { from: { transform: "rotate(0deg)"   }, to: { transform: "rotate(360deg)" } },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
    },
  },
  plugins: [],
};