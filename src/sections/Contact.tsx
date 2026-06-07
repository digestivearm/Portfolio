import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something solid"
        description="Have a backend problem worth solving? Send a note — I read everything."
      />
      <div className="grid gap-6 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-2xl glass p-4 transition-colors hover:bg-white/[0.08]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-gradient text-white">
              <Mail size={16} />
            </span>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Email</div>
              <div className="text-sm">{profile.email}</div>
            </div>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl glass p-4 transition-colors hover:bg-white/[0.08]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-gradient text-white">
              <Github size={16} />
            </span>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">GitHub</div>
              <div className="text-sm">@digestivearm</div>
            </div>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl glass p-4 transition-colors hover:bg-white/[0.08]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-gradient text-white">
              <Linkedin size={16} />
            </span>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">LinkedIn</div>
              <div className="text-sm">in/shrey384</div>
            </div>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3500);
            (e.currentTarget as HTMLFormElement).reset();
          }}
          className="md:col-span-3 glass-strong rounded-2xl p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">Name</span>
              <input
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none transition-colors focus:border-violet-400/60 focus:bg-white/[0.08]"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">Email</span>
              <input
                required
                type="email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none transition-colors focus:border-violet-400/60 focus:bg-white/[0.08]"
                placeholder="you@domain.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">Message</span>
            <textarea
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm outline-none transition-colors focus:border-violet-400/60 focus:bg-white/[0.08]"
              placeholder="Tell me about your project..."
            />
          </label>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">I usually reply within 24 hours.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-gradient px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-900/30 transition-transform hover:scale-[1.03]"
            >
              {sent ? <><Check size={16} /> Sent</> : <><Send size={16} /> Send message</>}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
