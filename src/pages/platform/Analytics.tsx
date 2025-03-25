
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BarChart2, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Analytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-oraxyn-blue/5 to-oraxyn-blue/10 py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-left animate-fade-in">
                <div className="flex items-center space-x-2 mb-6">
                  <BarChart2 className="h-6 w-6 text-oraxyn-blue" />
                  <span className="text-oraxyn-blue font-medium">Cross-Channel Analytics</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-oraxyn-gray mb-6">
                  Unified Reporting Across All Channels
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  Get a comprehensive view of your e-commerce advertising performance across Amazon, Facebook, Google, and more in one dashboard.
                </p>
                
                <div className="space-y-4 mb-8">
                  {["Cross-channel attribution", "Campaign performance comparison", "Product-level analytics", "Custom reporting dashboards"].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-oraxyn-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/register">
                  <Button size="lg" className="bg-oraxyn-blue hover:bg-oraxyn-darkBlue text-white shadow-lg">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative animate-fade-up">
                <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100">
                  <div className="p-4 mb-6 bg-oraxyn-blue/5 rounded-lg">
                    <h3 className="text-lg font-medium text-oraxyn-gray mb-2">Cross-Channel Dashboard</h3>
                    <div className="h-56 bg-white rounded flex flex-col">
                      <div className="w-full h-12 bg-white rounded-md relative overflow-hidden flex items-center px-4 border-b border-gray-100">
                        <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 p-3">
                        <div className="bg-oraxyn-blue/10 rounded p-3 h-36 flex flex-col">
                          <div className="w-2/3 h-3 bg-gray-200 rounded mb-2"></div>
                          <div className="text-xl font-bold text-oraxyn-blue">$24,680</div>
                          <div className="text-xs text-gray-500 mb-2">Revenue</div>
                          <div className="mt-auto flex items-center">
                            <div className="text-xs font-medium text-oraxyn-green">+24%</div>
                            <div className="ml-1 text-xs text-gray-500">vs last period</div>
                          </div>
                        </div>
                        <div className="bg-oraxyn-orange/10 rounded p-3 h-36 flex flex-col">
                          <div className="w-2/3 h-3 bg-gray-200 rounded mb-2"></div>
                          <div className="text-xl font-bold text-oraxyn-orange">$5,432</div>
                          <div className="text-xs text-gray-500 mb-2">Ad Spend</div>
                          <div className="mt-auto flex items-center">
                            <div className="text-xs font-medium text-oraxyn-green">-12%</div>
                            <div className="ml-1 text-xs text-gray-500">vs last period</div>
                          </div>
                        </div>
                        <div className="bg-oraxyn-green/10 rounded p-3 h-36 flex flex-col">
                          <div className="w-2/3 h-3 bg-gray-200 rounded mb-2"></div>
                          <div className="text-xl font-bold text-oraxyn-green">4.5x</div>
                          <div className="text-xs text-gray-500 mb-2">ROAS</div>
                          <div className="mt-auto flex items-center">
                            <div className="text-xs font-medium text-oraxyn-green">+36%</div>
                            <div className="ml-1 text-xs text-gray-500">vs last period</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-gray-500 mt-2">Sample Analytics Dashboard</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-oraxyn-blue mb-1">100%</div>
                      <div className="text-sm text-gray-600">Cross-channel visibility</div>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-oraxyn-green mb-1">75%</div>
                      <div className="text-sm text-gray-600">Time saved on reporting</div>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-oraxyn-orange mb-1">23%</div>
                      <div className="text-sm text-gray-600">Better budget allocation</div>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-oraxyn-purple mb-1">8+</div>
                      <div className="text-sm text-gray-600">Marketing channels tracked</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content placeholder for the rest of the page */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-4">Comprehensive Analytics Dashboard</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get a unified view of your e-commerce advertising performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((feature) => (
                <div key={feature} className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                  <div className="w-10 h-10 bg-oraxyn-blue/10 text-oraxyn-blue rounded-full flex items-center justify-center font-bold mb-4">
                    {feature}
                  </div>
                  <h3 className="text-xl font-bold text-oraxyn-gray mb-3">
                    {feature === 1 ? "Cross-Channel Attribution" : 
                     feature === 2 ? "Custom Reporting" : 
                     "Performance Insights"}
                  </h3>
                  <p className="text-gray-600">
                    {feature === 1 ? "See how each marketing channel contributes to your overall e-commerce success." : 
                     feature === 2 ? "Create custom reports and dashboards tailored to your specific business needs." : 
                     "Get actionable insights to improve campaign performance and maximize ROI."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analytics;
