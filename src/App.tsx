import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
export default App;