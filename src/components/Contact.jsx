import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Let’s build something futuristic
        </motion.h2>
        <p className="text-white/70 mt-3">
          I’m open to freelance work, collaborations, and full-time opportunities.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 text-slate-950 font-semibold px-6 py-3 hover:bg-cyan-400 transition w-full sm:w-auto"
          >
            Email me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 hover:bg-white/10 transition w-full sm:w-auto"
          >
            See my work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
