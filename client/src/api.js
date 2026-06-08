import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add token to every request automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth API calls
export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);
export const getUserProfile = () => API.get('/auth/profile');

// Booking API calls
export const createBooking = (data) => API.post('/bookings', data);
export const getAllBookings = () => API.get('/bookings');
export const updateBooking = (id, data) => API.put(`/bookings/${id}`, data);
export const deleteBooking = (id) => API.delete(`/bookings/${id}`);

// Gallery API calls
export const getMyGallery = () => API.get('/gallery/my-gallery');
export const getAllGalleries = () => API.get('/gallery');
export const notifyClient = (id) => API.post(`/gallery/notify/${id}`);
export const deletePhoto = (galleryId, photoId) =>
  API.delete(`/gallery/${galleryId}/photo/${photoId}`);