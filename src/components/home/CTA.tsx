
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const benefits = [
    "Get started in less than 48 hours",
    "No campaign downtime during integration",
    "Flat-rate pricing based on ad spend",
    "No long-term contracts or hidden fees"
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

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-blue-50 rounded-tl-full opacity-70"></div>
        <div className="absolute left-0 top-0 w-1/4 h-1/4 bg-blue-50 rounded-br-full opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-5xl mx-auto glass-panel p-8 md:p-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-oraxyn-gray mb-6">
                Ready to Optimize Your <span className="text-oraxyn-blue">E-Commerce Advertising</span>?
              </h2>
              
              <p className="text-gray-600 mb-8">
                Join thousands of successful e-commerce brands leveraging our AI technology to maximize their advertising ROI across Amazon, Facebook, Google, and more.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-oraxyn-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/register">
                <Button size="lg" className="bg-oraxyn-blue hover:bg-oraxyn-darkBlue text-white shadow-lg">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-oraxyn-gray mb-4">
                Request a Demo
              </h3>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-oraxyn-blue focus:border-oraxyn-blue"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-oraxyn-blue focus:border-oraxyn-blue"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-oraxyn-blue focus:border-oraxyn-blue"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-oraxyn-blue focus:border-oraxyn-blue"
                      placeholder="Tell us about your advertising needs"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-oraxyn-blue hover:bg-oraxyn-darkBlue text-white">
                    Request Demo
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our <Link to="/privacy" className="text-oraxyn-blue hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-oraxyn-blue hover:underline">Terms of Service</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
