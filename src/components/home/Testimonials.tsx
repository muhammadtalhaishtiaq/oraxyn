
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "E-commerce Director, Fashion Retailer",
      quote: "Oraxyn's AI-driven approach revolutionized our Amazon advertising strategy. We've seen a 42% increase in ROAS within just 3 months of implementation.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Marketing Manager, Consumer Electronics",
      quote: "The cross-channel capabilities are game-changing. We're now able to coordinate our advertising efforts across Amazon, Facebook and Google with unprecedented efficiency.",
      rating: 5
    },
    {
      name: "Jessica Williams",
      title: "Digital Strategist, Home Goods Brand",
      quote: "What impressed me most was how quickly we saw results. The onboarding was smooth, and within weeks our advertising performance improved dramatically.",
      rating: 4
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

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 relative overflow-hidden bg-gray-50"
      ref={sectionRef}
    >
      {/* Background elements - Updated for better readability */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-oraxyn-blue/10 rounded-tl-full"></div>
        <div className="absolute left-0 top-0 w-1/4 h-1/4 bg-oraxyn-red/10 rounded-br-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-oraxyn-gray mb-4">
            Success Stories from Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what brands like yours are saying about their experience with Oraxyn
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative">
            <div className="absolute top-6 right-8 text-oraxyn-red opacity-30">
              <Quote size={60} />
            </div>
            
            <div className="mb-6">
              <div className="flex text-oraxyn-orange">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="fill-current" size={20} />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-gray-300" size={20} />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-oraxyn-gray font-medium italic mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-oraxyn-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="ml-4">
                <div className="font-bold text-oraxyn-darkBlue">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600">{testimonials[currentIndex].title}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white text-oraxyn-blue border border-oraxyn-blue/30 flex items-center justify-center hover:bg-oraxyn-blue hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-oraxyn-blue border border-oraxyn-blue/30 flex items-center justify-center hover:bg-oraxyn-blue hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
