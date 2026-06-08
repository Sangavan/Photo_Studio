import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/packages`);
        if (response.ok) {
          const data = await response.json();
          setPackages(data);
        }
      } catch (error) {
        console.log('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  return (
    <div className="bg-blue-950 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="pt-24 pb-10 px-4 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
          Our Pricing
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Photography Packages
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-blue-300 text-lg max-w-xl mx-auto">
          Choose the perfect package for your special moment
        </p>
      </div>

      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">

        {loading ? (
          <div className="text-center py-20">
            <svg className="animate-spin mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            <p className="text-blue-400">Loading packages...</p>
          </div>
        ) : packages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-blue-400">No packages found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg._id}
                className={`relative rounded-2xl border transition duration-300 overflow-hidden ${
                  pkg.popular
                    ? 'border-blue-500 shadow-lg shadow-blue-900'
                    : 'border-blue-800 hover:border-blue-500'
                }`}
                style={{ backgroundColor: '#0a1628' }}>

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="bg-blue-600 py-1.5 text-center text-xs font-bold uppercase tracking-widest text-white">
                    ⭐ Most Popular
                  </div>
                )}

                <div className={`p-8 ${pkg.popular ? 'pt-6' : ''}`}>

                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <span className="text-5xl">{pkg.icon}</span>
                    <h3 className="text-2xl font-bold text-white mt-3">{pkg.name}</h3>
                    <p className="text-blue-300 text-sm mt-1">{pkg.duration} Session</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8 py-4 rounded-xl bg-blue-900 bg-opacity-40">
                    <p className="text-3xl font-black text-white">{pkg.price}</p>
                    <p className="text-blue-400 text-xs mt-1">per session</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-blue-100">
                        <span className="text-blue-400 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                    {pkg.notIncluded && pkg.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-blue-800">
                        <span>✕</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button
                    onClick={() => setSelected(pkg)}
                    className={`w-full py-3 rounded-xl font-bold text-base transition duration-200 ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-transparent hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-700 hover:border-blue-600'
                    }`}>
                    Book This Package
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom note */}
        <div className="text-center mt-12 p-6 rounded-2xl border border-blue-800"
          style={{ backgroundColor: '#0a1628' }}>
          <p className="text-white font-bold text-lg mb-2">
            Need a custom package? 🎨
          </p>
          <p className="text-blue-300 text-sm mb-4">
            Contact us and we will create a package tailored just for you
          </p>
          <a href="/contact"
            className="inline-block px-6 py-2.5 rounded-xl font-bold text-sm transition duration-200 bg-blue-600 hover:bg-blue-500 text-white">
            Contact Us
          </a>
        </div>
      </div>

      {/* Booking Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}>
          <div className="rounded-2xl p-8 max-w-md w-full border border-blue-700"
            style={{ backgroundColor: '#0a1628' }}
            onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-white mb-2">
              {selected.icon} {selected.name} Package
            </h3>
            <p className="text-3xl font-black text-blue-400 mb-6">
              {selected.price}
            </p>
            <p className="text-blue-300 text-sm mb-6">
              You selected the <span className="text-white font-bold">{selected.name}</span> package.
              Click below to proceed to booking.
            </p>
            <div className="flex gap-3">
              <a href="/booking"
                className="flex-1 py-3 rounded-xl font-bold text-center text-white bg-blue-600 hover:bg-blue-500 transition duration-200">
                Proceed to Booking
              </a>
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-3 rounded-xl font-bold border border-blue-700 text-blue-300 hover:bg-blue-900 transition duration-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Packages;