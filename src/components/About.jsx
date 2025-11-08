import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <p className="text-white/75 leading-relaxed">
            I design and build immersive web experiences that blend performance, accessibility, and visual storytelling. My toolkit spans React, Tailwind, and 3D on the web. I love shaping ideas into polished products that feel fast and intentional.
          </p>
          <p className="text-white/75 leading-relaxed">
            When I’m not coding, I’m exploring motion design, experimenting with shaders, or sketching interface concepts.
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-3"
        >
          {["3D interactive hero sections", "High-performance frontends", "Design systems & accessibility", "End-to-end product delivery"].map((item) => (
            <li key={item} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
              <span className="text-white/90">{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
