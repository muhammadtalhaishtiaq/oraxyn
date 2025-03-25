
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Meta = () => {
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
                  <Users className="h-6 w-6 text-oraxyn-blue" />
                  <span className="text-oraxyn-blue font-medium">Facebook & Instagram Ads</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-oraxyn-gray mb-6">
                  Maximize Social Media Advertising ROI
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  Our AI platform optimizes your Facebook and Instagram ad campaigns to drive conversions and seamlessly integrate with your e-commerce strategy.
                </p>
                
                <div className="space-y-4 mb-8">
                  {["Audience targeting optimization", "Creative performance insights", "Dynamic product ads", "Cross-channel attribution"].map((feature, index) => (
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
                    <h3 className="text-lg font-medium text-oraxyn-gray mb-2">Meta Campaign Performance</h3>
                    <div className="h-56 bg-white rounded flex items-center justify-center">
                      <div className="w-full h-40 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md relative overflow-hidden flex items-end justify-around px-4">
                        <div className="h-3/4 w-12 bg-oraxyn-blue/70 rounded-t-md relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-oraxyn-blue">+32%</div>
                        </div>
                        <div className="h-1/2 w-12 bg-gray-300 rounded-t-md"></div>
                        <div className="h-5/6 w-12 bg-oraxyn-blue/80 rounded-t-md relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-oraxyn-blue">+45%</div>
                        </div>
                        <div className="h-1/3 w-12 bg-gray-300 rounded-t-md"></div>
                        <div className="h-full w-12 bg-oraxyn-blue rounded-t-md relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-oraxyn-blue">+68%</div>
                        </div>
                        <div className="h-2/5 w-12 bg-gray-300 rounded-t-md"></div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-gray-500 mt-2">Before vs After Oraxyn Implementation</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-oraxyn-blue mb-1">38%</div>
                      <div className="text-sm text-gray-600">Average increase in ROAS</div>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-oraxyn-green mb-1">52%</div>
                      <div className="text-sm text-gray-600">Increase in conversion rate</div>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-oraxyn-orange mb-1">21%</div>
                      <div className="text-sm text-gray-600">Lower cost per acquisition</div>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="text-2xl font-bold text-oraxyn-purple mb-1">81%</div>
                      <div className="text-sm text-gray-600">Of clients see results in 2 weeks</div>
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
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Meta ads optimization platform works through a proven process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                  <div className="w-10 h-10 bg-oraxyn-blue/10 text-oraxyn-blue rounded-full flex items-center justify-center font-bold mb-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold text-oraxyn-gray mb-3">
                    {step === 1 ? "Connect Your Meta Ad Accounts" : 
                     step === 2 ? "AI Audience & Creative Analysis" : 
                     "Optimize & Scale Campaigns"}
                  </h3>
                  <p className="text-gray-600">
                    {step === 1 ? "Easily connect your Facebook and Instagram ad accounts through our secure API integration." : 
                     step === 2 ? "Our AI analyzes your audiences, creative performance, and conversion paths." : 
                     "Automatically optimize budget allocation, targeting, and creative elements based on performance."}
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

export default Meta;
