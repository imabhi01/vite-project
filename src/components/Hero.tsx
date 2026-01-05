import { MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '442087590041';
    const message = encodeURIComponent('Hi! I would like to book an appointment at Reflextions Hair & Beauty.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Beauty,<br />
              <span className="text-rose-600">Our Passion</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience professional hair and beauty services in the heart of Hounslow.
              From precision haircuts to expert threading, we deliver exceptional results every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleWhatsAppBooking}
                className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </button>
              <a
                href="tel:02087590041"
                className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold border-2 border-rose-600 hover:bg-rose-50 transition transform hover:scale-105 flex items-center justify-center"
              >
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Visit Us</p>
                  <p className="text-sm text-gray-600">728 Bath Rd, Cranford<br />Hounslow TW5 9TW</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Opening Hours</p>
                  <p className="text-sm text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beauty Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold text-rose-600">15+</p>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
