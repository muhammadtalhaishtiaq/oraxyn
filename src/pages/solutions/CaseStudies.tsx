
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, DollarSign, Users, ShoppingCart } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fashion Retailer Increases ROAS by 267%",
      industry: "Fashion & Apparel",
      platform: "Amazon Advertising",
      challenge: "A leading fashion brand was struggling with rising advertising costs and declining return on ad spend on Amazon.",
      solution: "We implemented our AI-powered campaign optimization that dynamically adjusted bids based on product performance and audience behavior.",
      results: [
        "267% increase in ROAS",
        "38% reduction in ACoS",
        "52% growth in attributed sales"
      ],
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      icon: <ShoppingCart className="h-5 w-5" />
    },
    {
      id: 2,
      title: "SaaS Company Reduces Cost Per Acquisition by 41%",
      industry: "Software & Technology",
      platform: "Google Ads",
      challenge: "A B2B SaaS company was facing high customer acquisition costs through their Google Ads campaigns.",
      solution: "We deployed our cross-channel attribution model and keyword optimization tools to focus budget on the most efficient acquisition paths.",
      results: [
        "41% reduction in cost per acquisition",
        "28% increase in trial signups",
        "18% improvement in conversion rate"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      id: 3,
      title: "E-commerce Brand Scales Ad Spend by 300%",
      industry: "Home Goods",
      platform: "Meta Advertising",
      challenge: "A home goods brand wanted to scale their ad spend without sacrificing efficiency and return on investment.",
      solution: "We implemented our automated campaign structure and creative testing framework to identify winning combinations at scale.",
      results: [
        "300% increase in monthly ad spend",
        "22% improvement in overall ROAS",
        "187% growth in monthly revenue"
      ],
      image: "https://images.unsplash.com/photo-1538688691244-ec3772568b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      icon: <BarChart2 className="h-5 w-5" />
    },
    {
      id: 4,
      title: "D2C Brand Improves Social Conversion Rate by 58%",
      industry: "Health & Wellness",
      platform: "Social Media",
      challenge: "A direct-to-consumer health brand was struggling with low conversion rates on their social media advertising.",
      solution: "We redesigned their campaign structure and implemented our automated audience segmentation and creative personalization.",
      results: [
        "58% increase in conversion rate",
        "32% reduction in cost per purchase",
        "47% improvement in customer lifetime value"
      ],
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real Results from Real Customers
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover how leading brands have transformed their digital advertising performance with our AI-powered platform.
              </p>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-600/50"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white rounded-lg px-3 py-1 text-sm font-medium text-gray-800">
                        {caseStudy.industry}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        {caseStudy.icon}
                      </div>
                      <div className="text-sm font-medium text-purple-600">
                        {caseStudy.platform}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-1">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-1">Solution:</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-800 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.map((result, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to achieve similar results?</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the hundreds of brands that have transformed their marketing performance with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
