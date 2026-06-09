import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [realBookings, setRealBookings] = useState([]);

  // Upload states
  const [uploadData, setUploadData] = useState({
    clientName: '',
    clientEmail: '',
    sessionType: '',
    sessionDate: '',
  });
  const [uploadFiles, setUploadFiles] = useState([]);
  const [uploadLoading, setUploadLoading] = useState(false);

  // Client search states
  const [clientSearch, setClientSearch] = useState('');
  const [filteredClients, setFilteredClients] = useState([]);
  const [showClientDropdown, setShowClientDropdown] = useState(false);

  // Portfolio states
  const [portfolioPhotos, setPortfolioPhotos] = useState([]);
  const [portfolioFile, setPortfolioFile] = useState(null);
  const [portfolioData, setPortfolioData] = useState({ title: '', category: 'Wedding' });
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [showAddPortfolio, setShowAddPortfolio] = useState(false);
  const [portfolioCategories, setPortfolioCategories] = useState([
    'Wedding', 'Portrait', 'Event', 'Commercial'
  ]);
  const [customCategory, setCustomCategory] = useState('');
  const [showCustomCategory, setShowCustomCategory] = useState(false);

  // Package states
  const [packages, setPackages] = useState([]);
  const [editingPackage, setEditingPackage] = useState(null);
  const [packageLoading, setPackageLoading] = useState(false);
  const [showAddPackage, setShowAddPackage] = useState(false);
  const [newPackage, setNewPackage] = useState({
    name: '',
    price: '',
    duration: '',
    icon: '📷',
    popular: false,
    features: '',
    notIncluded: '',
  });
  const [addPackageLoading, setAddPackageLoading] = useState(false);

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none border border-blue-800 transition duration-200 bg-blue-950 text-white placeholder-blue-700";

  const statusColor = (status) => {
    if (status === 'Confirmed') return { bg: '#065F4622', border: '#34D399', text: '#34D399' };
    if (status === 'Pending') return { bg: '#92400E22', border: '#F59E0B', text: '#F59E0B' };
    if (status === 'Completed') return { bg: '#1E3A8A22', border: '#60A5FA', text: '#60A5FA' };
    if (status === 'Cancelled') return { bg: '#7F1D1D22', border: '#F87171', text: '#F87171' };
    return { bg: '#1E3A8A22', border: '#60A5FA', text: '#60A5FA' };
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>) },
    { id: 'bookings', label: 'Bookings', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>) },
    { id: 'upload', label: 'Upload Photos', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>) },
    { id: 'portfolio', label: 'Portfolio', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>) },
    { id: 'packages', label: 'Packages', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>) },
  ];

  // Stats
  const stats = [
    { label: 'Total Bookings', value: realBookings.length > 0 ? realBookings.length.toString() : '0', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>), color: '#1E40AF' },
    { label: 'Pending Bookings', value: realBookings.filter(b => b.status === 'Pending').length.toString(), icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>), color: '#92400E' },
    { label: 'Confirmed Bookings', value: realBookings.filter(b => b.status === 'Confirmed').length.toString(), icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>), color: '#065F46' },
    { label: 'Completed Sessions', value: realBookings.filter(b => b.status === 'Completed').length.toString(), icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>), color: '#4C1D95' },
  ];

  // Load portfolio
  const loadPortfolio = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/portfolio`);
      if (response.ok) {
        const data = await response.json();
        setPortfolioPhotos(data);
        const existingCategories = [...new Set(data.map(p => p.category))];
        const allCategories = [...new Set(['Wedding', 'Portrait', 'Event', 'Commercial', ...existingCategories])];
        setPortfolioCategories(allCategories);
      }
    } catch (error) {
      console.log('Portfolio load error:', error);
    }
  };

  // Add portfolio photo
  const handleAddPortfolioPhoto = async () => {
    if (!portfolioFile) { alert('Please select a photo'); return; }
    setPortfolioLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      formData.append('photo', portfolioFile);
      formData.append('title', portfolioData.title || 'Photo');
      formData.append('category', portfolioData.category);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/portfolio`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (response.ok) {
        alert('Photo added to portfolio!');
        setPortfolioFile(null);
        setPortfolioData({ title: '', category: 'Wedding' });
        setShowAddPortfolio(false);
        loadPortfolio();
      } else {
        alert('Failed to add photo');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setPortfolioLoading(false);
    }
  };

  // Delete portfolio photo
  const handleDeletePortfolioPhoto = async (id) => {
    if (!window.confirm('Are you sure you want to remove this photo?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/portfolio/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        loadPortfolio();
      } else {
        alert('Failed to delete photo');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  // Load packages
  const loadPackages = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/packages`);
      if (response.ok) {
        const data = await response.json();
        setPackages(data);
      }
    } catch (error) {
      console.log('Packages load error:', error);
    }
  };

  // Update package
  const handleUpdatePackage = async () => {
    if (!editingPackage) return;
    setPackageLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/packages/${editingPackage._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(editingPackage),
      });
      if (response.ok) {
        alert('Package updated successfully!');
        setEditingPackage(null);
        loadPackages();
      } else {
        alert('Failed to update package');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setPackageLoading(false);
    }
  };

  // Create package
  const handleCreatePackage = async () => {
    if (!newPackage.name || !newPackage.price || !newPackage.duration) {
      alert('Please fill name, price and duration');
      return;
    }
    setAddPackageLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/packages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          ...newPackage,
          features: newPackage.features.split('\n').filter(f => f.trim()),
          notIncluded: newPackage.notIncluded.split('\n').filter(f => f.trim()),
        }),
      });
      if (response.ok) {
        alert('Package created successfully!');
        setShowAddPackage(false);
        setNewPackage({ name: '', price: '', duration: '', icon: '📷', popular: false, features: '', notIncluded: '' });
        loadPackages();
      } else {
        alert('Failed to create package');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setAddPackageLoading(false);
    }
  };

  // Update booking status
  const updateBookingStatus = async (id, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      if (response.ok) {
        const bookingsRes = await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (bookingsRes.ok) {
          const bookingsData = await bookingsRes.json();
          setRealBookings(bookingsData);
        }
        alert(`Booking ${status} successfully!`);
      }
    } catch (error) {
      alert('Error updating booking');
    }
  };

  // Upload photos
  const handleUploadPhotos = async () => {
    if (!uploadData.clientName || !uploadData.clientEmail || !uploadData.sessionType || !uploadData.sessionDate) {
      alert('Please fill in all client details');
      return;
    }
    if (uploadFiles.length === 0) { alert('Please select photos to upload'); return; }
    setUploadLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      formData.append('clientName', uploadData.clientName);
      formData.append('clientEmail', uploadData.clientEmail);
      formData.append('sessionType', uploadData.sessionType);
      formData.append('sessionDate', uploadData.sessionDate);
      uploadFiles.forEach(file => formData.append('photos', file));
      const response = await fetch(`${process.env.REACT_APP_API_URL}/gallery/upload`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        await fetch(`${process.env.REACT_APP_API_URL}/gallery/notify/${data.gallery._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ tempPassword: data.tempPassword }),
        });
        alert(`✓ Photos uploaded and client notified at ${uploadData.clientEmail}!`);
        setUploadFiles([]);
        setUploadData({ clientName: '', clientEmail: '', sessionType: '', sessionDate: '' });
        setClientSearch('');
      } else {
        alert(data.message || 'Upload failed');
      }
    } catch (error) {
      alert('Upload error: ' + error.message);
    } finally {
      setUploadLoading(false);
    }
  };

  // Admin login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (response.ok && data.role === 'admin') {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('admin', JSON.stringify(data));
        setIsLoggedIn(true);
        const bookingsRes = await fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
          headers: { Authorization: `Bearer ${data.token}` }
        });
        if (bookingsRes.ok) {
          const bookingsData = await bookingsRes.json();
          setRealBookings(bookingsData);
        }
        loadPortfolio();
        loadPackages();
      } else if (data.role !== 'admin') {
        setLoginError('You are not authorized as admin');
      } else {
        setLoginError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setLoginError('Server error. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const displayBookings = realBookings.length > 0 ? realBookings : [];

  return (
    <div className="bg-blue-950 min-h-screen">

      {!isLoggedIn ? (
        /* ADMIN LOGIN */
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-blue-700" style={{ backgroundColor: '#0a1628' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">Admin Panel</h1>
              <p className="text-blue-400 text-sm">SK Colors Photography — Secure Admin Access</p>
            </div>

            <div className="rounded-2xl border border-blue-800 p-8" style={{ backgroundColor: '#0a1628' }}>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-300">Admin Email</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <input type="email" value={loginData.email} onChange={e => setLoginData({ ...loginData, email: e.target.value })} required placeholder="example@gmail.com" className={`${inputClass} pl-10`} onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-300">Password</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <input type="password" value={loginData.password} onChange={e => setLoginData({ ...loginData, password: e.target.value })} required placeholder="Enter admin password" className={`${inputClass} pl-10`} onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                  </div>
                </div>
                {loginError && (
                  <div className="flex items-center gap-2 p-3 rounded-xl border border-red-800 bg-red-950">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <p className="text-red-400 text-xs">{loginError}</p>
                  </div>
                )}
                <button type="submit" disabled={loginLoading}
                  className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition duration-300 flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', boxShadow: '0 0 20px #1E40AF77' }}
                  onMouseEnter={e => { if (!loginLoading) { e.currentTarget.style.boxShadow = '0 0 35px #3B82F6bb'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px #1E40AF77'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {loginLoading ? (<><svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Signing in...</>) : (<><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Access Admin Panel</>)}
                </button>
              </form>
            </div>

            <div className="text-center mt-6">
              <Link to="/" className="text-blue-400 hover:text-white text-sm transition duration-200 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                Back to SK Colors
              </Link>
            </div>
          </div>
        </div>

      ) : (
        /* ADMIN DASHBOARD */
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <div className="w-64 flex-shrink-0 border-r flex flex-col" style={{ backgroundColor: '#060B18', borderColor: '#1E40AF' }}>
            <div className="p-6 border-b" style={{ borderColor: '#1E40AF' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1E40AF' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </div>
                <div>
                  <p className="text-white font-black text-sm">SK <span style={{ color: '#3B82F6' }}>Colors</span></p>
                  <p className="text-blue-400 text-xs">Admin Panel</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(item => (
                <button key={item.id} onClick={() => setActiveTab(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition duration-200 text-left"
                  style={{ backgroundColor: activeTab === item.id ? '#1E3A8A' : 'transparent', color: activeTab === item.id ? '#ffffff' : '#93C5FD' }}
                  onMouseEnter={e => { if (activeTab !== item.id) e.currentTarget.style.backgroundColor = '#1E3A8A44'; }}
                  onMouseLeave={e => { if (activeTab !== item.id) e.currentTarget.style.backgroundColor = 'transparent'; }}>
                  {item.icon}{item.label}
                </button>
              ))}
            </nav>

            <div className="p-4 border-t" style={{ borderColor: '#1E40AF' }}>
              <button
                onClick={() => { localStorage.removeItem('adminToken'); localStorage.removeItem('admin'); setIsLoggedIn(false); setRealBookings([]); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition duration-200"
                style={{ color: '#93C5FD' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#7F1D1D44'; e.currentTarget.style.color = '#FCA5A5'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#93C5FD'; }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <div className="flex items-center justify-between px-8 py-5 border-b" style={{ backgroundColor: '#060B18', borderColor: '#1E40AF' }}>
              <div>
                <h1 className="text-white font-bold text-xl capitalize">{activeTab}</h1>
                <p className="text-blue-400 text-xs mt-0.5">SK Colors Photography Admin</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Sangavan K.</p>
                  <p className="text-blue-400 text-xs">Administrator</p>
                </div>
              </div>
            </div>

            <div className="p-8">

              {/* DASHBOARD TAB */}
              {activeTab === 'dashboard' && (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl border border-blue-800" style={{ backgroundColor: '#0a1628' }}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.color + '33' }}>
                            {stat.icon}
                          </div>
                        </div>
                        <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
                        <p className="text-blue-400 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-blue-800" style={{ backgroundColor: '#0a1628' }}>
                    <div className="flex items-center justify-between p-6 border-b border-blue-800">
                      <h2 className="text-white font-bold text-lg">Recent Bookings</h2>
                      <button onClick={() => setActiveTab('bookings')} className="text-blue-400 hover:text-white text-sm transition duration-200 flex items-center gap-1">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                      </button>
                    </div>
                    <div className="divide-y divide-blue-900">
                      {displayBookings.length > 0 ? (
                        displayBookings.slice(0, 3).map(booking => (
                          <div key={booking._id} className="flex items-center justify-between p-5">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 text-sm font-bold">
                                {booking.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-white text-sm font-medium">{booking.name}</p>
                                <p className="text-blue-400 text-xs">{booking.sessionType} · {booking.date}</p>
                              </div>
                            </div>
                            <span className="text-xs font-bold px-3 py-1 rounded-full border"
                              style={{ backgroundColor: statusColor(booking.status).bg, borderColor: statusColor(booking.status).border, color: statusColor(booking.status).text }}>
                              {booking.status}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center text-blue-400 text-sm">No bookings yet.</div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* BOOKINGS TAB */}
              {activeTab === 'bookings' && (
                <div className="rounded-2xl border border-blue-800 overflow-hidden" style={{ backgroundColor: '#0a1628' }}>
                  <div className="p-6 border-b border-blue-800">
                    <h2 className="text-white font-bold text-lg">All Bookings</h2>
                    <p className="text-blue-400 text-sm mt-1">{displayBookings.length} total bookings</p>
                  </div>
                  <div className="divide-y divide-blue-900">
                    {displayBookings.length > 0 ? (
                      displayBookings.map(booking => (
                        <div key={booking._id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 font-bold">
                              {booking.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-white font-medium">{booking.name}</p>
                              <p className="text-blue-400 text-xs mt-0.5">{booking.sessionType}</p>
                              <p className="text-blue-600 text-xs">{booking.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm flex-wrap">
                            <div><p className="text-blue-400 text-xs">Date</p><p className="text-white">{booking.date}</p></div>
                            <div><p className="text-blue-400 text-xs">Time</p><p className="text-white">{booking.time}</p></div>
                            <div><p className="text-blue-400 text-xs">Package</p><p className="text-white">{booking.package}</p></div>
                            <span className="text-xs font-bold px-3 py-1 rounded-full border"
                              style={{ backgroundColor: statusColor(booking.status).bg, borderColor: statusColor(booking.status).border, color: statusColor(booking.status).text }}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <button onClick={() => updateBookingStatus(booking._id, 'Confirmed')} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-green-700 text-green-400 hover:bg-green-900 hover:text-white transition duration-200">Confirm</button>
                            <button onClick={() => updateBookingStatus(booking._id, 'Completed')} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-700 text-blue-300 hover:bg-blue-800 hover:text-white transition duration-200">Complete</button>
                            <button onClick={() => updateBookingStatus(booking._id, 'Cancelled')} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-red-800 text-red-400 hover:bg-red-900 hover:text-white transition duration-200">Cancel</button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-12 text-center">
                        <p className="text-blue-400 text-sm">No bookings yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* UPLOAD PHOTOS TAB */}
              {activeTab === 'upload' && (
                <div>
                  <div className="rounded-2xl border border-blue-800 p-8 mb-6" style={{ backgroundColor: '#0a1628' }}>
                    <h2 className="text-white font-bold text-lg mb-2">Upload Client Photos</h2>
                    <p className="text-blue-400 text-sm mb-6">Search for a client or fill in details manually</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

                      {/* Client Search */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium mb-2 text-blue-300">Search Client by Name</label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                          </div>
                          <input
                            type="text"
                            value={clientSearch}
                            onChange={e => {
                              setClientSearch(e.target.value);
                              if (e.target.value.length > 0) {
                                const filtered = realBookings.filter(b =>
                                  b.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                                  b.email.toLowerCase().includes(e.target.value.toLowerCase())
                                );
                                setFilteredClients(filtered);
                                setShowClientDropdown(true);
                              } else {
                                setShowClientDropdown(false);
                                setFilteredClients([]);
                              }
                            }}
                            onFocus={() => { if (clientSearch.length > 0) setShowClientDropdown(true); }}
                            placeholder="Type client name to search..."
                            className={`${inputClass} pl-10`}
                          />

                          {/* Dropdown results */}
                          {showClientDropdown && filteredClients.length > 0 && (
                            <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-xl border border-blue-700 overflow-hidden shadow-xl" style={{ backgroundColor: '#060B18' }}>
                              {filteredClients.map(client => (
                                <div key={client._id}
                                  className="flex items-center justify-between px-4 py-3 hover:bg-blue-900 cursor-pointer border-b border-blue-900 transition duration-150"
                                  onClick={() => {
                                    setUploadData({ clientName: client.name, clientEmail: client.email, sessionType: client.sessionType, sessionDate: client.date });
                                    setClientSearch(client.name);
                                    setShowClientDropdown(false);
                                  }}>
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-blue-300 text-sm font-bold">{client.name.charAt(0)}</div>
                                    <div>
                                      <p className="text-white text-sm font-medium">{client.name}</p>
                                      <p className="text-blue-400 text-xs">{client.email}</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-blue-300 text-xs">{client.sessionType}</p>
                                    <p className="text-blue-500 text-xs">{client.date}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {showClientDropdown && filteredClients.length === 0 && clientSearch.length > 0 && (
                            <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-xl border border-blue-700 px-4 py-3" style={{ backgroundColor: '#060B18' }}>
                              <p className="text-blue-400 text-sm">No clients found. Fill in details manually below.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">Client Name *</label>
                        <input type="text" value={uploadData.clientName} onChange={e => setUploadData({ ...uploadData, clientName: e.target.value })} placeholder="e.g. Priya Silva" className={inputClass} onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">Client Email *</label>
                        <input type="email" value={uploadData.clientEmail} onChange={e => setUploadData({ ...uploadData, clientEmail: e.target.value })} placeholder="client@email.com" className={inputClass} onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">Session Type *</label>
                        <input type="text" value={uploadData.sessionType} onChange={e => setUploadData({ ...uploadData, sessionType: e.target.value })} placeholder="e.g. Wedding Photography" className={inputClass} onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-blue-300">Session Date *</label>
                        <input type="date" value={uploadData.sessionDate} onChange={e => setUploadData({ ...uploadData, sessionDate: e.target.value })} className={inputClass} />
                      </div>
                    </div>

                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-blue-700 rounded-2xl p-12 text-center hover:border-blue-500 transition duration-200 cursor-pointer" style={{ backgroundColor: '#060B18' }} onClick={() => document.getElementById('photo-upload').click()}>
                      <input id="photo-upload" type="file" multiple accept="image/jpeg,image/png" className="hidden" onChange={e => setUploadFiles(Array.from(e.target.files))} />
                      <div className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                      </div>
                      {uploadFiles.length > 0 ? (
                        <div><p className="text-white font-bold mb-1">{uploadFiles.length} photos selected</p><p className="text-blue-400 text-sm">Click to change selection</p></div>
                      ) : (
                        <div><p className="text-white font-bold mb-2">Click to select photos</p><p className="text-blue-400 text-sm mb-2">or drag and drop</p><p className="text-blue-600 text-xs">Supports: JPG, PNG · Max 20MB per file</p></div>
                      )}
                    </div>

                    {uploadFiles.length > 0 && (
                      <div className="mt-4 p-4 rounded-xl border border-blue-800" style={{ backgroundColor: '#060B18' }}>
                        <p className="text-white text-sm font-medium mb-2">{uploadFiles.length} files selected:</p>
                        <div className="space-y-1 max-h-32 overflow-y-auto">
                          {uploadFiles.map((file, i) => (
                            <div key={i} className="flex items-center justify-between text-xs">
                              <span className="text-blue-300">{file.name}</span>
                              <span className="text-blue-500">{(file.size / (1024 * 1024)).toFixed(1)} MB</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {uploadLoading && (
                      <div className="mt-4 p-4 rounded-xl border border-blue-800 text-center" style={{ backgroundColor: '#060B18' }}>
                        <div className="flex items-center justify-center gap-2">
                          <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                          <p className="text-blue-400 text-sm">Uploading photos to Cloudinary... please wait</p>
                        </div>
                      </div>
                    )}

                    <button onClick={handleUploadPhotos} disabled={uploadLoading || uploadFiles.length === 0}
                      className="mt-6 w-full py-3.5 rounded-xl font-bold text-white text-sm transition duration-300 flex items-center justify-center gap-2"
                      style={{ background: uploadFiles.length > 0 && !uploadLoading ? 'linear-gradient(135deg, #1E40AF, #3B82F6)' : '#1e3a8a44', boxShadow: uploadFiles.length > 0 && !uploadLoading ? '0 0 20px #1E40AF77' : 'none', cursor: uploadFiles.length === 0 || uploadLoading ? 'not-allowed' : 'pointer' }}
                      onMouseEnter={e => { if (uploadFiles.length > 0 && !uploadLoading) { e.currentTarget.style.boxShadow = '0 0 35px #3B82F6bb'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = uploadFiles.length > 0 ? '0 0 20px #1E40AF77' : 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      {uploadLoading ? 'Uploading...' : 'Upload & Notify Client'}
                    </button>
                  </div>
                </div>
              )}

              {/* PORTFOLIO TAB */}
              {activeTab === 'portfolio' && (
                <div className="rounded-2xl border border-blue-800 p-8" style={{ backgroundColor: '#0a1628' }}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-white font-bold text-lg">Portfolio Manager</h2>
                      <p className="text-blue-400 text-sm mt-1">{portfolioPhotos.length} photos in portfolio</p>
                    </div>
                    <button onClick={() => setShowAddPortfolio(!showAddPortfolio)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition duration-300"
                      style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', boxShadow: '0 0 20px #1E40AF55' }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px #3B82F6bb'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px #1E40AF55'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      Add Photo
                    </button>
                  </div>

                  {/* Add Photo Form */}
                  {showAddPortfolio && (
                    <div className="mb-6 p-6 rounded-xl border border-blue-700" style={{ backgroundColor: '#060B18' }}>
                      <h3 className="text-white font-bold text-sm mb-4">Add New Portfolio Photo</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Photo Title</label>
                          <input type="text" value={portfolioData.title} onChange={e => setPortfolioData({ ...portfolioData, title: e.target.value })} placeholder="e.g. Beautiful Wedding Moment" className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Category</label>
                          {showCustomCategory ? (
                            <div className="flex gap-2">
                              <input type="text" value={customCategory} onChange={e => setCustomCategory(e.target.value)} placeholder="Type new category name..." className="flex-1 px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                              <button onClick={() => { if (customCategory.trim()) { setPortfolioCategories([...portfolioCategories, customCategory.trim()]); setPortfolioData({ ...portfolioData, category: customCategory.trim() }); setCustomCategory(''); } setShowCustomCategory(false); }} className="px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition duration-200">Add</button>
                              <button onClick={() => setShowCustomCategory(false)} className="px-3 py-2 rounded-lg border border-blue-700 text-blue-300 text-xs hover:bg-blue-900 transition duration-200">Cancel</button>
                            </div>
                          ) : (
                            <div className="flex gap-2">
                              <select value={portfolioData.category} onChange={e => setPortfolioData({ ...portfolioData, category: e.target.value })} className="flex-1 px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white">
                                {portfolioCategories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
                              </select>
                              <button onClick={() => setShowCustomCategory(true)} className="px-3 py-2 rounded-lg border border-blue-700 text-blue-300 text-xs hover:bg-blue-900 transition duration-200 whitespace-nowrap flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                New
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="border-2 border-dashed border-blue-700 rounded-xl p-6 text-center cursor-pointer hover:border-blue-500 transition duration-200 mb-4" onClick={() => document.getElementById('portfolio-upload').click()}>
                        <input id="portfolio-upload" type="file" accept="image/jpeg,image/png" className="hidden" onChange={e => setPortfolioFile(e.target.files[0])} />
                        {portfolioFile ? (<p className="text-white text-sm font-medium">{portfolioFile.name}</p>) : (<p className="text-blue-400 text-sm">Click to select photo</p>)}
                      </div>
                      <div className="flex gap-3">
                        <button onClick={handleAddPortfolioPhoto} disabled={portfolioLoading} className="flex-1 py-2.5 rounded-xl font-bold text-white text-sm transition duration-200" style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)' }}>
                          {portfolioLoading ? 'Uploading...' : 'Upload to Portfolio'}
                        </button>
                        <button onClick={() => setShowAddPortfolio(false)} className="px-5 py-2.5 rounded-xl font-bold text-sm border border-blue-700 text-blue-300 hover:bg-blue-900 transition duration-200">Cancel</button>
                      </div>
                    </div>
                  )}

                  {/* Photos Grid */}
                  {portfolioPhotos.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {portfolioPhotos.map((photo) => (
                        <div key={photo._id} className="relative group rounded-xl overflow-hidden border border-blue-800">
                          <img src={photo.url} alt={photo.title} className="w-full h-36 object-cover" />
                          <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-70 transition duration-300"></div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 gap-2">
                            <p className="text-white text-xs font-bold">{photo.category}</p>
                            <button onClick={() => handleDeletePortfolioPhoto(photo._id)} className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition duration-200">Remove</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-blue-400 text-sm">No portfolio photos yet.</p>
                      <p className="text-blue-600 text-xs mt-1">Click "Add Photo" to add your first portfolio photo.</p>
                    </div>
                  )}
                </div>
              )}

              {/* PACKAGES TAB */}
              {activeTab === 'packages' && (
                <div className="rounded-2xl border border-blue-800 p-8" style={{ backgroundColor: '#0a1628' }}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-white font-bold text-lg">Package Manager</h2>
                      <p className="text-blue-400 text-sm mt-1">Create, edit and manage your packages</p>
                    </div>
                    <button onClick={() => setShowAddPackage(!showAddPackage)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition duration-300"
                      style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', boxShadow: '0 0 20px #1E40AF55' }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px #3B82F6bb'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px #1E40AF55'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      Add Package
                    </button>
                  </div>

                  {/* Add New Package Form */}
                  {showAddPackage && (
                    <div className="mb-6 p-6 rounded-xl border border-blue-600" style={{ backgroundColor: '#060B18' }}>
                      <h3 className="text-white font-bold text-sm mb-4">Create New Package</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Package Name *</label>
                          <input type="text" value={newPackage.name} onChange={e => setNewPackage({ ...newPackage, name: e.target.value })} placeholder="e.g. Gold Package" className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Price *</label>
                          <input type="text" value={newPackage.price} onChange={e => setNewPackage({ ...newPackage, price: e.target.value })} placeholder="e.g. LKR 75,000" className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Duration *</label>
                          <input type="text" value={newPackage.duration} onChange={e => setNewPackage({ ...newPackage, duration: e.target.value })} placeholder="e.g. 6 Hours" className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Icon (emoji)</label>
                          <input type="text" value={newPackage.icon} onChange={e => setNewPackage({ ...newPackage, icon: e.target.value })} placeholder="e.g. 🥇" className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                          <label className="text-blue-300 text-sm font-medium">Mark as Most Popular</label>
                          <input type="checkbox" checked={newPackage.popular} onChange={e => setNewPackage({ ...newPackage, popular: e.target.checked })} className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-xs font-medium mb-2 text-blue-300">Features (one per line)</label>
                        <textarea rows={4} value={newPackage.features} onChange={e => setNewPackage({ ...newPackage, features: e.target.value })} placeholder={"4 Hour Photo Session\n100 Edited Photos\nOnline Gallery Access"} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white resize-none" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                      </div>
                      <div className="mb-4">
                        <label className="block text-xs font-medium mb-2 text-blue-300">Not Included (one per line)</label>
                        <textarea rows={3} value={newPackage.notIncluded} onChange={e => setNewPackage({ ...newPackage, notIncluded: e.target.value })} placeholder={"Video Coverage\nSecond Photographer"} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white resize-none" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                      </div>
                      <div className="flex gap-3">
                        <button onClick={handleCreatePackage} disabled={addPackageLoading} className="flex-1 py-2.5 rounded-xl font-bold text-white text-sm transition duration-200" style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)' }}>
                          {addPackageLoading ? 'Creating...' : 'Create Package'}
                        </button>
                        <button onClick={() => setShowAddPackage(false)} className="px-5 py-2.5 rounded-xl font-bold text-sm border border-blue-700 text-blue-300 hover:bg-blue-900 transition duration-200">Cancel</button>
                      </div>
                    </div>
                  )}

                  {/* Edit Package Form */}
                  {editingPackage && (
                    <div className="mb-6 p-6 rounded-xl border border-blue-600" style={{ backgroundColor: '#060B18' }}>
                      <h3 className="text-white font-bold text-sm mb-4">Edit {editingPackage.name} Package</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Package Name</label>
                          <input type="text" value={editingPackage.name} onChange={e => setEditingPackage({ ...editingPackage, name: e.target.value })} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Price</label>
                          <input type="text" value={editingPackage.price} onChange={e => setEditingPackage({ ...editingPackage, price: e.target.value })} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-2 text-blue-300">Duration</label>
                          <input type="text" value={editingPackage.duration} onChange={e => setEditingPackage({ ...editingPackage, duration: e.target.value })} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                        </div>
                        <div className="flex items-center gap-3 pt-5">
                          <label className="text-blue-300 text-sm font-medium">Most Popular</label>
                          <input type="checkbox" checked={editingPackage.popular} onChange={e => setEditingPackage({ ...editingPackage, popular: e.target.checked })} className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-xs font-medium mb-2 text-blue-300">Features (one per line)</label>
                        <textarea rows={5} value={editingPackage.features.join('\n')} onChange={e => setEditingPackage({ ...editingPackage, features: e.target.value.split('\n').filter(f => f.trim()) })} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none border border-blue-800 bg-blue-950 text-white resize-none" onFocus={e => e.target.style.borderColor = '#3B82F6'} onBlur={e => e.target.style.borderColor = ''} />
                      </div>
                      <div className="flex gap-3">
                        <button onClick={handleUpdatePackage} disabled={packageLoading} className="flex-1 py-2.5 rounded-xl font-bold text-white text-sm transition duration-200" style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)' }}>
                          {packageLoading ? 'Saving...' : 'Save Changes'}
                        </button>
                        <button onClick={() => setEditingPackage(null)} className="px-5 py-2.5 rounded-xl font-bold text-sm border border-blue-700 text-blue-300 hover:bg-blue-900 transition duration-200">Cancel</button>
                      </div>
                    </div>
                  )}

                  {/* Packages List */}
                  <div className="space-y-4">
                    {packages.map((pkg) => (
                      <div key={pkg._id} className="flex items-center justify-between p-5 rounded-xl border border-blue-800 hover:border-blue-600 transition duration-200">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-xl">{pkg.icon}</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-white font-bold">{pkg.name} Package</p>
                              {pkg.popular && (<span className="text-xs px-2 py-0.5 rounded-full bg-blue-900 text-blue-400 border border-blue-700">Popular</span>)}
                            </div>
                            <p className="text-blue-400 text-xs mt-0.5">{pkg.duration} · {pkg.features.length} features</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-blue-400 font-bold">{pkg.price}</p>
                          <button onClick={() => setEditingPackage({ ...pkg })} className="px-4 py-2 rounded-lg border border-blue-700 text-blue-300 hover:bg-blue-800 hover:text-white text-xs font-medium transition duration-200 flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;