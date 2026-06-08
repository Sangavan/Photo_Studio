import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Commercial'];

function Portfolio() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/portfolio`);
        if (response.ok) {
          const data = await response.json();
          setPhotos(data);
        }
      } catch (error) {
        console.log('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  const filtered = activeCategory === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  return (
    <div className="bg-blue-950 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="pt-24 pb-10 px-4 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
          Our Work
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Portfolio Gallery
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-blue-300 text-lg max-w-xl mx-auto">
          Browse through our collection of beautiful photography work
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition duration-200 ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-blue-900 text-blue-300 hover:bg-blue-800 border border-blue-700'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">

        {loading ? (
          <div className="text-center py-20">
            <svg className="animate-spin mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            <p className="text-blue-400">Loading portfolio...</p>
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <p className="text-blue-400 text-lg">No portfolio photos yet.</p>
            <p className="text-blue-600 text-sm mt-1">Photos will appear here once added from the admin panel.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-blue-400">No photos in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((photo) => (
              <div
                key={photo._id}
                className="relative group cursor-pointer rounded-xl overflow-hidden border border-blue-800 hover:border-blue-400 transition duration-300"
                onClick={() => setSelectedPhoto(photo)}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-70 transition duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">{photo.title}</p>
                    <p className="text-blue-300 text-sm mt-1">{photo.category}</p>
                    <p className="text-blue-400 text-sm mt-2">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:text-blue-400"
              onClick={() => setSelectedPhoto(null)}>
              ✕
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full rounded-xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-bold text-xl">{selectedPhoto.title}</p>
              <p className="text-blue-400 text-sm mt-1">{selectedPhoto.category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Portfolio;