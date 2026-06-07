import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline of building"
      />
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400/40 via-violet-500/20 to-transparent"
        />
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-10 sm:pl-14"
            >
              <span className="absolute left-1 sm:left-3 top-5 h-4 w-4 rounded-full bg-violet-gradient ring-4 ring-background shadow-[0_0_18px_2px_rgba(168,85,247,0.45)]" />
              <div className="rounded-2xl glass p-6 transition-colors hover:bg-white/[0.08]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {exp.role} <span className="text-muted-foreground font-normal">· {exp.company}</span>
                  </h3>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted-foreground">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
