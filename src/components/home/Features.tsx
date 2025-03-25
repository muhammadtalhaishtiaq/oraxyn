
import { useState, useEffect, useRef } from 'react';
import { CheckCircle, BarChart, Zap, Globe, Target, RefreshCw } from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const features = [
    {
      title: "Patented Optimization Technologies",
      description: "Six proprietary machine learning technologies that optimize e-commerce businesses across online marketing channels in 48 hours.",
      icon: <Zap className="h-6 w-6 text-oraxyn-purple" />,
      points: [
        "AI-driven optimization algorithms",
        "Continuous learning and adaptation",
        "Real-time bid adjustment",
        "Campaign performance forecasting"
      ]
    },
    {
      title: "Product-Level Optimization",
      description: "Optimize campaigns down to the product and keyword level for maximum efficiency and ROI.",
      icon: <Target className="h-6 w-6 text-oraxyn-purple" />,
      points: [
        "Individual product performance tracking",
        "Keyword-level bid optimization",
        "Product-specific audience targeting",
        "SKU-level budget allocation"
      ]
    },
    {
      title: "Cross-Channel Management",
      description: "Seamlessly blend cross-channel e-commerce marketing campaigns via one unified platform.",
      icon: <Globe className="h-6 w-6 text-oraxyn-purple" />,
      points: [
        "Single dashboard for all channels",
        "Unified reporting and analytics",
        "Cross-channel attribution modeling",
        "Integrated campaign management"
      ]
    },
    {
      title: "Automated Ads Management",
      description: "Eliminate manual configuration of ad groups, freeing up time for strategic focus.",
      icon: <RefreshCw className="h-6 w-6 text-oraxyn-purple" />,
      points: [
        "Automated bid management",
        "Dynamic keyword optimization",
        "Automated ad copy testing",
        "Schedule-based campaign adjustments"
      ]
    },
    {
      title: "Unified Reporting",
      description: "Comprehensive measurement and attribution reporting across all marketing channels.",
      icon: <BarChart className="h-6 w-6 text-oraxyn-purple" />,
      points: [
        "Cross-channel performance dashboards",
        "Custom report generation",
        "Advanced attribution modeling",
        "ROI and ROAS tracking"
      ]
    }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section 
      id="features" 
      className="py-24 bg-white relative overflow-hidden"
      ref={featuresRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-oraxyn-purple section-title ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            Patented Technology that Powers Growth
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Our AI-powered platform offers a suite of features designed to optimize your e-commerce advertising campaigns and maximize ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature tabs */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'glass-panel shadow-md border-l-4 border-l-oraxyn-blue' 
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start">
                  <div className={`mr-4 p-2 rounded-full ${
                    activeFeature === index ? 'bg-blue-50' : 'bg-gray-50'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${
                      activeFeature === index ? 'text-oraxyn-purple' : 'text-oraxyn-gray'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Feature details */}
          <div className={`glass-panel p-8 h-full ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-oraxyn-purple mb-6">
              {features[activeFeature].title}
            </h3>
            
            <div className="space-y-4">
              {features[activeFeature].points.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-oraxyn-purple mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 py-4 px-6 bg-blue-50 rounded-lg">
              <p className="text-sm text-oraxyn-darkBlue italic">
                "The {features[activeFeature].title.toLowerCase()} feature allowed us to increase our ROAS by 43% within the first month."
              </p>
              <p className="text-sm font-medium text-oraxyn-purple mt-2">
                — Marketing Director, Enterprise E-commerce Brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
