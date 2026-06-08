import React from 'react';

const services = [
  {
    icon: '💒',
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and emotion. Every moment preserved forever.',
  },
  {
    icon: '🎭',
    title: 'Portrait Sessions',
    description: 'Professional portraits that capture your personality and tell your unique story.',
  },
  {
    icon: '🎉',
    title: 'Event Photography',
    description: 'Corporate events, birthdays, graduations — we cover every special occasion.',
  },
  {
    icon: '📦',
    title: 'Commercial Shoots',
    description: 'Product photography and brand shoots that make your business stand out.',
  },
];

function Services() {
  return (
    <div className="bg-blue-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            At SK Colors, we offer a wide range of professional photography services tailored to your needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-900 border border-blue-700 hover:border-blue-400 rounded-xl p-6 text-center transition duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-800"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-white text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-blue-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Services;