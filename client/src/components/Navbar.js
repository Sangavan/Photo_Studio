import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 border-b shadow-lg"
      style={{ backgroundColor: '#0A0F1E', borderColor: '#1E40AF' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
            <div className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-xl shadow-lg overflow-hidden"
              style={{ backgroundColor: '#0A0F1E', border: '2px solid #1E40AF' }}>
              <div className="absolute inset-0 opacity-30 rounded-xl"
                style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}></div>
              <span className="relative text-sm md:text-lg font-black"
                style={{ color: '#3B82F6' }}>SK</span>
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="text-base md:text-xl font-black" style={{ color: '#ffffff' }}>SK</span>
                <span className="text-base md:text-xl font-black"
                  style={{
                    color: '#3B82F6',
                    textShadow: '0 0 20px #3B82F6, 0 0 40px #1E40AF'
                  }}>Colors</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="h-px flex-1"
                  style={{ background: 'linear-gradient(to right, #1E40AF, transparent)' }}></div>
                <span className="text-xs font-bold tracking-widest uppercase px-1"
                  style={{ color: '#3B82F6', fontSize: '0.55rem' }}>Photography</span>
                <div className="h-px flex-1"
                  style={{ background: 'linear-gradient(to left, #1E40AF, transparent)' }}></div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">

            {/* Home */}
            <Link to="/"
              className="flex items-center gap-1.5 px-2 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition duration-200 whitespace-nowrap"
              style={{
                backgroundColor: isActive('/') ? '#1E3A8A' : 'transparent',
                color: isActive('/') ? '#ffffff' : '#93C5FD',
              }}
              onMouseEnter={e => {
                if (!isActive('/')) {
                  e.currentTarget.style.backgroundColor = '#1E3A8A';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={e => {
                if (!isActive('/')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#93C5FD';
                }
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Home
            </Link>

            {/* About */}
            <Link to="/about"
              className="flex items-center gap-1.5 px-2 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition duration-200 whitespace-nowrap"
              style={{
                backgroundColor: isActive('/about') ? '#1E3A8A' : 'transparent',
                color: isActive('/about') ? '#ffffff' : '#93C5FD',
              }}
              onMouseEnter={e => {
                if (!isActive('/about')) {
                  e.currentTarget.style.backgroundColor = '#1E3A8A';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={e => {
                if (!isActive('/about')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#93C5FD';
                }
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              About
            </Link>

            {/* Portfolio */}
            <Link to="/portfolio"
              className="flex items-center gap-1.5 px-2 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition duration-200 whitespace-nowrap"
              style={{
                backgroundColor: isActive('/portfolio') ? '#1E3A8A' : 'transparent',
                color: isActive('/portfolio') ? '#ffffff' : '#93C5FD',
              }}
              onMouseEnter={e => {
                if (!isActive('/portfolio')) {
                  e.currentTarget.style.backgroundColor = '#1E3A8A';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={e => {
                if (!isActive('/portfolio')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#93C5FD';
                }
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              Portfolio
            </Link>

            {/* Packages */}
            <Link to="/packages"
              className="flex items-center gap-1.5 px-2 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition duration-200 whitespace-nowrap"
              style={{
                backgroundColor: isActive('/packages') ? '#1E3A8A' : 'transparent',
                color: isActive('/packages') ? '#ffffff' : '#93C5FD',
              }}
              onMouseEnter={e => {
                if (!isActive('/packages')) {
                  e.currentTarget.style.backgroundColor = '#1E3A8A';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={e => {
                if (!isActive('/packages')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#93C5FD';
                }
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
              Packages
            </Link>

            {/* Contact */}
            <Link to="/contact"
              className="flex items-center gap-1.5 px-2 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition duration-200 whitespace-nowrap"
              style={{
                backgroundColor: isActive('/contact') ? '#1E3A8A' : 'transparent',
                color: isActive('/contact') ? '#ffffff' : '#93C5FD',
              }}
              onMouseEnter={e => {
                if (!isActive('/contact')) {
                  e.currentTarget.style.backgroundColor = '#1E3A8A';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={e => {
                if (!isActive('/contact')) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#93C5FD';
                }
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Contact
            </Link>

            {/* Divider */}
            <div className="w-px h-6 mx-1 lg:mx-2"
              style={{ backgroundColor: '#1E40AF' }}></div>

            {/* Book Now Button */}
            <Link to="/booking"
              className="flex items-center gap-1.5 text-white px-3 py-2 rounded-xl text-xs lg:text-sm font-bold transition duration-200 shadow-lg whitespace-nowrap"
              style={{ backgroundColor: '#1E40AF' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#1D4ED8';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 0 20px #3B82F677';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#1E40AF';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Now
            </Link>

            {/* Client Login — only on large screens */}
            <Link to="/gallery"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition duration-200 border whitespace-nowrap"
              style={{
                color: '#93C5FD',
                borderColor: '#1E40AF',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#1E3A8A';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#93C5FD';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Login
            </Link>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none w-10 h-10 flex items-center justify-center rounded-lg transition duration-200"
              style={{ color: '#93C5FD' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1E3A8A'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t px-6 pt-4 pb-6 space-y-2 shadow-xl"
          style={{ backgroundColor: '#0A0F1E', borderColor: '#1E40AF' }}>

          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-4 pb-4 border-b"
            style={{ borderColor: '#1E40AF' }}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden"
              style={{ backgroundColor: '#0A0F1E', border: '2px solid #1E40AF' }}>
              <div className="absolute inset-0 opacity-30"
                style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}></div>
              <span className="relative text-sm font-black"
                style={{ color: '#3B82F6' }}>SK</span>
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="text-xl font-black" style={{ color: '#ffffff' }}>SK</span>
                <span className="text-xl font-black"
                  style={{ color: '#3B82F6', textShadow: '0 0 20px #3B82F6' }}>Colors</span>
              </div>
              <span className="text-xs tracking-widest uppercase"
                style={{ color: '#3B82F6' }}>Photography</span>
            </div>
          </div>

          {/* Home */}
          <Link to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition duration-200"
            style={{
              backgroundColor: isActive('/') ? '#1E3A8A' : 'transparent',
              color: isActive('/') ? '#ffffff' : '#93C5FD',
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </Link>

          {/* About */}
          <Link to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition duration-200"
            style={{
              backgroundColor: isActive('/about') ? '#1E3A8A' : 'transparent',
              color: isActive('/about') ? '#ffffff' : '#93C5FD',
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            About
          </Link>

          {/* Portfolio */}
          <Link to="/portfolio"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition duration-200"
            style={{
              backgroundColor: isActive('/portfolio') ? '#1E3A8A' : 'transparent',
              color: isActive('/portfolio') ? '#ffffff' : '#93C5FD',
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            Portfolio
          </Link>

          {/* Packages */}
          <Link to="/packages"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition duration-200"
            style={{
              backgroundColor: isActive('/packages') ? '#1E3A8A' : 'transparent',
              color: isActive('/packages') ? '#ffffff' : '#93C5FD',
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
            Packages
          </Link>

          {/* Contact */}
          <Link to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition duration-200"
            style={{
              backgroundColor: isActive('/contact') ? '#1E3A8A' : 'transparent',
              color: isActive('/contact') ? '#ffffff' : '#93C5FD',
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Contact
          </Link>

          <div className="pt-2 space-y-2 border-t mt-2"
            style={{ borderColor: '#1E40AF' }}>

            {/* Book Now */}
            <Link to="/booking"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-white px-4 py-3 rounded-xl text-sm font-bold transition duration-200 w-full"
              style={{ backgroundColor: '#1E40AF' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Now
            </Link>

            {/* Client Login */}
            <Link to="/gallery"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition duration-200 w-full border"
              style={{ color: '#93C5FD', borderColor: '#1E40AF' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Client Login
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;