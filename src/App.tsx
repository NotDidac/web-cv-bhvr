import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero/Hero";
import Introduction from "./components/sections/Introduction";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import AboutMe from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
