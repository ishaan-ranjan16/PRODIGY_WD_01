nexus-light/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Features.jsx
        ├── About.jsx
        ├── Stats.jsx
        ├── Contact.jsx
        └── Footer.jsx





nexus-light/
├── index.html              ← UPDATED (anti-flash theme script)
├── package.json
├── vite.config.js
├── tailwind.config.js      ← UPDATED (darkMode: "class" + dark colors)
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx              ← UPDATED (uses useTheme hook)
    ├── index.css            ← UPDATED (dark variants for body/grid/text)
    ├── hooks/
    │   └── useTheme.js       ← NEW
    └── components/
        ├── ThemeToggle.jsx   ← NEW (sun/moon icon button)
        ├── Navbar.jsx        ← UPDATED (toggle placed in nav)
        ├── Hero.jsx          ← UPDATED
        ├── Features.jsx      ← UPDATED
        ├── About.jsx         ← UPDATED
        ├── Stats.jsx         ← UPDATED
        ├── Contact.jsx       ← UPDATED
        └── Footer.jsx        ← UPDATED