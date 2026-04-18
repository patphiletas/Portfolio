import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Graphisme from "./components/Graphisme";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <Projects />
      <Graphisme />
      <About />
      <Contact />
    </main>
  );
}
