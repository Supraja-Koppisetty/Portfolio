import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Placeholder for menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-50 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <nav className="flex justify-between items-center text-white text-base lg:text-lg">
          <a
            href="#hero"
            className="text-teal-400 font-bold hover:text-teal-300 transition-colors"
          >
            &lt;Veera Supraja /&gt;
          </a>
          {/* Hamurger menu */}
          <button
            className="text-white md:hidden text-2xl"
            id="hamburger-menu"
            onClick={toggleMenu}
          >
            {isOpen ? "\u2715" : "\u2630"}
          </button>
          <div
            className={`${
              isOpen
                ? "flex flex-col absolute top-16 left-0 w-full bg-gray-800 space-y-6 py-6 z-50 h-screen items-center"
                : "hidden"
            } md:flex md:space-x-8 md:static md:flex-row md:bg-transparent md:space-y-0 md:py-0 md:w-auto`}
            id="nav-links"
          >
            <a
              href="#about"
              className="hover:text-teal-400 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-teal-400 transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-teal-400 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-teal-400 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
