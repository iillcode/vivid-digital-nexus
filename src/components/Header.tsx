
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you'd implement theme switching logic here
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            TechNova
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-400' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-blue-400 transition-colors ${isActive('/about') ? 'text-blue-400' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/career" 
              className={`hover:text-blue-400 transition-colors ${isActive('/career') ? 'text-blue-400' : ''}`}
            >
              Career
            </Link>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-white hover:text-blue-400"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full">
              Get Started
            </Button>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-white hover:text-blue-400"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                className={`hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-blue-400 transition-colors ${isActive('/about') ? 'text-blue-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/career" 
                className={`hover:text-blue-400 transition-colors ${isActive('/career') ? 'text-blue-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full w-fit">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
