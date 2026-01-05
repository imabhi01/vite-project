import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-rose-600">Hair & Beauty</h1>
            <p className="text-xs text-gray-600">Demo Salon</p>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-600 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-600 transition">
              Gallery
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-rose-600 transition">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-600 transition">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            <a href="tel:02087590041" className="flex items-center text-sm text-gray-700 hover:text-rose-600 transition">
              <Phone className="w-4 h-4 mr-1" />
              020 8759 0041
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-600 transition text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-600 transition text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-600 transition text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-rose-600 transition text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-600 transition text-left">
                Contact
              </button>
              <a href="tel:02087590041" className="flex items-center text-gray-700 hover:text-rose-600 transition">
                <Phone className="w-4 h-4 mr-2" />
                020 8759 0041
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
