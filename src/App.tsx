import {
  Hero,
  Introduction,
  Projects,
  Skills,
  AboutMe,
  Contact,
} from "./sections";

import { Navbar, Footer } from "./layout";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
