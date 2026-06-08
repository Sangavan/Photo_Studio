import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative bg-blue-950 min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500634245200-e5245c7574ef?w=1920&q=100')`,
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, #020818ee 0%, #0a1628dd 50%, #020818ee 100%)'
        }}></div>

      {/* Animated background circles */}
      <div className="absolute z-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #3B82F6, transparent)',
          top: '10%', left: '5%'
        }}></div>
      <div className="absolute z-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #1E40AF, transparent)',
          bottom: '10%', right: '5%'
        }}></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full">

        {/* SK COLORS Badge with LED border */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative">

            {/* Outer glow */}
            <div className="absolute inset-0 rounded-2xl blur-md opacity-40"
              style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6, #1E40AF)' }}></div>

            {/* Main badge content */}
            <div className="relative flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 badge-led-glow"
              style={{
                background: 'linear-gradient(135deg, #0a1628, #1e3a8a55, #0a1628)',
              }}>

              {/* Left camera icon */}
              <div className="relative">
                <div className="absolute inset-0 blur-sm rounded-lg"
                  style={{ background: '#1E40AF' }}></div>
                <div className="relative w-7 h-7 md:w-9 md:h-9 rounded-lg flex items-center justify-center border"
                  style={{
                    background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                    borderColor: '#60A5FA44'
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
              </div>

              {/* Center text */}
              <div className="flex flex-col items-center">

                {/* Top decorative line */}
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="w-5 md:w-6 h-px"
                    style={{ background: 'linear-gradient(to right, transparent, #3B82F6)' }}></div>
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <div className="w-5 md:w-6 h-px"
                    style={{ background: 'linear-gradient(to left, transparent, #3B82F6)' }}></div>
                </div>

                {/* Main text */}
                <div className="flex items-baseline gap-1.5 md:gap-2">
                  <span className="text-base md:text-xl font-black tracking-widest text-white"
                    style={{ letterSpacing: '0.15em' }}>SK</span>
                  <span className="text-base md:text-xl font-black tracking-widest"
                    style={{
                      letterSpacing: '0.15em',
                      background: 'linear-gradient(135deg, #60A5FA, #93C5FD, #3B82F6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 8px #3B82F6)'
                    }}>COLORS</span>
                </div>

                {/* Subtitle */}
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span className="text-xs font-bold text-blue-400 uppercase"
                    style={{ letterSpacing: '0.15em', fontSize: '0.6rem' }}>Photography Studio</span>
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                </div>

                {/* Bottom decorative line */}
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-5 md:w-6 h-px"
                    style={{ background: 'linear-gradient(to right, transparent, #3B82F6)' }}></div>
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <div className="w-5 md:w-6 h-px"
                    style={{ background: 'linear-gradient(to left, transparent, #3B82F6)' }}></div>
                </div>

              </div>

              {/* Right aperture icon */}
              <div className="relative">
                <div className="absolute inset-0 blur-sm rounded-lg"
                  style={{ background: '#1E3A8A' }}></div>
                <div className="relative w-7 h-7 md:w-9 md:h-9 rounded-lg flex items-center justify-center border"
                  style={{
                    background: 'linear-gradient(135deg, #1e3a8a, #1E40AF)',
                    borderColor: '#60A5FA44'
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="14.31" y1="8" x2="20.05" y2="17.94"/>
                    <line x1="9.69" y1="8" x2="21.17" y2="8"/>
                    <line x1="7.38" y1="12" x2="13.12" y2="2.06"/>
                    <line x1="9.69" y1="16" x2="3.95" y2="6.06"/>
                    <line x1="14.31" y1="16" x2="2.83" y2="16"/>
                    <line x1="16.62" y1="12" x2="10.88" y2="21.94"/>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
          Capturing Life's
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #60A5FA, #93C5FD, #3B82F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 20px #3B82F6)'
          }}>True Colors</span>
        </h1>

        {/* Slogan */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="w-8 md:w-12 h-px bg-blue-600"></div>
          <p className="text-base md:text-xl text-blue-300 font-medium italic">
            Where every photo tells your story
          </p>
          <div className="w-8 md:w-12 h-px bg-blue-600"></div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-lg text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Professional photography for weddings, portraits, events and
          commercial shoots in Sri Lanka — where every moment
          is beautifully preserved forever.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-3 justify-center mb-10 md:mb-16 flex-wrap">
          <Link
            to="/booking"
            className="flex items-center justify-center gap-2 text-white font-bold px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl text-xs md:text-base transition duration-200"
            style={{
              background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
              boxShadow: '0 0 25px #1E40AF77'
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 35px #3B82F6aa'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 25px #1E40AF77'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Book a Session
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center justify-center gap-2 font-bold px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl text-xs md:text-base transition duration-200 border-2"
            style={{
              borderColor: '#3B82F6',
              color: '#60A5FA',
              background: 'transparent'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #1E40AF22, #3B82F622)';
              e.currentTarget.style.borderColor = '#60A5FA';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#3B82F6';
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            View Portfolio
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-row gap-0 justify-center border border-blue-800 rounded-2xl overflow-hidden w-full max-w-xs sm:max-w-lg mx-auto"
          style={{ background: 'linear-gradient(135deg, #0a162888, #1e3a8a22)' }}>

          <div className="flex-1 py-3 px-2 md:px-6 text-center border-r border-blue-800">
            <div className="flex items-center justify-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <p className="text-base md:text-2xl font-black text-white">500+</p>
            </div>
            <p className="text-blue-400 text-xs font-medium tracking-wider uppercase">Happy Clients</p>
          </div>

          <div className="flex-1 py-3 md:py-4 px-4 md:px-6 text-center border-b sm:border-b-0 sm:border-r border-blue-800">
            <div className="flex items-center justify-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <p className="text-xl md:text-2xl font-black text-white">1200+</p>
            </div>
            <p className="text-blue-400 text-xs font-medium tracking-wider uppercase">Photos Delivered</p>
          </div>

          <div className="flex-1 py-3 md:py-4 px-4 md:px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              <p className="text-xl md:text-2xl font-black text-white">5+</p>
            </div>
            <p className="text-blue-400 text-xs font-medium tracking-wider uppercase">Years Experience</p>
          </div>

        </div>

      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 z-20 text-center w-full">
        <p className="text-blue-500 text-xs mb-2 tracking-widest uppercase">Scroll Down</p>
        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

    </div>
  );
}

export default Hero;