
import axios from 'axios';

// Create an axios instance with default config
const instance = axios.create({
  baseURL: '/api', // Replace with your API base URL in production
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include auth token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('oraxynToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (e.g., redirect to login)
      localStorage.removeItem('oraxynToken');
      localStorage.removeItem('oraxynUser');
    }
    return Promise.reject(error);
  }
);

export default instance;
