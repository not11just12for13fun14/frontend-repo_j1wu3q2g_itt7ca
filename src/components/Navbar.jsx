import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          <span className="text-cyan-400">/&gt;</span> MyPortfolio
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition"
            aria-label="Email"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/15 text-white/90 hover:text-white hover:bg-white/10 transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/15 text-white/90 hover:text-white hover:bg-white/10 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
