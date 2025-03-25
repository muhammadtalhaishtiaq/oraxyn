
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, BarChart2, Zap, Users, Lock, Globe } from 'lucide-react';

const Enterprise = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Marketing Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Powerful, secure, and scalable platform designed to meet the complex marketing needs of large organizations across all digital channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Enterprise Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="text-gray-600">
                  SOC 2 compliant platform with advanced security features, single sign-on, and role-based access control.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">High Performance</h3>
                <p className="text-gray-600">
                  Built to handle massive datasets and high-volume campaigns with reliability and speed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Infrastructure</h3>
                <p className="text-gray-600">
                  Distributed global infrastructure ensuring low latency and high availability worldwide.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive data analysis tools with custom reporting and business intelligence integration.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                <p className="text-gray-600">
                  Enterprise SLAs with dedicated account management and 24/7 technical support.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Integrations</h3>
                <p className="text-gray-600">
                  Seamless integration with your existing tech stack, data warehouses, and custom APIs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Enterprise Success Stories</h2>
              <p className="text-gray-600">
                See how leading organizations have transformed their marketing with our platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Global Retail Chain</h3>
                  <p className="text-gray-600 mb-4">
                    Achieved 43% increase in ROAS across 12 markets with centralized campaign management.
                  </p>
                  <Link to="/solutions/case-studies" className="text-purple-600 font-medium hover:underline">
                    Read case study →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fortune 500 Technology Company</h3>
                  <p className="text-gray-600 mb-4">
                    Consolidated marketing operations across 8 product lines, reducing costs by 28%.
                  </p>
                  <Link to="/solutions/case-studies" className="text-purple-600 font-medium hover:underline">
                    Read case study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your enterprise marketing?</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to show you how our platform can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Enterprise;
