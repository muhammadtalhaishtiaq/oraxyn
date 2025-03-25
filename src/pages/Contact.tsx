
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Calendar,
  Check
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    adSpend: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, adSpend: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        adSpend: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name*</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name*</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Work Email*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name*</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="adSpend">Monthly Ad Spend*</Label>
          <Select 
            value={formData.adSpend} 
            onValueChange={handleSelectChange}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="< $10,000">Less than $10,000</SelectItem>
              <SelectItem value="$10,000 - $50,000">$10,000 - $50,000</SelectItem>
              <SelectItem value="$50,000 - $100,000">$50,000 - $100,000</SelectItem>
              <SelectItem value="$100,000 - $500,000">$100,000 - $500,000</SelectItem>
              <SelectItem value="> $500,000">More than $500,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message*</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your e-commerce advertising goals..."
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-oraxyn-blue hover:bg-oraxyn-darkBlue text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our{' '}
        <Link to="/privacy" className="text-oraxyn-blue hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-oraxyn-gray mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-600">
                Have questions or ready to optimize your e-commerce advertising? 
                Our team is here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-oraxyn-gray mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-oraxyn-blue mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-oraxyn-gray mb-1">Headquarters</h3>
                        <p className="text-gray-600">
                          123 Tech Plaza, Suite 400<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-oraxyn-blue mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-oraxyn-gray mb-1">Phone</h3>
                        <p className="text-gray-600">
                          +1 (800) 123-4567
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-oraxyn-blue mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-oraxyn-gray mb-1">Email</h3>
                        <p className="text-gray-600">
                          sales@oraxynai.com<br />
                          support@oraxynai.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-oraxyn-gray mb-6">
                      Alternative Ways to Connect
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <MessageSquare className="h-8 w-8 text-oraxyn-blue mb-4" />
                        <h3 className="font-semibold text-oraxyn-gray mb-2">Live Chat</h3>
                        <p className="text-gray-600 mb-4">
                          Chat with our support team in real-time.
                        </p>
                        <Button variant="outline" className="border-oraxyn-blue text-oraxyn-blue hover:bg-oraxyn-blue/10">
                          Start Chat
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <Calendar className="h-8 w-8 text-oraxyn-blue mb-4" />
                        <h3 className="font-semibold text-oraxyn-gray mb-2">Schedule a Demo</h3>
                        <p className="text-gray-600 mb-4">
                          Book a personalized product demo.
                        </p>
                        <Button variant="outline" className="border-oraxyn-blue text-oraxyn-blue hover:bg-oraxyn-blue/10">
                          Book Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-oraxyn-gray mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Global Locations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-8 text-center">
                Our Global Presence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    city: "New York",
                    country: "United States",
                    address: "123 Tech Plaza, Suite 400\nNew York, NY 10001"
                  },
                  {
                    city: "London",
                    country: "United Kingdom",
                    address: "45 Innovation Square\nLondon, EC2A 4PB"
                  },
                  {
                    city: "Singapore",
                    country: "Singapore",
                    address: "78 Digital Tower, #15-01\nSingapore 068897"
                  },
                  {
                    city: "Sydney",
                    country: "Australia",
                    address: "256 Harbour Avenue\nSydney, NSW 2000"
                  },
                  {
                    city: "Berlin",
                    country: "Germany",
                    address: "Techstraße 12\n10115 Berlin"
                  },
                  {
                    city: "Tokyo",
                    country: "Japan",
                    address: "Digital Park Tower 8F\nMinato-ku, Tokyo 106-0032"
                  }
                ].map((location, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="font-bold text-oraxyn-gray mb-1">{location.city}</h3>
                    <p className="text-oraxyn-blue mb-3">{location.country}</p>
                    <p className="text-gray-600 whitespace-pre-line">{location.address}</p>
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
              <h2 className="text-3xl font-bold text-white mb-8">
                Ready to Transform Your E-commerce Advertising?
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white/10 p-6 rounded-lg flex items-center max-w-md">
                  <Check className="h-10 w-10 text-white bg-green-500 p-2 rounded-full mr-4 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-bold text-white mb-1">Free 14-Day Trial</h3>
                    <p className="text-white/90">Get started with a risk-free trial. No credit card required.</p>
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg flex items-center max-w-md">
                  <Check className="h-10 w-10 text-white bg-green-500 p-2 rounded-full mr-4 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-bold text-white mb-1">Expert Support</h3>
                    <p className="text-white/90">Our team will help you set up and optimize your campaigns.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/register">
                  <Button className="bg-white text-oraxyn-blue hover:bg-gray-100 px-8 py-6 h-auto text-lg">
                    Start Your Free Trial
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

export default Contact;
