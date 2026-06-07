import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { motion, useDragControls } from "framer-motion";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";
import { profile, skillGroups, projects, experience } from "@/data/portfolio";

type Line = { type: "in" | "out" | "banner"; content: string };
const LOGO_ASCII = String.raw`
  ███████╗  ██████╗
  ██╔════╝  ██╔══██╗
  ███████╗  ██████╔╝     Shrey Prajapati
  ╚════██║  ██╔═══╝      Backend Engineer
  ███████║  ██║          ${profile.location}
  ╚══════╝  ╚═╝
`;
const BANNER = `${LOGO_ASCII}
Welcome to shrey@portfolio — interactive shell.
Type "help" to see available commands.`;

const COMMANDS: Record<string, () => string> = {
  help: () =>
    [
      "Available commands:",
      "  help        Show this list",
      "  about       Who I am",
      "  skills      Tech I work with",
      "  projects    Featured projects",
      "  experience  Work history",
      "  contact     How to reach me",
      "  socials     GitHub / LinkedIn",
      "  resume      Download my resume",
      "  clear       Clear the terminal",
    ].join("\n"),
  about: () =>
    `${profile.name} — ${profile.title}\n${profile.tagline}`,
  skills: () =>
    skillGroups
      .map((g) => `${g.title.padEnd(12)} ${g.skills.join(", ")}`)
      .join("\n"),
  projects: () =>
    projects
      .map(
        (p) =>
          `• ${p.name} — ${p.description}\n  stack: ${p.stack.join(", ")}\n  ${p.github}`,
      )
      .join("\n\n"),
  experience: () =>
    experience
      .map(
        (e) =>
          `${e.role} @ ${e.company}  (${e.duration})\n  - ${e.achievements.join("\n  - ")}`,
      )
      .join("\n\n"),
  contact: () => `Email: ${profile.email}\nLocation: ${profile.location}`,
  socials: () => `GitHub:   ${profile.github}\nLinkedIn: ${profile.linkedin}`,
  resume: () => {
    if (typeof window !== "undefined") {
      const a = document.createElement("a");
      a.href = "/resume.txt";
      a.download = "Shrey-Prajapati-Resume.txt";
      a.click();
    }
    return "Downloading resume…";
  },
};

interface TerminalProps {
  isOpen: boolean;
  isMinimized: boolean;
  onClose: () => void;
  onMinimize: () => void;
}

export function Terminal({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
}: TerminalProps) {
  const [lines, setLines] = useState<Line[]>([
    { type: "banner", content: BANNER },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragControls = useDragControls();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) {
      setLines((l) => [...l, { type: "in", content: "" }]);
      return;
    }
    setHistory((h) => [...h, cmd]);
    setHIndex(-1);
    if (cmd === "clear" || cmd === "cls") {
      setLines([{ type: "banner", content: BANNER }]);
      return;
    }
    const fn = COMMANDS[cmd.toLowerCase()];
    const out = fn
      ? fn()
      : `command not found: ${cmd}\nType "help" for a list of commands.`;
    setLines((l) => [
      ...l,
      { type: "in", content: cmd },
      { type: "out", content: out },
    ]);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const ni = hIndex === -1 ? history.length - 1 : Math.max(0, hIndex - 1);
      setHIndex(ni);
      setInput(history[ni]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIndex === -1) return;
      const ni = hIndex + 1;
      if (ni >= history.length) {
        setHIndex(-1);
        setInput("");
      } else {
        setHIndex(ni);
        setInput(history[ni]);
      }
    }
  };

  const variants = {
    active: {
      scale: 1,
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: { type: "spring", damping: 22, stiffness: 180 },
    },
    inactive: {
      scale: 0.1,
      opacity: 0,
      y: 350,
      pointerEvents: "none" as const,
      transition: { type: "spring", damping: 25, stiffness: 150 },
    },
  };

  return (
    <motion.div
      layout
      drag={true}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      variants={variants}
      animate={isMinimized ? "inactive" : "active"}
      initial="inactive"
      onClick={() => inputRef.current?.focus()}
      className={`flex flex-col overflow-hidden rounded-2xl bg-neutral-950 shadow-2xl border border-white/10 select-none ${
        isMaximized
          ? "fixed top-4 left-4 sm:top-10 sm:left-10 w-[calc(100vw-32px)] h-[calc(100vh-32px)] sm:w-[calc(100vw-80px)] sm:h-[calc(100vh-80px)] z-50 lg:resize min-w-[320px] min-h-[200px]"
          : "lg:absolute lg:top-4 lg:right-6 lg:w-[480px] lg:h-[380px] w-full mt-8 lg:mt-0 relative h-[380px] z-30 lg:resize min-w-[320px] min-h-[200px]"
      }`}
    >
      {/* Title bar */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        onDoubleClick={() => setIsMaximized(!isMaximized)}
        className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/5 select-none cursor-grab active:cursor-grabbing"
      >
        {/* Left window control buttons */}
        <div className="flex items-center gap-2">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="group/btn h-3 w-3 rounded-full bg-[#ff5f57] flex items-center justify-center cursor-pointer active:brightness-90 transition-all border-none outline-none"
            title="Close"
          >
            <X className="h-1.5 w-1.5 opacity-0 group-hover/btn:opacity-100 transition-opacity text-red-950 font-bold" />
          </button>
          {/* Minimize button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="group/btn h-3 w-3 rounded-full bg-[#febc2e] flex items-center justify-center cursor-pointer active:brightness-90 transition-all border-none outline-none"
            title="Minimize"
          >
            <Minus className="h-1.5 w-1.5 opacity-0 group-hover/btn:opacity-100 transition-opacity text-amber-950 font-bold" />
          </button>
          {/* Maximize button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="group/btn h-3 w-3 rounded-full bg-[#28c840] flex items-center justify-center cursor-pointer active:brightness-90 transition-all border-none outline-none"
            title={isMaximized ? "Restore size" : "Maximize"}
          >
            {isMaximized ? (
              <Minimize2 className="h-1.5 w-1.5 opacity-0 group-hover/btn:opacity-100 transition-opacity text-green-950 font-bold" />
            ) : (
              <Maximize2 className="h-1.5 w-1.5 opacity-0 group-hover/btn:opacity-100 transition-opacity text-green-950 font-bold" />
            )}
          </button>
        </div>

        {/* Title */}
        <span className="text-[11px] text-muted-foreground font-mono pr-14 select-none pointer-events-none">
          shrey@portfolio: ~
        </span>

        {/* Empty element for alignment */}
        <div className="w-14" />
      </div>

      {/* Body */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-transparent p-5 font-mono text-[13px] leading-relaxed select-text"
      >
        {lines.map((l, i) => {
          if (l.type === "banner") {
            return (
              <pre
                key={i}
                className="whitespace-pre text-foreground/90 mb-4 select-text"
              >
                {l.content}
              </pre>
            );
          }
          if (l.type === "in") {
            return (
              <div key={i} className="flex gap-2 select-text">
                <span className="text-emerald-400 select-none">➜</span>
                <span className="text-sky-400 select-none">~</span>
                <span className="text-foreground select-text">{l.content}</span>
              </div>
            );
          }
          return (
            <pre
              key={i}
              className="whitespace-pre-wrap text-muted-foreground mb-3 select-text"
            >
              {l.content}
            </pre>
          );
        })}
        {/* Prompt */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-emerald-400">➜</span>
          <span className="text-sky-400">~</span>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            className="flex-1 bg-transparent outline-none text-foreground caret-emerald-400 select-text"
          />
        </div>
      </div>
    </motion.div>
  );
}
