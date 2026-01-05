import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Elvina Soogun',
    rating: 5,
    text: 'This place is no frills but does exactly what you need it to. I get my eyebrows threaded here every now and then and I\'m always happy with the result. It\'s super convenient and affordable.'
  },
  {
    name: 'Asha Hunjan',
    rating: 5,
    text: 'Good staff and good service. Always professional and deliver quality results. Highly recommend for threading and beauty services.'
  },
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Been coming here for years. The staff are friendly and know exactly what they\'re doing. Great value for money.'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {[1, 2, 3].map((star) => (
                <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <Star className="w-6 h-6 text-gray-300" />
            </div>
            <span className="text-lg font-semibold text-gray-900">2.9 / 5</span>
            <span className="text-gray-600">(44 reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl border border-rose-100 relative"
            >
              <Quote className="w-10 h-10 text-rose-200 mb-4" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>
              <p className="font-semibold text-gray-900">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Experience our service for yourself</p>
          <button
            onClick={() => {
              const phoneNumber = '442087590041';
              const message = encodeURIComponent('Hi! I would like to book an appointment.');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
