
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visibility after a short delay for animation purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const heroFeatures = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime",
    "SOC 2 Compliant"
  ];

  // Sample e-commerce brands
  const brands = [
    { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" },
    { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
    { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png" },
    { name: "Logitech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logitech_logo.svg/2560px-Logitech_logo.svg.png" }
  ];

  return (
    <div className="relative pt-24 md:pt-28 lg:pt-32 overflow-hidden" style={{ 
      background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Oraxyn-inspired curved background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute bottom-0 right-0 w-full h-full" 
          style={{ 
            backgroundImage: "url('public/lovable-uploads/f7b9b412-05da-4a50-be20-410c3cd2f80d.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15
          }}
        ></div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-oraxyn-red/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-oraxyn-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-oraxyn-red/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-10 pb-20 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className={`text-left space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-2">
              <div className="flex items-center px-3 py-1 text-xs font-medium text-oraxyn-blue bg-oraxyn-blue/10 rounded-full">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-oraxyn-blue"></span>
                AI-Driven Marketing Platform
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
              Transform Your <span className="text-oraxyn-red">Social Media ROI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Our AI engine optimizes your campaigns across all platforms, delivering measurable growth and reducing cost per acquisition.
            </p>
            
            <div className="flex flex-wrap gap-8 pt-2">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-oraxyn-blue" />
                <span className="text-gray-700">14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-oraxyn-blue" />
                <span className="text-gray-700">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-oraxyn-blue" />
                <span className="text-gray-700">Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-oraxyn-blue" />
                <span className="text-gray-700">SOC 2 Compliant</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/register">
                <Button variant="oraxyn-demo" size="lg" className="shadow-lg w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="oraxyn-outline" size="lg" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero image */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-oraxyn-red"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-gray-400">Campaign Analytics</div>
                <div className="w-8"></div>
              </div>
              
              <div className="p-5">
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Conversion</div>
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">+42%</span>
                        <svg className="h-4 w-4 ml-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-oraxyn-blue/10 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">ROAS</div>
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">5.8x</span>
                        <svg className="h-4 w-4 ml-2 text-oraxyn-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-oraxyn-red/10 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">CPA</div>
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">-31%</span>
                        <svg className="h-4 w-4 ml-2 text-oraxyn-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm font-medium text-gray-800">Performance by Channel</div>
                      <div className="text-xs text-gray-500">Last 30 days</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Instagram</span>
                          <span className="font-medium">6.1x ROAS</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-oraxyn-red h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Facebook</span>
                          <span className="font-medium">5.4x ROAS</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-oraxyn-red h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>TikTok</span>
                          <span className="font-medium">4.9x ROAS</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-oraxyn-red h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>LinkedIn</span>
                          <span className="font-medium">3.8x ROAS</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-oraxyn-red h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Monthly Spend</div>
                      <div className="text-xl font-bold">$52,341</div>
                      <div className="text-xs text-green-500 flex items-center mt-1">
                        <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                        18% vs last month
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Revenue Generated</div>
                      <div className="text-xl font-bold">$286,752</div>
                      <div className="text-xs text-green-500 flex items-center mt-1">
                        <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                        24% vs last month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
