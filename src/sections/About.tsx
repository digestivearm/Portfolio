import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { about, highlights } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <SectionHeading eyebrow="About" title="Engineering systems that scale" />
      <div className="grid gap-8 md:grid-cols-5">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 text-lg leading-relaxed text-muted-foreground"
        >
          {about}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2"
        >
          <div className="glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Focus areas</div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground/90"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
