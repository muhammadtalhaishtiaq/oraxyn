
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-oraxyn-gray mb-6">
                E-commerce Marketing Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Oraxyn's AI-powered platform helps brands optimize their e-commerce advertising 
                across Amazon, Google, Facebook, and other major channels.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register">
                  <Button className="bg-oraxyn-blue hover:bg-oraxyn-darkBlue text-white px-8 py-6 h-auto text-lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-oraxyn-blue text-oraxyn-blue hover:bg-oraxyn-blue/10 px-8 py-6 h-auto text-lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-4">
                Our AI-Powered E-commerce Solutions
              </h2>
              <p className="text-gray-600">
                Oraxyn offers comprehensive solutions for all your e-commerce marketing needs,
                powered by our proprietary AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cross-Channel Advertising",
                  description: "Manage and optimize your ads across Amazon, Google, Facebook, and more from a single platform.",
                  features: [
                    "Unified dashboard",
                    "Cross-channel budget optimization",
                    "Performance comparison",
                    "Automated campaign management"
                  ]
                },
                {
                  title: "Product-Level Optimization",
                  description: "Our AI analyzes each product individually to optimize campaigns down to the product level.",
                  features: [
                    "Product-specific bidding",
                    "Keyword optimization by product",
                    "Performance forecasting",
                    "Competitive analysis"
                  ]
                },
                {
                  title: "AI-Powered Bidding",
                  description: "Machine learning algorithms that adjust bids in real-time to maximize ROI.",
                  features: [
                    "Real-time bid adjustments",
                    "Goal-based optimization",
                    "Seasonality predictions",
                    "Market trend analysis"
                  ]
                },
                {
                  title: "Advanced Reporting",
                  description: "Comprehensive reporting across all channels with actionable insights.",
                  features: [
                    "Cross-channel attribution",
                    "Custom report builder",
                    "Automated performance alerts",
                    "Data visualization tools"
                  ]
                },
                {
                  title: "Campaign Automation",
                  description: "Automate repetitive tasks and let AI handle optimizations while you focus on strategy.",
                  features: [
                    "Automated campaign creation",
                    "A/B testing automation",
                    "Schedule-based adjustments",
                    "Rule-based optimizations"
                  ]
                },
                {
                  title: "Strategic Support",
                  description: "Work with our e-commerce experts to develop and implement effective strategies.",
                  features: [
                    "Dedicated account management",
                    "Strategy development",
                    "Quarterly business reviews",
                    "Industry benchmarking"
                  ]
                }
              ].map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md transition-all hover:shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-oraxyn-gray mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-oraxyn-green mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-oraxyn-blue">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your E-commerce Advertising?
              </h2>
              <p className="text-white/90 mb-10 text-lg">
                Join thousands of brands that use Oraxyn to optimize their advertising and increase sales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register">
                  <Button className="bg-white text-oraxyn-blue hover:bg-gray-100 px-8 py-6 h-auto text-lg">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg">
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

export default Solutions;
