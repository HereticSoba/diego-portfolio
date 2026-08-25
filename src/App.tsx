import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
export default App;