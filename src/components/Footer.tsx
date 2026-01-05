import { Heart, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-rose-400 mb-4">Hair & Beauty Salon Demo</h3>
            <p className="text-gray-400 mb-4">
              Your trusted beauty and hair salon in Hounslow, delivering quality services with care and expertise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-rose-400 transition">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-rose-400 transition">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-rose-400 transition">Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-rose-400 transition">Reviews</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-rose-400 transition">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  728 Bath Rd, Cranford<br />
                  Hounslow TW5 9TW
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="tel:02087590041" className="text-gray-400 hover:text-rose-400 transition text-sm">
                  020 8759 0041
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  Mon-Sat: 9 AM - 6 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 fill-rose-400 text-rose-400" /> for Hair & Beauty Salon Demo
          </p>
          <p className="text-gray-500 text-sm mt-2">
            &copy; {currentYear} Hair & Beauty Salon Demo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
