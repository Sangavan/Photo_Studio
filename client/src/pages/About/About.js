import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function About() {
  return (
    <div className="bg-blue-950 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="pt-24 pb-10 px-4 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
          Who We Are
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About SK Colors
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-blue-300 text-lg max-w-xl mx-auto">
          Passionate photographers dedicated to capturing life's most beautiful moments
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-md opacity-30"
              style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)' }}></div>
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80"
              alt="SK Colors Photography Studio"
              className="relative rounded-2xl w-full h-96 object-cover border border-blue-800"
            />
            {/* Badge on image */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl border border-blue-700"
              style={{ backgroundColor: '#0a1628dd' }}>
              <p className="text-white font-bold text-sm">SK Colors Photography</p>
              <p className="text-blue-400 text-xs">Est. 2019 · Colombo, Sri Lanka</p>
            </div>
          </div>

          {/* Story Text */}
          <div>
            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-3">
              Our Story
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Capturing Life's True Colors Since 2019
            </h2>
            <p className="text-blue-200 leading-relaxed mb-4">
              SK Colors Photography was born from a deep passion for visual storytelling.
              What started as a hobby quickly grew into a professional studio dedicated
              to preserving life's most precious moments with artistry and care.
            </p>
            <p className="text-blue-200 leading-relaxed mb-4">
              Based in Colombo, Sri Lanka, we specialize in wedding photography,
              portrait sessions, corporate events, and commercial shoots. Our team
              brings creativity, technical excellence, and a personal touch to every project.
            </p>
            <p className="text-blue-200 leading-relaxed mb-8">
              We believe every photograph should tell a story — your story. That's why
              we take time to understand your vision and deliver images that exceed expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '1200+', label: 'Photos Delivered' },
                { number: '5+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl border border-blue-800"
                  style={{ backgroundColor: '#060B18' }}>
                  <p className="text-2xl font-black text-blue-400">{stat.number}</p>
                  <p className="text-blue-300 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
              Meet The Team
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              The People Behind The Lens
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sangavan K.',
                role: 'Lead Photographer & Founder',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
                desc: 'Passionate about capturing authentic emotions and timeless moments.',
                speciality: 'Weddings & Portraits',
              },
              {
                name: 'Priya M.',
                role: 'Senior Photographer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
                desc: 'Creative eye for detail with a love for editorial and commercial photography.',
                speciality: 'Commercial & Events',
              },
              {
                name: 'Amal R.',
                role: 'Photo Editor & Videographer',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
                desc: 'Expert in post-processing and cinematic video production.',
                speciality: 'Editing & Video',
              },
            ].map((member, i) => (
              <div key={i}
                className="rounded-2xl border border-blue-800 overflow-hidden transition duration-300 hover:border-blue-500"
                style={{ backgroundColor: '#0a1628' }}>
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-950 opacity-0 hover:opacity-30 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-blue-200 text-sm leading-relaxed mb-4">{member.desc}</p>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg w-fit"
                    style={{ backgroundColor: '#1E3A8A33', border: '1px solid #1E40AF' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    <span className="text-blue-400 text-xs font-medium">{member.speciality}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
              What We Stand For
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                ),
                title: 'Passion',
                desc: 'We pour our heart into every shot, treating each session as a unique work of art.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: 'Quality',
                desc: 'We never compromise on quality. Every image is carefully edited to perfection.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Trust',
                desc: 'Building lasting relationships with our clients through honesty and reliability.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                ),
                title: 'Creativity',
                desc: 'Bringing fresh perspectives and innovative ideas to every photography project.',
              },
            ].map((value, i) => (
              <div key={i}
                className="p-6 rounded-2xl border border-blue-800 text-center hover:border-blue-500 transition duration-300"
                style={{ backgroundColor: '#0a1628' }}>
                <div className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-10 rounded-2xl border border-blue-700"
          style={{ backgroundColor: '#0a1628' }}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-300 text-lg mb-8 max-w-xl mx-auto">
            Let's create something beautiful together. Book your session today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking"
              className="flex items-center justify-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl text-base transition duration-200"
              style={{
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                boxShadow: '0 0 25px #1E40AF77'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 35px #3B82F6bb';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 25px #1E40AF77';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book a Session
            </a>
            <a href="/contact"
              className="flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-xl text-base transition duration-200 border-2"
              style={{ borderColor: '#3B82F6', color: '#60A5FA' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1E3A8A44';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Contact Us
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;