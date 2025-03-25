
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import Dashboard from '@/pages/Dashboard';
import { AuthProvider } from '@/hooks/useAuth';
import Brands from '@/pages/solutions/Brands';
import Agencies from '@/pages/solutions/Agencies';
import Enterprise from '@/pages/solutions/Enterprise';
import Amazon from '@/pages/platform/Amazon';
import Google from '@/pages/platform/Google';
import Analytics from '@/pages/platform/Analytics';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/solutions/brands" element={<Brands />} />
          <Route path="/solutions/agencies" element={<Agencies />} />
          <Route path="/solutions/enterprise" element={<Enterprise />} />
          <Route path="/platform/amazon" element={<Amazon />} />
          <Route path="/platform/google" element={<Google />} />
          <Route path="/platform/analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
