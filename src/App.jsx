import Navbar   from "./components/Navbar.jsx";
import Hero     from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import About    from "./components/About.jsx";
import Stats    from "./components/Stats.jsx";
import Contact  from "./components/Contact.jsx";
import Footer   from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-cream text-ink font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
