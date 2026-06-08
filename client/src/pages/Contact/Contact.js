import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none border border-blue-800 transition duration-200 bg-blue-950 text-white placeholder-blue-700";

  return (
    <div className="bg-blue-950 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="pt-24 pb-10 px-4 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-blue-300 text-lg max-w-xl mx-auto">
          Have a question or want to book a session? We'd love to hear from you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Info Cards */}
          <div className="space-y-4">

            {/* Phone */}
            <div className="p-6 rounded-2xl border border-blue-800 hover:border-blue-500 transition duration-300"
              style={{ backgroundColor: '#0a1628' }}>
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
              <p className="text-blue-300 text-sm mb-1">+94 77 123 4567</p>
              <p className="text-blue-300 text-sm">+94 11 234 5678</p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl border border-blue-800 hover:border-blue-500 transition duration-300"
              style={{ backgroundColor: '#0a1628' }}>
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Email</h3>
              <p className="text-blue-300 text-sm mb-1">info@skcolors.lk</p>
              <p className="text-blue-300 text-sm">booking@skcolors.lk</p>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl border border-blue-800 hover:border-blue-500 transition duration-300"
              style={{ backgroundColor: '#0a1628' }}>
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Location</h3>
              <p className="text-blue-300 text-sm mb-1">Colombo, Sri Lanka</p>
              <p className="text-blue-300 text-sm">Mon - Sat: 9AM - 6PM</p>
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl border border-blue-800 hover:border-green-500 transition duration-300 cursor-pointer"
              style={{ backgroundColor: '#0a1628' }}>
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">WhatsApp</h3>
                <p className="text-sm text-green-400">Chat with us directly</p>
              </div>
            </a>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl border border-blue-800 hover:border-blue-500 transition duration-300"
              style={{ backgroundColor: '#0a1628' }}>
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Working Hours</h3>
              <p className="text-blue-300 text-sm mb-1">Mon - Fri: 9AM - 6PM</p>
              <p className="text-blue-300 text-sm">Sat - Sun: 8AM - 8PM</p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl border border-blue-800"
              style={{ backgroundColor: '#0a1628' }}>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-blue-300 text-lg mb-6">
                    Thank you for contacting SK Colors. We will get back to you within 24 hours!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition duration-200">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-blue-300 text-sm mb-6">
                    Fill in the form below and we will get back to you within 24 hours
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className={inputClass}
                          onFocus={e => e.target.style.borderColor = '#3B82F6'}
                          onBlur={e => e.target.style.borderColor = ''}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className={inputClass}
                          onFocus={e => e.target.style.borderColor = '#3B82F6'}
                          onBlur={e => e.target.style.borderColor = ''}
                        />
                      </div>
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+94 77 123 4567"
                          className={inputClass}
                          onFocus={e => e.target.style.borderColor = '#3B82F6'}
                          onBlur={e => e.target.style.borderColor = ''}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          onFocus={e => e.target.style.borderColor = '#3B82F6'}
                          onBlur={e => e.target.style.borderColor = ''}>
                          <option value="">Select a subject</option>
                          <option value="Wedding Photography">Wedding Photography</option>
                          <option value="Portrait Session">Portrait Session</option>
                          <option value="Event Photography">Event Photography</option>
                          <option value="Commercial Shoot">Commercial Shoot</option>
                          <option value="Custom Package">Custom Package</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-blue-300">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your photography needs..."
                        className={`${inputClass} resize-none`}
                        onFocus={e => e.target.style.borderColor = '#3B82F6'}
                        onBlur={e => e.target.style.borderColor = ''}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-bold text-white text-base transition duration-200 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500"
                      style={{ backgroundColor: loading ? '#1e3a8a' : '' }}>
                      {loading ? (
                        <>
                          <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>

                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;