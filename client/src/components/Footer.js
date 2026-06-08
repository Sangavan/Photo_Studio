import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t pt-16 pb-8 px-4"
      style={{ backgroundColor: '#0A0F1E', borderColor: '#1E40AF' }}>
      <div className="max-w-7xl mx-auto">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl shadow-lg overflow-hidden"
                style={{ backgroundColor: '#0A0F1E', border: '2px solid #1E40AF' }}>
                <div className="absolute inset-0 opacity-30 rounded-xl"
                  style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}></div>
                <span className="relative text-lg font-black"
                  style={{ color: '#3B82F6' }}>SK</span>
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black" style={{ color: '#ffffff' }}>SK</span>
                  <span className="text-2xl font-black"
                    style={{
                      color: '#3B82F6',
                      textShadow: '0 0 20px #3B82F6, 0 0 40px #1E40AF'
                    }}>Colors</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="h-px flex-1"
                    style={{ background: 'linear-gradient(to right, #1E40AF, transparent)' }}></div>
                  <span className="text-xs font-bold tracking-widest uppercase px-1"
                    style={{ color: '#3B82F6' }}>Photography</span>
                  <div className="h-px flex-1"
                    style={{ background: 'linear-gradient(to left, #1E40AF, transparent)' }}></div>
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6"
              style={{ color: '#93C5FD' }}>
              Capturing Life's True Colors — Professional photography for
              weddings, portraits, events and commercial shoots in Sri Lanka.
              Where every moment is beautifully preserved forever.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3 flex-wrap">

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition duration-200 border"
                style={{ backgroundColor: '#0A0F1E', borderColor: '#1E40AF' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#1877F2';
                  e.currentTarget.style.borderColor = '#1877F2';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#0A0F1E';
                  e.currentTarget.style.borderColor = '#1E40AF';
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition duration-200 border"
                style={{ backgroundColor: '#0A0F1E', borderColor: '#1E40AF' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#E1306C';
                  e.currentTarget.style.borderColor = '#E1306C';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#0A0F1E';
                  e.currentTarget.style.borderColor = '#1E40AF';
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition duration-200 border"
                style={{ backgroundColor: '#0A0F1E', borderColor: '#1E40AF' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.borderColor = '#25D366';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#0A0F1E';
                  e.currentTarget.style.borderColor = '#1E40AF';
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition duration-200 border"
                style={{ backgroundColor: '#0A0F1E', borderColor: '#1E40AF' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#FF0000';
                  e.currentTarget.style.borderColor = '#FF0000';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#0A0F1E';
                  e.currentTarget.style.borderColor = '#1E40AF';
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition duration-200 border"
                style={{ backgroundColor: '#0A0F1E', borderColor: '#1E40AF' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#010101';
                  e.currentTarget.style.borderColor = '#69C9D0';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#0A0F1E';
                  e.currentTarget.style.borderColor = '#1E40AF';
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full"
                style={{ backgroundColor: '#1E40AF' }}></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/packages', label: 'Packages' },
                { to: '/booking', label: 'Book a Session' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to}
                    className="text-sm flex items-center gap-2 transition duration-200 group"
                    style={{ color: '#93C5FD' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#93C5FD'}>
                    {/* Arrow SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full"
                style={{ backgroundColor: '#1E40AF' }}></div>
              Contact Us
            </h3>
            <ul className="space-y-4">

              {/* Location */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1E3A8A' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Location</p>
                  <p className="text-sm" style={{ color: '#93C5FD' }}>Colombo, Sri Lanka</p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1E3A8A' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <p className="text-sm" style={{ color: '#93C5FD' }}>+94 77 123 4567</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1E3A8A' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-sm" style={{ color: '#93C5FD' }}>info@skcolors.lk</p>
                </div>
              </li>

              {/* Working Hours */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1E3A8A' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Working Hours</p>
                  <p className="text-sm" style={{ color: '#93C5FD' }}>Mon - Sat: 9AM - 6PM</p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: '#1E40AF' }}>

          <p className="text-sm" style={{ color: '#93C5FD' }}>
            © 2024 SK Colors Photography. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {/* Camera SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <p className="text-sm" style={{ color: '#3B82F6' }}>
              Capturing Life's True Colors
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;