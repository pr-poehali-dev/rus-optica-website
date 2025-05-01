
import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold tracking-tight">
              RUS<span className="text-primary">OPTICA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="font-semibold hover:text-primary transition">
              Каталог
            </Link>
            <Link to="/vision" className="font-semibold hover:text-primary transition">
              Для зрения
            </Link>
            <Link to="/sun" className="font-semibold hover:text-primary transition">
              Солнцезащитные
            </Link>
            <Link to="/stores" className="font-semibold hover:text-primary transition">
              Магазины
            </Link>
            <Link to="/about" className="font-semibold hover:text-primary transition">
              О нас
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-muted transition">
              <Icon name="Search" size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition">
              <Icon name="ShoppingBag" size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition">
              <Icon name="User" size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-muted transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/catalog" className="font-semibold py-2 hover:text-primary transition">
                Каталог
              </Link>
              <Link to="/vision" className="font-semibold py-2 hover:text-primary transition">
                Для зрения
              </Link>
              <Link to="/sun" className="font-semibold py-2 hover:text-primary transition">
                Солнцезащитные
              </Link>
              <Link to="/stores" className="font-semibold py-2 hover:text-primary transition">
                Магазины
              </Link>
              <Link to="/about" className="font-semibold py-2 hover:text-primary transition">
                О нас
              </Link>
              <div className="flex space-x-4 pt-2">
                <button className="p-2 rounded-full hover:bg-muted transition">
                  <Icon name="Search" size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-muted transition">
                  <Icon name="ShoppingBag" size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-muted transition">
                  <Icon name="User" size={20} />
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
