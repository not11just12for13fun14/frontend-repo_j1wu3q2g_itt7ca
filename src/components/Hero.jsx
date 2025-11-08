import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 grid lg:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Futuristic Interfaces for Modern Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg max-w-xl"
          >
            I’m a product-focused developer crafting interactive experiences with 3D, motion, and clean design. Let’s build something that feels alive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold px-5 py-3 hover:bg-cyan-400 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="text-sm text-white/70">
              • Interactive 3D
              <span className="mx-2">•</span>
              Motion-first UI
              <span className="mx-2">•</span>
              Accessible
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {["React", "Three", "Spline", "FastAPI", "Tailwind", "Framer"].map((t) => (
                <div key={t} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white/80">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
