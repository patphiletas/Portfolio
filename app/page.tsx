import Cover from "./components/Cover";
import About from "./components/About";
import Projects from "./components/Projects";
import Graphisme from "./components/Graphisme";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main>
      <Cover />
      <About />
      <Projects />
      <Graphisme />
      <Contact />
    </main>
  );
}
