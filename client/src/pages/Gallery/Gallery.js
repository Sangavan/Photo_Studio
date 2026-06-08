import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Gallery() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [clientGallery, setClientGallery] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [galleryError, setGalleryError] = useState('');
  const [, setToken] = useState('');

  // Check if already logged in
  useEffect(() => {
    const savedToken = localStorage.getItem('clientToken');
    const savedUser = localStorage.getItem('clientUser');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setIsLoggedIn(true);
      fetchGallery(savedToken);
    }
  }, []);

  // Fetch gallery from backend
  const fetchGallery = async (authToken) => {
    setGalleryLoading(true);
    setGalleryError('');
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/gallery/my-gallery`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setClientGallery(data);
      } else if (response.status === 404) {
        setGalleryError('No gallery found for your account yet. Please contact SK Colors.');
      } else if (response.status === 410) {
        setGalleryError('Your gallery has expired. Please contact SK Colors Photography.');
      } else {
        setGalleryError('Failed to load gallery. Please try again.');
      }
    } catch (error) {
      setGalleryError('Server error. Please try again.');
    } finally {
      setGalleryLoading(false);
    }
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('clientToken', data.token);
        localStorage.setItem('clientUser', JSON.stringify(data));
        setToken(data.token);
        setIsLoggedIn(true);
        fetchGallery(data.token);
      } else {
        setLoginError(data.message || 'Invalid email or password');
      }
    } catch (error) {
      setLoginError('Server error. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Download single photo
  const handleDownload = async (photo) => {
    try {
      const response = await fetch(photo.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = photo.title || 'photo.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback — open in new tab
      window.open(photo.url, '_blank');
    }
  };

  // Download all photos
  const handleDownloadAll = () => {
    if (!clientGallery) return;
    clientGallery.photos.forEach((photo, index) => {
      setTimeout(() => {
        handleDownload(photo);
      }, index * 500);
    });
  };

  // Sign out
  const handleSignOut = () => {
    localStorage.removeItem('clientToken');
    localStorage.removeItem('clientUser');
    setIsLoggedIn(false);
    setClientGallery(null);
    setToken('');
    setLoginData({ email: '', password: '' });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none border border-blue-800 transition duration-200 bg-blue-950 text-white placeholder-blue-700";

  return (
    <div className="bg-blue-950 min-h-screen">
      <Navbar />

      {!isLoggedIn ? (
        /* LOGIN PAGE */
        <div className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="w-full max-w-md">

            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-blue-700"
                style={{ backgroundColor: '#0a1628' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">Client Portal</h1>
              <p className="text-blue-400 text-sm">Sign in to access your private gallery</p>
            </div>

            {/* Login Form */}
            <div className="rounded-2xl border border-blue-800 p-8"
              style={{ backgroundColor: '#0a1628' }}>

              {/* SK Colors badge */}
              <div className="flex items-center gap-2 mb-6 pb-6 border-b border-blue-800">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#1E40AF' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">SK Colors Photography</p>
                  <p className="text-blue-400 text-xs">Secure Client Access</p>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      className={`${inputClass} pl-10`}
                      onFocus={e => e.target.style.borderColor = '#3B82F6'}
                      onBlur={e => e.target.style.borderColor = ''}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-300">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <input
                      type="password"
                      value={loginData.password}
                      onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                      required
                      placeholder="Enter your password"
                      className={`${inputClass} pl-10`}
                      onFocus={e => e.target.style.borderColor = '#3B82F6'}
                      onBlur={e => e.target.style.borderColor = ''}
                    />
                  </div>
                </div>

                {/* Error Message */}
                {loginError && (
                  <div className="flex items-center gap-2 p-3 rounded-xl border border-red-800 bg-red-950">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <p className="text-red-400 text-xs">{loginError}</p>
                  </div>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                    boxShadow: '0 0 20px #1E40AF77',
                  }}
                  onMouseEnter={e => {
                    if (!loginLoading) {
                      e.currentTarget.style.boxShadow = '0 0 35px #3B82F6bb';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 0 20px #1E40AF77';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                  {loginLoading ? (
                    <>
                      <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                        <polyline points="10 17 15 12 10 7"/>
                        <line x1="15" y1="12" x2="3" y2="12"/>
                      </svg>
                      Sign In to Gallery
                    </>
                  )}
                </button>

              </form>
            </div>

            {/* Back to home */}
            <div className="text-center mt-6">
              <a href="/"
                className="text-blue-400 hover:text-white text-sm transition duration-200 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                Back to SK Colors
              </a>
            </div>

          </div>
        </div>

      ) : (
        /* GALLERY PAGE */
        <div className="pt-24 pb-20 px-4">
          <div className="max-w-6xl mx-auto">

            {galleryLoading ? (
              /* Loading state */
              <div className="text-center py-20">
                <svg className="animate-spin mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                <p className="text-blue-400 text-lg">Loading your gallery...</p>
              </div>

            ) : galleryError ? (
              /* Error state */
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-2xl bg-blue-900 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <p className="text-white font-bold text-xl mb-2">Gallery Not Found</p>
                <p className="text-blue-400 text-sm mb-6 max-w-md mx-auto">{galleryError}</p>
                <button
                  onClick={handleSignOut}
                  className="px-6 py-2.5 rounded-xl font-bold text-sm border border-blue-700 text-blue-300 hover:bg-blue-900 transition duration-200">
                  Sign Out
                </button>
              </div>

            ) : clientGallery ? (
              <>
                {/* Gallery Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                  <div>
                    <p className="text-blue-400 uppercase tracking-widest text-xs font-bold mb-1">
                      Your Private Gallery
                    </p>
                    <h1 className="text-3xl font-bold text-white mb-1">
                      {clientGallery.sessionType}
                    </h1>
                    <p className="text-blue-300 text-sm">
                      {clientGallery.photos.length} photos · Session date: {clientGallery.sessionDate}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Download All */}
                    <button
                      onClick={handleDownloadAll}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                        boxShadow: '0 0 20px #1E40AF55',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = '0 0 30px #3B82F6bb';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = '0 0 20px #1E40AF55';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Download All ({clientGallery.photos.length})
                    </button>

                    {/* Sign Out */}
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm border transition duration-200"
                      style={{ borderColor: '#1E40AF', color: '#93C5FD' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#1E3A8A';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#93C5FD';
                      }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                      </svg>
                      Sign Out
                    </button>
                  </div>
                </div>

                {/* Expiry Info Bar */}
                <div className="flex items-center gap-3 p-4 rounded-xl border border-blue-800 mb-8"
                  style={{ backgroundColor: '#0a1628' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                  <p className="text-blue-300 text-sm">
                    Your gallery is available until{' '}
                    <span className="text-white font-medium">
                      {new Date(clientGallery.expiryDate).toDateString()}
                    </span>
                    . Please download your photos before the expiry date.
                  </p>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {clientGallery.photos.map((photo) => (
                    <div
                      key={photo._id}
                      className="relative group rounded-2xl overflow-hidden border border-blue-800 hover:border-blue-500 transition duration-300"
                      style={{ backgroundColor: '#0a1628' }}>

                      {/* Photo */}
                      <div className="relative cursor-pointer"
                        onClick={() => setSelectedPhoto(photo)}>
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-60 transition duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                              <line x1="11" y1="8" x2="11" y2="14"/>
                              <line x1="8" y1="11" x2="14" y2="11"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Photo info & download */}
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium truncate max-w-32">{photo.title}</p>
                          <p className="text-blue-400 text-xs mt-0.5">{photo.size}</p>
                        </div>
                        <button
                          onClick={() => handleDownload(photo)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition duration-200 border border-blue-700 text-blue-300"
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#1E40AF';
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = '#1E40AF';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#93C5FD';
                            e.currentTarget.style.borderColor = '#1E3A8A';
                          }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}

          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-blue-400 hover:text-white transition duration-200 flex items-center gap-2 text-sm"
              onClick={() => setSelectedPhoto(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Close
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full rounded-2xl border border-blue-800"
            />
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-white font-bold">{selectedPhoto.title}</p>
                <p className="text-blue-400 text-sm">{selectedPhoto.size}</p>
              </div>
              <button
                onClick={() => handleDownload(selectedPhoto)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition duration-300"
                style={{
                  background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                  boxShadow: '0 0 20px #1E40AF55',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 30px #3B82F6bb';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 20px #1E40AF55';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Photo
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Gallery;