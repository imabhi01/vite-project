import { Scissors, Sparkles, Eye, Droplet, Palette, Heart } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Services',
    description: 'Professional cuts, styling, and treatments',
    items: ['Haircuts & Styling', 'Hair Coloring', 'Highlights & Balayage', 'Hair Treatments']
  },
  {
    icon: Eye,
    title: 'Eyebrow Services',
    description: 'Expert shaping and grooming',
    items: ['Eyebrow Threading', 'Eyebrow Tinting', 'Eyebrow Shaping', 'Eyelash Tinting']
  },
  {
    icon: Sparkles,
    title: 'Facial Treatments',
    description: 'Rejuvenate and refresh your skin',
    items: ['Classic Facials', 'Deep Cleansing', 'Anti-Aging Treatments', 'Face Threading']
  },
  {
    icon: Droplet,
    title: 'Waxing',
    description: 'Smooth and professional hair removal',
    items: ['Full Body Waxing', 'Facial Waxing', 'Brazilian Waxing', 'Hollywood Waxing']
  },
  {
    icon: Palette,
    title: 'Nail Services',
    description: 'Beautiful nails for any occasion',
    items: ['Manicure', 'Pedicure', 'Gel Polish', 'Nail Art']
  },
  {
    icon: Heart,
    title: 'Special Services',
    description: 'Complete beauty packages',
    items: ['Bridal Packages', 'Party Makeup', 'Henna/Mehndi', 'Hair Extensions']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive beauty and hair services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-rose-50 p-8 rounded-2xl border border-rose-100 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to book your appointment?</p>
          <button
            onClick={() => {
              const phoneNumber = '442087590041';
              const message = encodeURIComponent('Hi! I would like to know more about your services.');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition inline-flex items-center"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
