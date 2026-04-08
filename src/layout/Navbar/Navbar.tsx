import logo from "@/assets/images/shared/logo.png";
import Button from "@/components/Button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  function handleClick() {
    alert("Hire Me clicked!");
  }
  return (
    <header className="px-page flex w-full items-center justify-between py-0.5">
      <a href="#home">
        <img
          src={logo}
          alt="Logo"
          className="max-w-[clamp(30px,5vw,50px)] transition-transform duration-100 hover:scale-105"
        />
      </a>
      <nav className="flex items-center justify-center px-8">
        <ul className="flex items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-primary text-xl transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="hidden md:flex" onClick={handleClick}>
        Hire Me
      </Button>
    </header>
  );
}

export default Navbar;
