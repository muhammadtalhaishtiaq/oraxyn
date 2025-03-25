
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: "7 Advanced Amazon PPC Strategies to Boost Your ROAS",
      excerpt: "Learn how to optimize your Amazon advertising campaigns with these advanced PPC strategies that can significantly improve your return on ad spend.",
      category: "Amazon",
      author: "Sarah Johnson",
      date: "October 12, 2023",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Facebook Ads in 2024: What's Working Now",
      excerpt: "Facebook's advertising platform continues to evolve. Discover the latest strategies that are delivering results for e-commerce brands.",
      category: "Social Media",
      author: "Michael Chen",
      date: "September 28, 2023",
      image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "How AI is Revolutionizing Digital Advertising",
      excerpt: "Artificial intelligence is transforming how brands approach digital advertising. Learn how AI-powered tools can optimize your campaigns.",
      category: "Technology",
      author: "Emily Rodriguez",
      date: "September 15, 2023",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Google Shopping Campaigns",
      excerpt: "Maximize your e-commerce sales with this comprehensive guide to setting up and optimizing Google Shopping campaigns.",
      category: "Google",
      author: "David Wilson",
      date: "August 30, 2023",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title: "Cross-Channel Attribution: Solving the Marketing Puzzle",
      excerpt: "Understanding how different marketing channels contribute to conversions is crucial. Learn about modern attribution models and tools.",
      category: "Analytics",
      author: "Sophia Martinez",
      date: "August 17, 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      title: "5 E-commerce Trends Shaping the Future of Online Retail",
      excerpt: "Stay ahead of the curve with these emerging e-commerce trends that are transforming the online shopping experience.",
      category: "E-commerce",
      author: "James Taylor",
      date: "August 5, 2023",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    }
  ];
  
  const categories = [
    "All Categories",
    "Amazon",
    "Social Media",
    "Google",
    "Analytics",
    "E-commerce",
    "Technology"
  ];
  
  const filteredPosts = searchQuery
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;
  
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Insights to Elevate Your Marketing
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Stay updated with the latest trends, strategies, and best practices in digital advertising and e-commerce.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 w-full rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-96 object-cover" 
                  />
                </div>
                <div>
                  <div className="bg-purple-100 text-purple-600 rounded-full px-3 py-1 text-sm font-medium inline-block mb-4">
                    Featured
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <Link to={`/resources/blog/${featuredPost.id}`}>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Read Article <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Categories */}
        <section className="border-t border-b border-gray-200">
          <div className="container mx-auto px-6 py-4 overflow-x-auto">
            <div className="flex space-x-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    index === 0 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => index === 0 ? setSearchQuery('') : setSearchQuery(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium inline-block mb-3 w-fit">
                      {post.category}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      <Link to={`/resources/blog/${post.id}`} className="hover:text-purple-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-1">{post.excerpt}</p>
                    
                    <div className="flex items-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center mr-4">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            )}
            
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Get the latest marketing insights, strategies, and tips delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-0"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
