
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Building, CheckCircle, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-oraxyn-gray mb-6">
                About Oraxyn
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We're on a mission to revolutionize e-commerce advertising through 
                AI-powered optimization, helping brands maximize their growth potential.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-oraxyn-gray mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2016, Oraxyn began with a simple but powerful idea: use artificial intelligence 
                  to help e-commerce businesses optimize their advertising across multiple channels.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founders, experienced e-commerce advertisers themselves, saw firsthand how 
                  challenging it was to manage campaigns across different platforms and optimize 
                  for the best results.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a solution for Amazon sellers quickly expanded to become the 
                  world's largest cross-channel e-commerce advertising platform, helping thousands 
                  of brands optimize their marketing efforts across Amazon, Google, Facebook, and other 
                  major platforms.
                </p>
                <p className="text-gray-600">
                  Today, Oraxyn's AI-powered technology manages billions in ad spend for brands 
                  around the world, delivering exceptional returns and helping businesses of all 
                  sizes achieve their growth goals.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://placehold.co/600x400/e9f0ff/0046FF?text=Our+Story" 
                  alt="Oraxyn Team" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission & Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-4">
                Our Mission & Values
              </h2>
              <p className="text-gray-600">
                The principles that drive our company and shape our culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
                <Building className="h-12 w-12 text-oraxyn-blue mb-6" />
                <h3 className="text-xl font-bold text-oraxyn-gray mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower e-commerce brands with AI technology that maximizes their 
                  advertising effectiveness and drives sustainable growth across all channels.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
                <CheckCircle className="h-12 w-12 text-oraxyn-green mb-6" />
                <h3 className="text-xl font-bold text-oraxyn-gray mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading AI-powered platform that bridges the gap between 
                  e-commerce retailers and their customers, creating more effective and 
                  efficient advertising ecosystems.
                </p>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <Award className="h-10 w-10 text-oraxyn-blue" />,
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, constantly pushing the boundaries of what's possible."
                },
                {
                  icon: <Users className="h-10 w-10 text-oraxyn-green" />,
                  title: "Customer Focus",
                  description: "Our customers' success is our success. We're dedicated to helping them achieve their goals."
                },
                {
                  icon: <Globe className="h-10 w-10 text-oraxyn-orange" />,
                  title: "Innovation",
                  description: "We embrace innovation and continuously evolve our technology to stay ahead of the curve."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
                  <div className="bg-gray-50 p-3 rounded-full w-fit mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-oraxyn-gray mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-4">
                Our Leadership Team
              </h2>
              <p className="text-gray-600">
                Meet the experienced team driving Oraxyn's innovation and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "Chief Executive Officer",
                  bio: "Former e-commerce executive with 15+ years of experience in digital advertising.",
                  image: "https://placehold.co/300x300/e9f0ff/0046FF?text=JS"
                },
                {
                  name: "Sarah Johnson",
                  role: "Chief Technology Officer",
                  bio: "AI expert with a background in machine learning and advertising technology.",
                  image: "https://placehold.co/300x300/e2f8e9/00C27C?text=SJ"
                },
                {
                  name: "Michael Chen",
                  role: "Chief Revenue Officer",
                  bio: "20+ years experience in scaling SaaS businesses and e-commerce platforms.",
                  image: "https://placehold.co/300x300/fff3e9/FF6F2C?text=MC"
                },
                {
                  name: "Olivia Rodriguez",
                  role: "Chief Marketing Officer",
                  bio: "Digital marketing veteran specializing in e-commerce growth strategies.",
                  image: "https://placehold.co/300x300/f0e9ff/9747FF?text=OR"
                }
              ].map((person, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-oraxyn-gray mb-1">{person.name}</h3>
                    <p className="text-oraxyn-blue mb-4">{person.role}</p>
                    <p className="text-gray-600">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Recognition */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-oraxyn-gray mb-4">
                Awards & Recognition
              </h2>
              <p className="text-gray-600">
                Oraxyn has been recognized as a leader in the e-commerce advertising industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                {
                  award: "G2's Best Software",
                  year: "2025",
                  logo: "https://placehold.co/200x100/ffffff/000000?text=G2"
                },
                {
                  award: "Adweek Fastest Growing",
                  year: "2024",
                  logo: "https://placehold.co/200x100/ffffff/000000?text=Adweek"
                },
                {
                  award: "Inc. 5000",
                  year: "2023",
                  logo: "https://placehold.co/200x100/ffffff/000000?text=Inc."
                },
                {
                  award: "Digiday Technology Award",
                  year: "2022",
                  logo: "https://placehold.co/200x100/ffffff/000000?text=Digiday"
                }
              ].map((award, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
                  <img 
                    src={award.logo} 
                    alt={award.award} 
                    className="h-12 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-medium text-oraxyn-gray">{award.award}</h3>
                  <p className="text-oraxyn-blue">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-oraxyn-blue">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                We're always looking for talented individuals to join our growing team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/company/careers">
                  <Button className="bg-white text-oraxyn-blue hover:bg-gray-100 px-8 py-2.5 h-auto">
                    View Open Positions
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

export default About;
