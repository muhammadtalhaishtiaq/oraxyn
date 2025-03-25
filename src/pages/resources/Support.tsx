
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  LifeBuoy, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <BookOpen className="h-5 w-5" />,
      questions: [
        {
          id: 1,
          question: 'How do I create an account?',
          answer: 'To create an account, click on the "Sign Up" button in the top right corner of our website. Fill in your details and follow the prompts to complete the registration process.'
        },
        {
          id: 2,
          question: 'How do I connect my Amazon Advertising account?',
          answer: 'Once logged in, navigate to the "Connections" page from your dashboard. Click on "Connect Amazon" and follow the authentication steps to securely link your Amazon Advertising account.'
        },
        {
          id: 3,
          question: 'What information do I need to get started?',
          answer: 'To get the most out of our platform, you\'ll need your advertising account credentials for the platforms you wish to connect (Amazon, Facebook, Google, etc.), and basic information about your business and marketing goals.'
        }
      ]
    },
    {
      id: 'account-billing',
      title: 'Account & Billing',
      icon: <FileText className="h-5 w-5" />,
      questions: [
        {
          id: 4,
          question: 'How much does the platform cost?',
          answer: 'Our pricing varies based on your business needs. We offer several plans starting at $199/month. Visit our Pricing page for detailed information on each plan.'
        },
        {
          id: 5,
          question: 'Can I change my subscription plan?',
          answer: 'Yes, you can upgrade or downgrade your subscription at any time. Changes will take effect at the start of your next billing cycle.'
        },
        {
          id: 6,
          question: 'How do I cancel my subscription?',
          answer: 'You can cancel your subscription from the Account Settings page. If you cancel, you\'ll retain access until the end of your current billing period.'
        }
      ]
    },
    {
      id: 'features',
      title: 'Features & Functionality',
      icon: <LifeBuoy className="h-5 w-5" />,
      questions: [
        {
          id: 7,
          question: 'What advertising platforms do you support?',
          answer: 'We currently support Amazon Advertising, Facebook Ads, Google Ads, Instagram Ads, and several other major platforms. We\'re constantly adding support for more advertising channels.'
        },
        {
          id: 8,
          question: 'Can I automate bid adjustments?',
          answer: 'Yes, our platform offers automated bid management that uses AI to optimize your bids based on your performance goals and budget constraints.'
        },
        {
          id: 9,
          question: 'How often is reporting data updated?',
          answer: 'Most reporting data is updated every 24 hours. Some metrics may update more frequently depending on the advertising platform and the specific data points.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <MessageSquare className="h-5 w-5" />,
      questions: [
        {
          id: 10,
          question: 'I can\'t connect my advertising account. What should I do?',
          answer: 'First, ensure you\'re using the correct credentials. If you\'re still having issues, check that you have the appropriate permissions on your advertising account. For further assistance, contact our support team.'
        },
        {
          id: 11,
          question: 'Why is there a discrepancy between your reports and my platform reports?',
          answer: 'Small discrepancies are normal due to differences in attribution windows and reporting methodologies. If you notice significant differences, please contact our support team for assistance.'
        },
        {
          id: 12,
          question: 'The platform is running slowly. How can I fix this?',
          answer: 'Try clearing your browser cache and cookies, or using a different browser. If the issue persists, please contact our support team with details about the specific issues you\'re experiencing.'
        }
      ]
    }
  ];

  // Filter FAQ questions based on search query
  const filteredFAQs = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => 
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How Can We Help You?
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Find answers to common questions or get in touch with our support team for personalized assistance.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  className="pl-10 pr-4 py-3 w-full rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="py-12 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with our support team in real-time for immediate assistance with your questions.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                  Start Chat
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we\'ll get back to you within 24 hours with a detailed response.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                  Email Us
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
                <p className="text-gray-600 mb-4">
                  Explore our comprehensive guides, tutorials, and documentation for self-service support.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                  Browse Articles
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            {searchQuery && filteredFAQs.length === 0 && (
              <div className="text-center py-8">
                <h3 className="text-xl font-medium mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search query or browse our categories below.</p>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {filteredFAQs.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.questions.map((faq) => (
                      <div key={faq.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  
                  {!searchQuery && (
                    <div className="mt-6">
                      <Link 
                        to={`/resources/knowledge-base/${category.id}`}
                        className="text-purple-600 font-medium hover:underline flex items-center"
                      >
                        View all {category.title} articles
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-gray-600 mb-8">
                Our dedicated support team is ready to assist you with any questions or issues you may have.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Contact Support Team
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

export default Support;
