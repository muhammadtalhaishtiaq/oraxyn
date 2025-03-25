
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
import AmazonAdvertising from '@/pages/amazon/AmazonAdvertising';
import Meta from '@/pages/platform/Meta';
import CaseStudies from '@/pages/solutions/CaseStudies';
import Pricing from '@/pages/Pricing';
import Blog from '@/pages/resources/Blog';
import Support from '@/pages/resources/Support';
import About from '@/pages/company/About';
import Contact from '@/pages/Contact';
// import Contact from '@/pages/company/Contact';
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
          <Route path="/platform/meta" element={<Meta />} />
          <Route path="/amazon/advertising" element={<AmazonAdvertising />} />
          <Route path="/solutions/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/support" element={<Support />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
