import { motion } from "framer-motion";
import { Terminal, User, Cpu, Briefcase, Mail, Download } from "lucide-react";

interface TaskbarProps {
  isTerminalOpen: boolean;
  isTerminalMinimized: boolean;
  onToggleTerminal: () => void;
}

export function Taskbar({
  isTerminalOpen,
  isTerminalMinimized,
  onToggleTerminal,
}: TaskbarProps) {
  const dockItems = [
    {
      label: "Terminal",
      icon: Terminal,
      onClick: onToggleTerminal,
      isTerminal: true,
    },
    {
      label: "Separator",
      isSeparator: true,
    },
    {
      label: "About",
      icon: User,
      href: "#about",
    },
    {
      label: "Skills",
      icon: Cpu,
      href: "#skills",
    },
    {
      label: "Projects",
      icon: Briefcase,
      href: "#projects",
    },
    {
      label: "Contact",
      icon: Mail,
      href: "#contact",
    },
    {
      label: "Resume",
      icon: Download,
      href: "/resume.txt",
      download: "Shrey-Prajapati-Resume.txt",
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-strong shadow-2xl shadow-black/60 border border-white/10"
    >
      {dockItems.map((item, idx) => {
        if (item.isSeparator) {
          return <div key={idx} className="w-[1px] h-6 bg-white/10 mx-1 self-center" />;
        }

        const Icon = item.icon!;
        const content = (
          <button
            onClick={item.onClick}
            className="relative flex flex-col items-center justify-center p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200 group active:scale-95"
            aria-label={item.label}
          >
            {/* Tooltip */}
            <span className="absolute -top-10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 px-2.5 py-1 rounded-lg bg-neutral-900/90 text-foreground text-[11px] font-mono whitespace-nowrap pointer-events-none border border-white/10 shadow-lg">
              {item.label}
            </span>

            {/* Icon */}
            <Icon size={20} className="transition-transform group-hover:scale-110" />

            {/* Terminal status dot */}
            {item.isTerminal && isTerminalOpen && (
              <span
                className={`absolute bottom-0.5 h-1.5 w-1.5 rounded-full ${
                  isTerminalMinimized
                    ? "bg-white/40 animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                    : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                }`}
              />
            )}
          </button>
        );

        if (item.href) {
          return (
            <a
              key={idx}
              href={item.href}
              download={item.download}
              className="contents"
            >
              {content}
            </a>
          );
        }

        return <div key={idx}>{content}</div>;
      })}
    </motion.div>
  );
}
