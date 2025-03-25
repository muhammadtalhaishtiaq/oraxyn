
import { useState, useEffect, useRef } from 'react';
import { Zap, BarChart2, Users, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const KeyBenefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const benefits = [
    {
      icon: <Zap className="h-7 w-7 text-oraxyn-blue" />,
      title: "48-Hour Integration",
      description: "Get started in under 48 hours with virtually no campaign downtime during integration.",
      color: "bg-oraxyn-blue/10",
      link: "/platform/integration"
    },
    {
      icon: <BarChart2 className="h-7 w-7 text-oraxyn-green" />,
      title: "AI-Driven Optimization",
      description: "Our machine learning algorithms optimize your campaigns down to the product level.",
      color: "bg-oraxyn-green/10",
      link: "/platform/optimization"
    },
    {
      icon: <ShoppingCart className="h-7 w-7 text-oraxyn-orange" />,
      title: "Cross-Channel Management",
      description: "Seamlessly blend e-commerce marketing campaigns across Amazon, Facebook, and Google.",
      color: "bg-oraxyn-orange/10",
      link: "/platform/cross-channel"
    },
    {
      icon: <Users className="h-7 w-7 text-oraxyn-purple" />,
      title: "Dedicated Success Team",
      description: "Work with industry experts to build customized strategies for your business.",
      color: "bg-oraxyn-purple/10",
      link: "/solutions/success-team"
    }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
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
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-oraxyn-gray mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            Why Leading Brands Choose Oraxyn
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            Our patented AI technology optimizes your e-commerce advertising with proven results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 transition-all duration-500 ${benefit.color} hover:shadow-md ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-oraxyn-gray mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              <Link to={benefit.link} className="inline-flex items-center text-oraxyn-blue font-medium hover:underline text-sm">
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 flex justify-center transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="py-6 px-8 border border-oraxyn-blue/20 rounded-lg bg-white shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <div className="text-oraxyn-blue font-bold text-4xl md:text-5xl mr-4">3.2x</div>
                <div className="text-gray-600">
                  <div className="font-medium">Average ROAS Improvement</div>
                  <div className="text-sm">Based on client performance data</div>
                </div>
              </div>
              
              <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
              
              <div className="flex items-center">
                <div className="text-oraxyn-green font-bold text-4xl md:text-5xl mr-4">48h</div>
                <div className="text-gray-600">
                  <div className="font-medium">Fast Implementation</div>
                  <div className="text-sm">No campaign downtime</div>
                </div>
              </div>
              
              <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
              
              <div className="flex items-center">
                <div className="text-oraxyn-purple font-bold text-4xl md:text-5xl mr-4">3400+</div>
                <div className="text-gray-600">
                  <div className="font-medium">Brands Trust Us</div>
                  <div className="text-sm">Across all e-commerce platforms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
