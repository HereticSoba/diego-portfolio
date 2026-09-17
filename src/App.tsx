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
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { FadeIn } from "./components/FadeIn/FadeIn";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <SplashScreen />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <FadeIn>
                <Hero />
              </FadeIn>
              <FadeIn>
                <About />
              </FadeIn>
              <FadeIn>
                <Projects />
              </FadeIn>
              <FadeIn>
                <Skills />
              </FadeIn>
              <FadeIn>
                <GithubActivity />
              </FadeIn>
              <FadeIn>
                <Experience />
              </FadeIn>
              <FadeIn>
                <Contact />
              </FadeIn>
              <Footer />
            </main>
          </>
        }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;