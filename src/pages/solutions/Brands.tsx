
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  Check, 
  BarChart, 
  TrendingUp, 
  Zap, 
  PieChart,
  ShoppingCart
} from 'lucide-react';

const Brands = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden">
          {/* Oraxyn-inspired background shape */}
          <div className="absolute bottom-0 right-0 w-full h-1/3 bg-oraxyn-red opacity-10 transform -rotate-3 translate-y-1/2"></div>
          
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-oraxyn-darkBlue mb-6">
                  Accelerate Your E-Commerce Brand's Growth
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Our AI-powered platform helps e-commerce brands maximize their advertising performance 
                  across Amazon, Facebook, Google, and other major channels.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/register">
                    <Button variant="oraxyn-demo" className="font-semibold">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="oraxyn-outline">
                      Schedule a Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://placehold.co/600x400/e9f0ff/0046FF?text=Brand+Growth+Analytics" 
                  alt="Brand Growth Analytics" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-oraxyn-darkBlue mb-4">
                How We Help E-Commerce Brands
              </h2>
              <p className="text-gray-600">
                Our AI-powered platform is specifically designed to address the unique challenges that e-commerce brands face.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart className="h-10 w-10 text-oraxyn-blue" />,
                  title: "Unified Cross-Channel View",
                  description: "Get a comprehensive view of your entire e-commerce advertising ecosystem in a single dashboard."
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-oraxyn-blue" />,
                  title: "Maximize ROAS",
                  description: "Our AI continuously optimizes your campaigns to deliver the highest possible return on ad spend."
                },
                {
                  icon: <ShoppingCart className="h-10 w-10 text-oraxyn-red" />,
                  title: "Product-Level Optimization",
                  description: "Optimize advertising for each product individually to maximize performance across your catalog."
                },
                {
                  icon: <Zap className="h-10 w-10 text-oraxyn-blue" />,
                  title: "AI-Powered Automation",
                  description: "Save time with automated bidding, keyword management, and campaign optimization."
                },
                {
                  icon: <PieChart className="h-10 w-10 text-oraxyn-red" />,
                  title: "Advanced Analytics",
                  description: "Gain deep insights into your advertising performance with detailed reporting and analytics."
                },
                {
                  icon: <Check className="h-10 w-10 text-oraxyn-blue" />,
                  title: "Expert Support",
                  description: "Work with our e-commerce specialists to develop and implement effective strategies."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200 transition-all hover:shadow-lg oraxyn-card">
                  <div className="bg-gray-50 p-3 rounded-full w-fit mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-oraxyn-darkBlue mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-oraxyn-darkBlue mb-4">
                Our E-Commerce Brand Solutions
              </h2>
              <p className="text-gray-600">
                Comprehensive solutions tailored for direct-to-consumer brands.
              </p>
            </div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Amazon Advertising",
                  description: "Maximize your visibility and sales on the world's largest e-commerce platform with AI-optimized campaigns across Sponsored Products, Sponsored Brands, and Sponsored Display.",
                  image: "https://placehold.co/800x500/e9f0ff/0046FF?text=Amazon+Advertising",
                  features: [
                    "Automated bidding and keyword optimization",
                    "Product-level campaign management",
                    "ACOS and ROAS optimization",
                    "Competitive analysis and targeting"
                  ],
                  cta: "Optimize Amazon Ads",
                  link: "/platform/amazon"
                },
                {
                  title: "Google Advertising",
                  description: "Drive traffic and sales through Google Search, Shopping, and Display campaigns, all optimized by our AI for maximum performance.",
                  image: "https://placehold.co/800x500/e2f8e9/00C27C?text=Google+Advertising",
                  features: [
                    "Google Shopping optimization",
                    "Search campaign management",
                    "Display and YouTube ad optimization",
                    "Performance Max campaign support"
                  ],
                  cta: "Boost Google Campaigns",
                  link: "/platform/google"
                },
                {
                  title: "Facebook & Instagram Advertising",
                  description: "Engage potential customers and drive sales with AI-optimized campaigns across Meta's advertising platforms.",
                  image: "https://placehold.co/800x500/fff3e9/FF6F2C?text=Meta+Advertising",
                  features: [
                    "Audience targeting optimization",
                    "Creative performance analysis",
                    "Campaign structure optimization",
                    "Cross-platform attribution"
                  ],
                  cta: "Enhance Social Ads",
                  link: "/platform/meta"
                }
              ].map((solution, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-oraxyn-darkBlue mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-oraxyn-red mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={solution.link}>
                      <Button variant="oraxyn-demo">
                        {solution.cta}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-oraxyn-darkBlue mb-4">
                Brand Success Stories
              </h2>
              <p className="text-gray-600">
                See how other e-commerce brands have achieved remarkable results with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "SmartyPants Vitamins",
                  industry: "Health & Wellness",
                  result: "104% increase in Amazon sales",
                  quote: "The AI-powered platform helped us achieve a full-funnel strategy that significantly increased our sales on Amazon.",
                  image: "https://placehold.co/400x300/e9f0ff/0046FF?text=SmartyPants"
                },
                {
                  name: "Restaurantware",
                  industry: "Hospitality Supplies",
                  result: "300% sales growth",
                  quote: "We saw our sales triple and strengthened our presence in the Home & Kitchen category on Amazon.",
                  image: "https://placehold.co/400x300/e2f8e9/00C27C?text=Restaurantware"
                },
                {
                  name: "Premium Cookware",
                  industry: "Kitchen Products",
                  result: "45% reduction in ACOS",
                  quote: "The AI optimization dramatically improved our advertising efficiency while growing sales.",
                  image: "https://placehold.co/400x300/fff3e9/FF6F2C?text=Premium+Cookware"
                }
              ].map((case_study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg oraxyn-card">
                  <img 
                    src={case_study.image} 
                    alt={case_study.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-oraxyn-darkBlue mb-1">{case_study.name}</h3>
                    <p className="text-oraxyn-red mb-4">{case_study.industry}</p>
                    <p className="text-gray-700 font-semibold mb-2">Results:</p>
                    <p className="text-oraxyn-blue font-bold mb-4">{case_study.result}</p>
                    <div className="oraxyn-success-story p-3 bg-gray-50 italic mb-6">
                      <p className="text-gray-600">"{case_study.quote}"</p>
                    </div>
                    <Link to="/solutions/case-studies">
                      <Button variant="oraxyn-outline" className="w-full">
                        Read Full Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/solutions/case-studies">
                <Button variant="oraxyn-outline">
                  View All Case Studies
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-oraxyn-blue">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Grow Your E-Commerce Brand?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Join thousands of brands that use our platform to optimize their advertising and increase sales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register">
                  <Button className="bg-white text-oraxyn-blue hover:bg-gray-100 px-8 py-6 h-auto text-lg font-semibold">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
