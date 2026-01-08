const Header = () => {
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
          <button className="text-white md:hidden text-2xl" id="hamburger-menu">
            {"\u2630"}
          </button>
          <div className="hidden md:flex md:space-x-8" id="nav-links">
            <a href="#about" className="hover:text-teal-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-teal-400 transition-colors"
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
