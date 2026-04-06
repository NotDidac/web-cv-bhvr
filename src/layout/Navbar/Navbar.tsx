import logo from "@/assets/images/shared/logo.png";
import Button from "@/components/Button";

function Navbar() {
  return (
    <header className="px-page flex flex-wrap items-center justify-between">
      <img src={logo} alt="Logo" className="max-w-[clamp(30px,5vw,50px)]" />
      <nav>
        <ul className="align-center flex gap-8">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Button title="Hire Me" onClick={() => alert("Hire Me clicked!")} />
    </header>
  );
}

export default Navbar;
