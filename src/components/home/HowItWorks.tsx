
import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Database, BarChart2, Bot, Layers, Link, LineChart } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Integration with Amazon Advertising Channels",
      description: "Our platform connects directly with Amazon Advertising APIs and interfaces, integrating with Amazon Advertising Platform, Amazon Ads, and Amazon Attribution to access campaign data, product listings, and performance metrics.",
      icon: <Link className="h-6 w-6 text-white" />,
      color: "bg-oraxyn-purple"
    },
    {
      title: "Data Collection and Analysis",
      description: "We collect comprehensive data from your Amazon campaigns including click-through rates, conversion rates, sales data, keyword performance, and product-level performance. Our machine learning algorithms analyze this data to identify patterns and opportunities.",
      icon: <Database className="h-6 w-6 text-white" />,
      color: "bg-indigo-500"
    },
    {
      title: "Campaign Optimization",
      description: "Our proprietary machine learning technologies optimize your campaigns across multiple dimensions: bid optimization for keywords, audience targeting refinement, budget allocation across campaigns, and product ad placement optimization.",
      icon: <Bot className="h-6 w-6 text-white" />,
      color: "bg-violet-500"
    },
    {
      title: "Cross-Channel Unification",
      description: "We combine your Amazon campaign data with data from other channels like Facebook and Google to create a comprehensive view of marketing performance and identify how different channels work together to drive sales.",
      icon: <Layers className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Automated Ad Management",
      description: "Our system automatically adjusts ad groups, bids, and targeting based on performance, reducing manual configuration needs while our machine learning predicts optimal product and keyword performance.",
      icon: <LineChart className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Reporting and Attribution",
      description: "We provide unified reporting across all channels and use Amazon Attribution data to measure how off-Amazon ads drive Amazon sales, helping you understand the full customer journey.",
      icon: <BarChart2 className="h-6 w-6 text-white" />,
      color: "bg-oraxyn-purple"
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section 
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-oraxyn-purple section-title ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            How Oraxyn Works
          </h2>
          <p className={`text-oraxyn-purple section-subtitle ${isVisible ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Our AI-powered platform optimizes your Amazon advertising campaigns in six key steps. 
            Here's how we help you maximize your ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Step visualization */}
          <div className={`relative ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 h-[350px] flex items-center justify-center">
                <div className="text-center p-10">
                  <div className={`w-16 h-16 mx-auto rounded-full ${steps[activeStep].color} flex items-center justify-center mb-4 shadow-lg`}>
                    {steps[activeStep].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-oraxyn-gray mb-3">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-oraxyn-purple">
                    Step {activeStep + 1} of {steps.length}
                  </span>
                  <div className="flex space-x-1">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          activeStep === index ? 'bg-oraxyn-purple' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step list */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex cursor-pointer group ${
                  activeStep === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`
                  flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4
                  ${activeStep === index ? step.color : 'bg-gray-200'}
                  ${activeStep !== index ? 'group-hover:bg-gray-300' : ''}
                  transition-colors duration-200
                `}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${
                    activeStep === index ? 'text-oraxyn-purple' : 'text-oraxyn-gray'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description.substring(0, 100)}...</p>
                  
                  {activeStep === index && (
                    <button 
                      className="mt-2 text-oraxyn-purple flex items-center text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Implement detailed view if needed
                      }}
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
