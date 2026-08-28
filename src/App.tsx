import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./sections/ProjectDetail/ProjectDetail";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GithubActivity from "./sections/GithubActivity/GithubActivity";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <GithubActivity />
              <Experience />
              <Contact />
              <Footer />
            </main>
          </>
        }
        />
        <Route path="/proyectos/:slug" element={<ProjectDetail />}
        />

      </Routes>
    </BrowserRouter>
  );
}
export default App;