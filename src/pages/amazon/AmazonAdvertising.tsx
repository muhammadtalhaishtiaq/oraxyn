
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, ShoppingCart, BarChart2, Target, Zap } from 'lucide-react';

const AmazonAdvertising = () => {
  const features = [
    {
      title: "AI-Powered Optimization",
      description: "Our intelligent algorithms analyze your advertising data to optimize bidding strategies in real-time",
      icon: <Zap className="h-8 w-8 text-oraxyn-turquoise" />
    },
    {
      title: "Cross-Channel Integration",
      description: "Connect your Amazon account with other sales channels for a unified advertising strategy",
      icon: <Target className="h-8 w-8 text-oraxyn-orange" />
    },
    {
      title: "Product-Level Insights",
      description: "Get detailed performance metrics for each product to identify winners and areas for improvement",
      icon: <ShoppingCart className="h-8 w-8 text-oraxyn-turquoise" />
    },
    {
      title: "Advanced Reporting",
      description: "Custom reporting dashboards that give you actionable data to make informed decisions",
      icon: <BarChart2 className="h-8 w-8 text-oraxyn-orange" />
    }
  ];

  const benefits = [
    "Increase ROAS by up to 40%",
    "Reduce ACoS by up to 25%",
    "Save 10+ hours weekly on campaign management",
    "Discover high-converting keywords automatically",
    "Stop wasting budget on underperforming ads",
    "Scale your Amazon business faster"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-oraxyn-gray mb-6">
                Revolutionize Your <span className="text-oraxyn-turquoise">Amazon Advertising</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Optimize your Amazon PPC campaigns with our AI-powered platform. Increase ROAS, reduce ACoS, and scale your e-commerce business with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/register">
                  <Button size="lg" className="bg-oraxyn-turquoise hover:bg-oraxyn-darkTurquoise text-white shadow-lg w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/platform/amazon">
                  <Button size="lg" variant="outline" className="border-oraxyn-turquoise text-oraxyn-turquoise hover:bg-oraxyn-turquoise/10 w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-500">No credit card required. 14-day free trial.</p>
            </div>
            <div className="lg:block">
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-oraxyn-turquoise via-oraxyn-accent to-oraxyn-orange"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-lg font-semibold text-oraxyn-gray">Amazon Advertising Dashboard</div>
                    <div className="text-sm px-3 py-1 bg-green-100 text-green-600 rounded-full">+32% ROAS</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Ad Spend (30 days)</p>
                      <p className="text-2xl font-bold text-oraxyn-gray">$4,267.89</p>
                      <p className="text-xs text-red-500">-12% vs previous period</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Sales (30 days)</p>
                      <p className="text-2xl font-bold text-oraxyn-gray">$17,842.32</p>
                      <p className="text-xs text-green-500">+24% vs previous period</p>
                    </div>
                  </div>
                  <div className="h-48 bg-gray-100 rounded-lg mb-6 flex flex-col items-center justify-center">
                    <div className="w-4/5 h-32 bg-gradient-to-r from-oraxyn-turquoise/20 to-oraxyn-orange/20 rounded-md relative">
                      <div className="absolute bottom-0 left-0 w-full flex items-end h-full px-2">
                        <div className="flex-1 h-[30%] bg-oraxyn-turquoise/60 rounded-t"></div>
                        <div className="flex-1 h-[45%] bg-oraxyn-turquoise/70 rounded-t mx-1"></div>
                        <div className="flex-1 h-[65%] bg-oraxyn-turquoise/80 rounded-t"></div>
                        <div className="flex-1 h-[85%] bg-oraxyn-turquoise/90 rounded-t mx-1"></div>
                        <div className="flex-1 h-[75%] bg-oraxyn-turquoise rounded-t"></div>
                        <div className="flex-1 h-[90%] bg-oraxyn-orange rounded-t mx-1"></div>
                        <div className="flex-1 h-[80%] bg-oraxyn-orange/90 rounded-t"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Campaign Performance Trend</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-oraxyn-turquoise/10 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Avg. ACoS</p>
                      <p className="text-xl font-bold text-oraxyn-turquoise">18.4%</p>
                    </div>
                    <div className="bg-oraxyn-orange/10 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">CTR</p>
                      <p className="text-xl font-bold text-oraxyn-orange">0.42%</p>
                    </div>
                    <div className="bg-oraxyn-purple/10 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Conv. Rate</p>
                      <p className="text-xl font-bold text-oraxyn-purple">12.7%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-oraxyn-gray mb-4">
              Powerful Amazon Advertising Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform gives you all the tools you need to manage, optimize, and scale your Amazon advertising campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 gap-10">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1 mr-5">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-oraxyn-gray mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-10">
              {features.slice(2, 4).map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1 mr-5">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-oraxyn-gray mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-oraxyn-gray mb-12 text-center">
              Why Sellers Choose Oraxyn
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                  <CheckCircle className="text-oraxyn-turquoise h-6 w-6 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-lg text-oraxyn-gray">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/register">
                <Button size="lg" className="bg-oraxyn-turquoise hover:bg-oraxyn-darkTurquoise text-white shadow-lg px-8">
                  Start Optimizing Your Amazon Ads
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <p className="mt-4 text-sm text-gray-500">Join thousands of Amazon sellers already using Oraxyn</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AmazonAdvertising;
