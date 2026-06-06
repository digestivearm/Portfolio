import Hero from "./Hero";
import Projects from "./ProjectSection";
import Footer from "../../components/Footer";
import About from "./AboutSection";
import Expreience from "./Expreience";
import Techstack from "../../components/Techstack";

function Index() {
  return (
    <>
      <main className="flex flex-col lg:mt-15 lg:mb-20">
        <Hero />
        <About />
        <Expreience />
        <Projects />
        <Techstack />
      </main>
      <footer className="justify-center lg:mb-2 lg:flex">
        <Footer />
      </footer>
    </>
  );
}

export default Index;
