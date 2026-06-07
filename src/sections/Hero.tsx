import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-50 animate-aurora"
          style={{ background: "radial-gradient(closest-side, #8B5CF6, transparent 70%)" }} />
        <div className="absolute top-20 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-40 animate-aurora"
          style={{ background: "radial-gradient(closest-side, #A855F7, transparent 70%)", animationDelay: "-5s" }} />
        <div className="absolute bottom-0 left-0 h-[360px] w-[460px] rounded-full blur-3xl opacity-40 animate-aurora"
          style={{ background: "radial-gradient(closest-side, #7C3AED, transparent 70%)", animationDelay: "-9s" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
          Available for backend & system design work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-5xl sm:text-7xl md:text-8xl font-semibold leading-[1.02]"
        >
          {profile.name.split(" ")[0]}
          <br />
          <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground/90 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
         className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-violet-gradient px-5 py-3 text-sm font-medium text-white shadow-xl shadow-violet-900/30 transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10"
          >
            <Mail size={16} /> Contact Me
          </a>
           <a
            href="/resume.txt"
            download="Shrey-Prajapati-Resume.txt"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10"
          >
            <Download size={16} /> Download Resume
          </a>

          <div className="ml-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} /> {profile.location}
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
