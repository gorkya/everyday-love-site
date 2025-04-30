import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 bg-everyday-cream shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-everyday-darkBrown text-xl md:text-2xl">
          Красота повседневности
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-everyday-darkBrown"
          aria-label="Меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-everyday-darkBrown">
          <Link to="/" className="hover:text-everyday-brown transition-colors">
            Главная
          </Link>
          <Link to="/gallery" className="hover:text-everyday-brown transition-colors">
            Галерея
          </Link>
          <Link to="/thoughts" className="hover:text-everyday-brown transition-colors">
            Размышления
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-everyday-cream z-50 py-4 px-6 md:hidden shadow-md">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-everyday-darkBrown hover:text-everyday-brown transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="/gallery"
                className="text-everyday-darkBrown hover:text-everyday-brown transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Галерея
              </Link>
              <Link
                to="/thoughts"
                className="text-everyday-darkBrown hover:text-everyday-brown transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Размышления
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
