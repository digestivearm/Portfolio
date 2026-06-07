import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6 pb-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <div className="flex items-center gap-2">
          <a
            aria-label="Email"
            href={`mailto:${profile.email}`}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <Mail size={16} />
          </a>
          <a
            aria-label="GitHub"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <Github size={16} />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
