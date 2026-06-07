import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A few systems and tools I've built that I'm proud of."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.08]"
          >
            <div
              aria-hidden
              className="absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, #A855F7 35%, transparent), transparent 60%)",
                mask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                WebkitMask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
              }}
            />
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                {p.github && (
                  <a
                    aria-label={`${p.name} on GitHub`}
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg p-2 hover:bg-white/10 hover:text-foreground"
                  >
                    <Github size={16} />
                  </a>
                )}
                {p.demo && (
                  <a
                    aria-label={`${p.name} live demo`}
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg p-2 hover:bg-white/10 hover:text-foreground"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {p.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
