
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Building, Users, BarChart2, ArrowRight, CheckCircle2 } from 'lucide-react';

const Agencies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empower Your Agency with Advanced AI Marketing Tools
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Scale your agency operations, automate routine tasks, and deliver exceptional results to your clients with our platform designed specifically for marketing agencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Agencies Choose Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">White-Label Solutions</h3>
                <p className="text-gray-600">
                  Rebrand our platform with your agency's logo and identity to provide a seamless experience for your clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Management</h3>
                <p className="text-gray-600">
                  Easily manage multiple client accounts from a single dashboard with role-based access control.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Reporting</h3>
                <p className="text-gray-600">
                  Generate beautiful, customizable reports that showcase your agency's impact and value to clients.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Agency Pricing Plans</h2>
              <p className="text-gray-600">
                Flexible pricing options designed to grow with your agency
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <div className="text-3xl font-bold mb-1">$199<span className="text-lg font-normal text-gray-500">/mo</span></div>
                  <p className="text-gray-500 mb-4">For small agencies</p>
                  <Button className="w-full">Get Started</Button>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Up to 5 client accounts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Basic reporting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Standard support</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md border border-purple-200 overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 uppercase">
                  Most Popular
                </div>
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <div className="text-3xl font-bold mb-1">$499<span className="text-lg font-normal text-gray-500">/mo</span></div>
                  <p className="text-gray-500 mb-4">For growing agencies</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Up to 15 client accounts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Advanced reporting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>White-label dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-1">$999<span className="text-lg font-normal text-gray-500">/mo</span></div>
                  <p className="text-gray-500 mb-4">For large agencies</p>
                  <Button className="w-full">Contact Sales</Button>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Unlimited client accounts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Custom reporting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>API access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agencies;
