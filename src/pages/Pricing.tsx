
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, HelpCircle, X } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  popularLabel = false,
  ctaText = "Get Started",
  ctaLink = "/register"
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border relative ${popularLabel ? 'border-oraxyn-blue' : 'border-gray-200'}`}>
      {popularLabel && (
        <div className="absolute -top-4 inset-x-0 mx-auto w-max px-4 py-1 bg-oraxyn-blue text-white text-sm font-medium rounded-full">
          Most Popular
        </div>
      )}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-oraxyn-gray mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-oraxyn-gray">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={ctaLink}>
          <Button 
            className={`w-full ${popularLabel ? 'bg-oraxyn-blue hover:bg-oraxyn-darkBlue' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
          >
            {ctaText}
          </Button>
        </Link>
        <div className="mt-8">
          <p className="font-medium text-oraxyn-gray mb-4">Features include:</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-oraxyn-green mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PricingFeatureRow = ({ feature, plans }) => {
  return (
    <div className="grid grid-cols-5 py-4 border-b border-gray-200">
      <div className="col-span-2 flex items-center">
        <span className="font-medium text-oraxyn-gray">{feature.name}</span>
        {feature.tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="ml-1">
                <HelpCircle className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>{feature.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      {plans.map((plan, index) => (
        <div key={index} className="col-span-1 flex items-center justify-center">
          {typeof feature.values[index] === 'boolean' ? (
            feature.values[index] ? (
              <Check className="h-5 w-5 text-oraxyn-green" />
            ) : (
              <X className="h-5 w-5 text-gray-300" />
            )
          ) : (
            <span className={`text-sm ${index === 1 ? 'font-medium text-oraxyn-blue' : 'text-gray-700'}`}>
              {feature.values[index]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const pricingPlans = [
    {
      title: "Starter",
      price: billingCycle === 'monthly' ? "$499" : "$449",
      description: "Perfect for small businesses just starting with e-commerce advertising.",
      features: [
        "Up to $10,000 monthly ad spend",
        "Amazon Advertising optimization",
        "Basic reporting dashboard",
        "Email support",
        "Weekly optimization",
      ]
    },
    {
      title: "Professional",
      price: billingCycle === 'monthly' ? "$999" : "$899",
      description: "Ideal for growing brands looking to scale their e-commerce presence.",
      features: [
        "Up to $50,000 monthly ad spend",
        "Cross-channel optimization (Amazon + 1 channel)",
        "Advanced reporting & insights",
        "Dedicated account manager",
        "Daily optimization",
        "Product-level performance data"
      ],
      popularLabel: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For established brands with complex multi-channel advertising needs.",
      features: [
        "Unlimited ad spend",
        "All-channel optimization",
        "Custom reporting solutions",
        "Priority support",
        "Hourly optimization",
        "API access",
        "Strategic consulting"
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact"
    }
  ];
  
  const featureComparison = [
    {
      name: "Amazon Advertising",
      tooltip: "Optimization for Sponsored Products, Sponsored Brands, and Sponsored Display",
      values: [true, true, true]
    },
    {
      name: "Google Ads",
      tooltip: "Optimization for Google Search, Shopping, and Display campaigns",
      values: [false, "1 account", "Unlimited"]
    },
    {
      name: "Facebook & Instagram",
      tooltip: "Optimization for Meta advertising platforms",
      values: [false, "1 account", "Unlimited"]
    },
    {
      name: "Dedicated Account Manager",
      tooltip: "A dedicated specialist who manages your account",
      values: [false, true, true]
    },
    {
      name: "Optimization Frequency",
      tooltip: "How often our AI optimizes your campaigns",
      values: ["Weekly", "Daily", "Hourly"]
    },
    {
      name: "Reporting Depth",
      tooltip: "Level of detail in performance reports",
      values: ["Basic", "Advanced", "Custom"]
    },
    {
      name: "API Access",
      tooltip: "Direct access to our platform's API",
      values: [false, false, true]
    },
    {
      name: "Strategic Consulting",
      tooltip: "Expert advice on e-commerce strategy",
      values: [false, "Quarterly", "Monthly"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Pricing Header */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-oraxyn-gray mb-6">
                Transparent Pricing for Every Business
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                Choose the plan that fits your business needs. No hidden fees, no commissions - just straightforward pricing.
              </p>
              
              <div className="flex justify-center mb-12">
                <div className="bg-gray-100 p-1 rounded-full inline-flex">
                  <button
                    className={`px-6 py-2 rounded-full text-sm font-medium ${
                      billingCycle === 'monthly' ? 'bg-white shadow-sm text-oraxyn-gray' : 'text-gray-500'
                    }`}
                    onClick={() => setBillingCycle('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-6 py-2 rounded-full text-sm font-medium ${
                      billingCycle === 'annual' ? 'bg-white shadow-sm text-oraxyn-gray' : 'text-gray-500'
                    }`}
                    onClick={() => setBillingCycle('annual')}
                  >
                    Annual <span className="text-oraxyn-green text-xs">Save 10%</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <PricingCard key={index} {...plan} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-6 text-center">
                Compare Features
              </h2>
              <p className="text-gray-600 text-center mb-12">
                Detailed breakdown of what's included in each plan
              </p>
              
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                {/* Header row */}
                <div className="grid grid-cols-5 bg-gray-50 py-4 border-b border-gray-200">
                  <div className="col-span-2 px-6">
                    <span className="font-bold text-oraxyn-gray">Features</span>
                  </div>
                  {pricingPlans.map((plan, index) => (
                    <div key={index} className="col-span-1 text-center">
                      <span className={`font-bold ${index === 1 ? 'text-oraxyn-blue' : 'text-oraxyn-gray'}`}>
                        {plan.title}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Feature rows */}
                <div className="px-6">
                  {featureComparison.map((feature, index) => (
                    <PricingFeatureRow 
                      key={index}
                      feature={feature}
                      plans={pricingPlans}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid gap-6 mt-10">
                {[
                  {
                    question: "How is pricing determined?",
                    answer: "Our pricing is based on flat monthly rates determined by your advertising budget. We don't charge commissions or take a percentage of your ad spend."
                  },
                  {
                    question: "Can I change plans later?",
                    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be effective from the next billing cycle."
                  },
                  {
                    question: "Is there a contract or commitment?",
                    answer: "Our monthly plans are billed month-to-month with no long-term commitment. Annual plans require a 12-month commitment but offer a 10% discount."
                  },
                  {
                    question: "How do I know which plan is right for me?",
                    answer: "We recommend choosing a plan based on your monthly advertising budget and the channels you want to optimize. If you're unsure, our team can help you select the best plan during a free consultation."
                  },
                  {
                    question: "Do you offer a free trial?",
                    answer: "Yes, we offer a 14-day free trial for new customers on the Starter and Professional plans. Enterprise plans include a customized onboarding process."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-oraxyn-gray mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-oraxyn-blue">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Optimize Your E-commerce Advertising?
              </h2>
              <p className="text-white/90 mb-8">
                Start your 14-day free trial today. No credit card required.
              </p>
              <Link to="/register">
                <Button className="bg-white text-oraxyn-blue hover:bg-gray-100 px-8 py-6 h-auto text-lg">
                  Start Free Trial
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

export default Pricing;
