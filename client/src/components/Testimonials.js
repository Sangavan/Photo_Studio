import React from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    type: 'Wedding Client',
    review: 'SK Colors made our wedding day absolutely magical. Every photo is a masterpiece. We will treasure these memories forever!',
    stars: 5,
    avatar: 'PS',
  },
  {
    name: 'Amal Fernando',
    type: 'Portrait Session',
    review: 'Incredibly professional and talented team. The portrait session was so comfortable and the results were beyond amazing!',
    stars: 5,
    avatar: 'AF',
  },
  {
    name: 'Nisha Perera',
    type: 'Event Photography',
    review: 'They covered our corporate event perfectly. Every important moment was captured beautifully. Highly recommended!',
    stars: 5,
    avatar: 'NP',
  },
];

function Testimonials() {
  return (
    <div className="bg-blue-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
            Client Reviews
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-blue-900 border border-blue-700 rounded-xl p-6 hover:border-blue-400 transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-blue-200 text-sm leading-relaxed mb-6 italic">
                "{item.review}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{item.name}</p>
                  <p className="text-blue-400 text-xs">{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Testimonials;