

import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Work from "../Pages/Work";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
