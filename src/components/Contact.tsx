import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleWhatsAppBooking = () => {
    const phoneNumber = '442087590041';
    const message = encodeURIComponent('Hi! I would like to book an appointment at Reflextions Hair & Beauty.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're conveniently located in Hounslow, ready to serve you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">728 Bath Rd, Cranford</p>
                    <p className="text-gray-600">Hounslow TW5 9TW</p>
                    <p className="text-gray-600">England</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:02087590041" className="text-rose-600 hover:text-rose-700">
                      020 8759 0041
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp Booking</h4>
                    <p className="text-gray-600 mb-3">Book instantly via WhatsApp</p>
                    <button
                      onClick={handleWhatsAppBooking}
                      className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition flex items-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with Us
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Experienced and professional staff</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Affordable pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Convenient location with easy access</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Wide range of beauty and hair services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Quick and easy WhatsApp booking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.7!2d-0.4!3d51.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzEzLjIiTiAwwrAyNCcwMC4wIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reflextions Hair & Beauty Location"
            ></iframe> */}

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.772116536187!2d-0.41157255446557983!3d51.479022679947995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672e4ea6e95db%3A0x4afb9118d292ee30!2sReflextions%20Hair%20%26%20Beauty!5e0!3m2!1sen!2suk!4v1767612358580!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
