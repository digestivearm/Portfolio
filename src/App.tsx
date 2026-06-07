import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { LocationMap } from "@/sections/LocationMap";
import { Footer } from "@/sections/Footer";
import { Terminal } from "./sections/Terminal";
import { Taskbar } from "./components/Taskbar";

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);

  const toggleTerminal = () => {
    if (!isTerminalOpen) {
      setIsTerminalOpen(true);
      setIsTerminalMinimized(false);
    } else {
      setIsTerminalMinimized(!isTerminalMinimized);
    }
  };

  return (
    <main className="relative">
      <Navbar />
      {/* Global grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-grid-fade"
      />
      <Hero>
        {isTerminalOpen && (
          <Terminal
            isOpen={isTerminalOpen}
            isMinimized={isTerminalMinimized}
            onClose={() => setIsTerminalOpen(false)}
            onMinimize={() => setIsTerminalMinimized(true)}
          />
        )}
      </Hero>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <LocationMap />
      <Footer />
      <Taskbar
        isTerminalOpen={isTerminalOpen}
        isTerminalMinimized={isTerminalMinimized}
        onToggleTerminal={toggleTerminal}
      />
    </main>
  );
}
