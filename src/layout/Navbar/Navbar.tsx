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
  return (
    <header className="px-page flex w-full flex-wrap items-center justify-between py-0.5">
      <a href="#home">
        <img
          src={logo}
          alt="Logo"
          className="max-w-[clamp(30px,5vw,50px)] transition-transform duration-100 hover:scale-105"
        />
      </a>
      <nav>
        <ul className="align-center flex gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        title="Hire Me"
        onClick={() => alert("Hire Me clicked!")}
        className="rounded-2xl px-6"
      />
    </header>
  );
}

export default Navbar;
