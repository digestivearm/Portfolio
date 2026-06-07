import { motion } from "framer-motion";
import { Server, Database, Cloud, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

const icons = [Server, Database, Cloud, Wrench];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="The stack I build with"
        description="Tools and technologies I reach for across backend, data, infrastructure, and developer workflows."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 0% 0%, color-mix(in oklab, #A855F7 22%, transparent), transparent 60%)",
                }}
              />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-gradient text-white">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
