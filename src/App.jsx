import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Built with care — Interactive 3D portfolio
      </footer>
    </div>
  );
}

export default App;
