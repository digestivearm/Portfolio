import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

const MapInner = lazy(() => import("@/components/MapInner"));

export function LocationMap() {
  return (
    <section id="location" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl glass-strong"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-gradient">
              <MapPin size={16} />
            </span>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Location</div>
              <div className="text-sm font-medium">Based in {profile.location}</div>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">Open to remote opportunities worldwide</span>
        </div>
        <div className="h-[420px] w-full bg-card">
          <Suspense fallback={<div className="h-full w-full bg-white/5 animate-pulse" />}>
            <MapInner />
          </Suspense>
        </div>
      </motion.div>
    </section>
  );
}
