import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollPosition = window.scrollY + 100;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Sankar</span> Portfolio
          </span>
        </a>

        {/* Desktop nav + Theme toggle */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "text-foreground/80 hover:text-primary hover:scale-105 hover:font-semibold transition-all duration-300",
                activeLink === item.href && "text-primary font-semibold"
              )}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "absolute top-0 left-0 w-full min-h-screen bg-background/95 backdrop-blur-md z-30 overflow-y-auto",
          "flex flex-col items-center justify-center md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl items-center py-20">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors duration-300",
                activeLink === item.href && "text-primary font-semibold"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
