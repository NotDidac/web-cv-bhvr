import {
  Header,
  Footer,
  Hero,
  Introduction,
  Projects,
  Skills,
  AboutMe,
  Contact,
} from "./components";

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
