import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const packages = [
  { id: 1, name: 'Basic', price: 'LKR 25,000', duration: '2 Hours' },
  { id: 2, name: 'Standard', price: 'LKR 50,000', duration: '4 Hours' },
  { id: 3, name: 'Premium', price: 'LKR 100,000', duration: 'Full Day' },
];

const sessionTypes = [
  'Wedding Photography',
  'Portrait Session',
  'Event Photography',
  'Commercial Shoot',
  'Birthday Party',
  'Graduation Photos',
  'Family Portrait',
  'Other',
];

function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    package: '',
    sessionType: '',
    date: '',
    time: '',
    location: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(data.message || 'Booking failed. Please try again.');
      }
    } catch (error) {
      alert('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step 1 valid check
  const step1Valid = formData.package !== '';

  // Step 2 valid check
  const step2Valid =
    formData.sessionType !== '' &&
    formData.date !== '' &&
    formData.time !== '' &&
    formData.location !== '';

  // Step 3 valid check
  const step3Valid =
    formData.name !== '' &&
    formData.email !== '' &&
    formData.phone !== '';

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none border border-blue-800 transition duration-200 bg-blue-950 text-white placeholder-blue-700";

  // Button styles
  const activeNextBtn = {
    background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
    color: '#ffffff',
    boxShadow: '0 0 20px #1E40AF77',
    cursor: 'pointer',
  };

  const disabledNextBtn = {
    background: '#1e3a8a44',
    color: '#475569',
    cursor: 'not-allowed',
    boxShadow: 'none',
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <Navbar />

      {/* Page Header */}
      <div className="pt-24 pb-10 px-4 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
          Reserve Your Session
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Book a Session
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-blue-300 text-lg max-w-xl mx-auto">
          Fill in your details and we will confirm your booking within 24 hours
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-20">

        {/* Success Message */}
        {submitted ? (
          <div className="text-center py-16 rounded-2xl border border-blue-700 p-8"
            style={{ backgroundColor: '#0a1628' }}>
            <div className="text-7xl mb-6">🎉</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Booking Request Sent!
            </h3>
            <p className="text-blue-300 text-lg mb-2">
              Thank you <span className="text-white font-bold">{formData.name}</span>!
            </p>
            <p className="text-blue-300 text-base mb-8">
              We have received your booking request for{' '}
              <span className="text-white font-bold">{formData.sessionType}</span> on{' '}
              <span className="text-white font-bold">{formData.date}</span>.
              We will confirm within 24 hours.
            </p>

            {/* Summary */}
            <div className="p-5 rounded-xl mb-8 text-left border border-blue-800"
              style={{ backgroundColor: '#060B18' }}>
              <p className="text-white font-bold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Booking Summary
              </p>
              <div className="space-y-2">
                {[
                  { icon: '📦', label: 'Package', value: formData.package },
                  { icon: '📷', label: 'Session', value: formData.sessionType },
                  { icon: '📅', label: 'Date', value: formData.date },
                  { icon: '🕐', label: 'Time', value: formData.time },
                  { icon: '📍', label: 'Location', value: formData.location },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span>{item.icon}</span>
                    <span className="text-blue-400">{item.label}:</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Make Another Booking Button */}
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setFormData({
                  package: '', sessionType: '', date: '',
                  time: '', location: '', name: '',
                  email: '', phone: '', notes: '',
                });
              }}
              className="px-8 py-3.5 rounded-xl font-bold text-white text-base transition duration-300 flex items-center gap-2 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                boxShadow: '0 0 20px #1E40AF77',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 35px #3B82F6bb';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 20px #1E40AF77';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 1 0 .49-3.5"/>
              </svg>
              Make Another Booking
            </button>
          </div>
        ) : (
          <>
            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-10">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition duration-200 border-2"
                      style={{
                        backgroundColor: step >= s ? '#1E40AF' : '#0a1628',
                        color: step >= s ? '#ffffff' : '#475569',
                        borderColor: step >= s ? '#3B82F6' : '#1E3A8A',
                        boxShadow: step >= s ? '0 0 15px #1E40AF77' : 'none',
                      }}>
                      {step > s ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ) : s}
                    </div>
                    <p className="text-xs mt-2 font-medium"
                      style={{ color: step >= s ? '#3B82F6' : '#475569' }}>
                      {s === 1 ? 'Package' : s === 2 ? 'Session' : 'Details'}
                    </p>
                  </div>
                  {s < 3 && (
                    <div className="w-20 h-px mx-3 mb-5 transition duration-300"
                      style={{ backgroundColor: step > s ? '#1E40AF' : '#1E3A8A' }}></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Form Box */}
            <div className="rounded-2xl border border-blue-800 p-8"
              style={{ backgroundColor: '#0a1628' }}>

              {/* STEP 1 — Choose Package */}
              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Choose Your Package
                  </h3>
                  <p className="text-blue-300 text-sm mb-6">
                    Select the package that best fits your needs
                  </p>
                  <div className="space-y-4 mb-8">
                    {packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setFormData({ ...formData, package: pkg.name })}
                        className="flex items-center justify-between p-5 rounded-xl border cursor-pointer transition duration-200"
                        style={{
                          backgroundColor: formData.package === pkg.name ? '#1E3A8A22' : '#060B18',
                          borderColor: formData.package === pkg.name ? '#3B82F6' : '#1E3A8A',
                          boxShadow: formData.package === pkg.name ? '0 0 15px #1E40AF44' : 'none',
                        }}>
                        <div className="flex items-center gap-4">
                          <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition duration-200"
                            style={{ borderColor: formData.package === pkg.name ? '#3B82F6' : '#1E3A8A' }}>
                            {formData.package === pkg.name && (
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                            )}
                          </div>
                          <div>
                            <p className="text-white font-bold">{pkg.name} Package</p>
                            <p className="text-blue-400 text-sm">{pkg.duration}</p>
                          </div>
                        </div>
                        <p className="text-blue-400 font-bold">{pkg.price}</p>
                      </div>
                    ))}
                  </div>

                  {/* Next Button Step 1 */}
                  <button
                    onClick={step1Valid ? handleNext : undefined}
                    disabled={!step1Valid}
                    className="w-full py-4 rounded-xl font-bold text-base transition duration-300 flex items-center justify-center gap-2"
                    style={step1Valid ? activeNextBtn : disabledNextBtn}
                    onMouseEnter={e => {
                      if (step1Valid) {
                        e.currentTarget.style.boxShadow = '0 0 35px #3B82F6bb';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (step1Valid) {
                        e.currentTarget.style.boxShadow = '0 0 20px #1E40AF77';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}>
                    {step1Valid ? (
                      <>
                        Next — Session Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        Select a package to continue
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* STEP 2 — Session Details */}
              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Session Details
                  </h3>
                  <p className="text-blue-300 text-sm mb-6">
                    Tell us about your session
                  </p>
                  <div className="space-y-4 mb-8">

                    {/* Session Type */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-blue-300">
                        Session Type *
                      </label>
                      <select
                        name="sessionType"
                        value={formData.sessionType}
                        onChange={handleChange}
                        className={inputClass}
                        onFocus={e => e.target.style.borderColor = '#3B82F6'}
                        onBlur={e => e.target.style.borderColor = ''}>
                        <option value="">Select session type</option>
                        {sessionTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={inputClass}
                          onFocus={e => e.target.style.borderColor = '#3B82F6'}
                          onBlur={e => e.target.style.borderColor = ''}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">
                          Preferred Time *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={inputClass}
                          onFocus={e => e.target.style.borderColor = '#3B82F6'}
                          onBlur={e => e.target.style.borderColor = ''}>
                          <option value="">Select time</option>
                          <option value="8:00 AM">8:00 AM</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-blue-300">
                        Shoot Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Colombo, Kandy, Your Home, Studio..."
                        className={inputClass}
                        onFocus={e => e.target.style.borderColor = '#3B82F6'}
                        onBlur={e => e.target.style.borderColor = ''}
                      />
                    </div>

                  </div>

                  <div className="flex gap-3">
                    {/* Back Button */}
                    <button
                      onClick={handleBack}
                      className="px-6 py-4 rounded-xl font-bold border transition duration-300 flex items-center gap-2"
                      style={{ borderColor: '#1E40AF', color: '#93C5FD' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#1E3A8A';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#93C5FD';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                      Back
                    </button>

                    {/* Next Button Step 2 */}
                    <button
                      onClick={step2Valid ? handleNext : undefined}
                      disabled={!step2Valid}
                      className="flex-1 py-4 rounded-xl font-bold text-base transition duration-300 flex items-center justify-center gap-2"
                      style={step2Valid ? activeNextBtn : disabledNextBtn}
                      onMouseEnter={e => {
                        if (step2Valid) {
                          e.currentTarget.style.boxShadow = '0 0 35px #3B82F6bb';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (step2Valid) {
                          e.currentTarget.style.boxShadow = '0 0 20px #1E40AF77';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }
                      }}>
                      {step2Valid ? (
                        <>
                          Next — Your Details
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"/>
                          </svg>
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                          Fill all fields to continue
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 — Personal Details */}
              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Your Details
                  </h3>
                  <p className="text-blue-300 text-sm mb-6">
                    How can we reach you to confirm the booking?
                  </p>
                  <div className="space-y-4 mb-8">

                    {/* Name */}
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

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+94 77 123 4567"
                          className={inputClass}
                          onFocus={e => e.target.style.borderColor = '#3B82F6'}
                          onBlur={e => e.target.style.borderColor = ''}
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-blue-300">
                        Special Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any special requirements, preferences, or questions..."
                        className={`${inputClass} resize-none`}
                        onFocus={e => e.target.style.borderColor = '#3B82F6'}
                        onBlur={e => e.target.style.borderColor = ''}
                      />
                    </div>

                    {/* Booking Summary */}
                    <div className="p-4 rounded-xl border border-blue-800"
                      style={{ backgroundColor: '#060B18' }}>
                      <p className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        Booking Summary
                      </p>
                      <div className="space-y-1.5">
                        {[
                          { label: 'Package', value: formData.package },
                          { label: 'Session', value: formData.sessionType },
                          { label: 'Date', value: formData.date },
                          { label: 'Time', value: formData.time },
                          { label: 'Location', value: formData.location },
                        ].map((item, i) => (
                          <p key={i} className="text-xs text-blue-400">
                            {item.label}: <span className="text-white font-medium">{item.value}</span>
                          </p>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="flex gap-3">
                    {/* Back Button */}
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-4 rounded-xl font-bold border transition duration-300 flex items-center gap-2"
                      style={{ borderColor: '#1E40AF', color: '#93C5FD' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#1E3A8A';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#93C5FD';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                      Back
                    </button>

                    {/* Confirm Booking Button */}
                    <button
                      type="submit"
                      disabled={loading || !step3Valid}
                      className="flex-1 py-4 rounded-xl font-bold text-base transition duration-300 flex items-center justify-center gap-2"
                      style={!loading && step3Valid ? activeNextBtn : disabledNextBtn}
                      onMouseEnter={e => {
                        if (!loading && step3Valid) {
                          e.currentTarget.style.boxShadow = '0 0 35px #3B82F6bb';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!loading && step3Valid) {
                          e.currentTarget.style.boxShadow = '0 0 20px #1E40AF77';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }
                      }}>
                      {loading ? (
                        <>
                          <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                          Submitting...
                        </>
                      ) : !step3Valid ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                          Fill all fields to confirm
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Confirm Booking
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Booking;