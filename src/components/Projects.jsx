import { motion } from "framer-motion";
import { Rocket, Globe, Code2 } from "lucide-react";

const items = [
  {
    title: "Realtime 3D Landing",
    desc: "A marketing site with interactive 3D objects and smooth motion.",
    icon: Rocket,
    tags: ["React", "Spline", "Framer"],
  },
  {
    title: "SaaS Dashboard",
    desc: "Analytics dashboard with charts, theming, and role-based access.",
    icon: Globe,
    tags: ["React", "Tailwind", "API"],
  },
  {
    title: "Design System",
    desc: "Reusable components with accessibility and tokens.",
    icon: Code2,
    tags: ["UI", "A11y", "Docs"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="text-white/70 mt-2">A snapshot of things I’ve built recently.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, icon: Icon, tags }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:from-white/10 hover:to-white/[0.06] transition"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="text-white/70 mt-2">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-white/10 bg-black/30 px-2 py-1 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
