import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  Menu, 
  X, 
  BarChart2, 
  ShoppingCart, 
  Monitor, 
  Zap, 
  Users, 
  HelpCircle,
  ExternalLink,
  FileText,
  BookOpen,
  Building,
  Award,
  LifeBuoy,
  MessageCircle
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
  }`;

  const platformDropdown = [
    { 
      title: "Amazon Advertising", 
      path: "/amazon/advertising", 
      icon: <ShoppingCart className="h-5 w-5 text-oraxyn-orange" />,
      description: "Optimize your Amazon campaigns with AI"
    },
    { 
      title: "Facebook & Instagram", 
      path: "/platform/meta", 
      icon: <Users className="h-5 w-5 text-oraxyn-turquoise" />,
      description: "Maximize social media advertising ROI"
    },
    { 
      title: "Google Ads", 
      path: "/platform/google", 
      icon: <Monitor className="h-5 w-5 text-oraxyn-green" />,
      description: "Enhance your Google search and display campaigns"
    },
    { 
      title: "Cross-Channel Analytics", 
      path: "/platform/analytics", 
      icon: <BarChart2 className="h-5 w-5 text-oraxyn-purple" />,
      description: "Unified reporting across all platforms"
    },
  ];

  const solutionsDropdown = [
    { 
      title: "E-commerce Brands", 
      path: "/solutions/brands", 
      icon: <Building className="h-5 w-5 text-oraxyn-turquoise" />,
      description: "Solutions for direct-to-consumer brands"
    },
    { 
      title: "Agencies", 
      path: "/solutions/agencies", 
      icon: <Award className="h-5 w-5 text-oraxyn-green" />,
      description: "Partner with us to enhance client results"
    },
    { 
      title: "Enterprise", 
      path: "/solutions/enterprise", 
      icon: <Zap className="h-5 w-5 text-oraxyn-orange" />,
      description: "Advanced solutions for large-scale advertisers"
    },
    { 
      title: "Case Studies", 
      path: "/solutions/case-studies", 
      icon: <BookOpen className="h-5 w-5 text-oraxyn-purple" />,
      description: "Success stories from our customers"
    },
  ];

  const resourcesDropdown = [
    { 
      title: "Blog", 
      path: "/resources/blog", 
      icon: <FileText className="h-5 w-5 text-oraxyn-turquoise" />,
      description: "Latest insights and articles"
    },
    { 
      title: "Knowledge Base", 
      path: "/resources/knowledge-base", 
      icon: <HelpCircle className="h-5 w-5 text-oraxyn-orange" />,
      description: "Guides and documentation"
    },
    { 
      title: "Webinars", 
      path: "/resources/webinars", 
      icon: <ExternalLink className="h-5 w-5 text-oraxyn-purple" />,
      description: "Educational videos and presentations"
    },
    { 
      title: "Support", 
      path: "/resources/support", 
      icon: <LifeBuoy className="h-5 w-5 text-oraxyn-green" />,
      description: "Get help with our platform"
    },
  ];

  const companyDropdown = [
    { 
      title: "About Us", 
      path: "/company/about", 
      icon: <Building className="h-5 w-5 text-oraxyn-turquoise" />,
      description: "Our story and mission"
    },
    { 
      title: "Careers", 
      path: "/company/careers", 
      icon: <Users className="h-5 w-5 text-oraxyn-green" />,
      description: "Join our growing team"
    },
    { 
      title: "Press", 
      path: "/company/press", 
      icon: <FileText className="h-5 w-5 text-oraxyn-orange" />,
      description: "News and announcements"
    },
    { 
      title: "Contact", 
      path: "/contact", 
      icon: <MessageCircle className="h-5 w-5 text-oraxyn-purple" />,
      description: "Get in touch with our team"
    },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-bold text-2xl text-oraxyn-turquoise"
        >
          <span className="text-oraxyn-red">Oraxyn</span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center space-x-8" ref={dropdownRef}>
          <div className="relative group">
            <button 
              className={`nav-link flex items-center space-x-1 ${activeDropdown === 'platform' ? 'nav-link-active' : ''}`}
              onClick={() => toggleDropdown('platform')}
            >
              <span>Platform</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'platform' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'platform' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[480px] bg-white rounded-md shadow-lg mt-2 py-4 grid grid-cols-1 gap-2 z-50">
                {platformDropdown.map((item) => (
                  <Link 
                    key={item.title} 
                    to={item.path} 
                    className="flex items-start px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-3 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-oraxyn-gray">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative group">
            <button 
              className={`nav-link flex items-center space-x-1 ${activeDropdown === 'solutions' ? 'nav-link-active' : ''}`}
              onClick={() => toggleDropdown('solutions')}
            >
              <span>Solutions</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[480px] bg-white rounded-md shadow-lg mt-2 py-4 grid grid-cols-1 gap-2 z-50">
                {solutionsDropdown.map((item) => (
                  <Link 
                    key={item.title} 
                    to={item.path} 
                    className="flex items-start px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-3 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-oraxyn-gray">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
          
          <div className="relative group">
            <button 
              className={`nav-link flex items-center space-x-1 ${activeDropdown === 'resources' ? 'nav-link-active' : ''}`}
              onClick={() => toggleDropdown('resources')}
            >
              <span>Resources</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[480px] bg-white rounded-md shadow-lg mt-2 py-4 grid grid-cols-1 gap-2 z-50">
                {resourcesDropdown.map((item) => (
                  <Link 
                    key={item.title} 
                    to={item.path} 
                    className="flex items-start px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-3 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-oraxyn-gray">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative group">
            <button 
              className={`nav-link flex items-center space-x-1 ${activeDropdown === 'company' ? 'nav-link-active' : ''}`}
              onClick={() => toggleDropdown('company')}
            >
              <span>Company</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'company' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[480px] bg-white rounded-md shadow-lg mt-2 py-4 grid grid-cols-1 gap-2 z-50">
                {companyDropdown.map((item) => (
                  <Link 
                    key={item.title} 
                    to={item.path} 
                    className="flex items-start px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="mr-3 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-oraxyn-gray">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <Button className="bg-oraxyn-turquoise hover:bg-oraxyn-darkTurquoise text-white">
                  Dashboard
                </Button>
              </Link>
              <Button 
                onClick={handleLogout}
                variant="ghost"
                className="text-gray-600 hover:text-oraxyn-turquoise"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-oraxyn-turquoise text-oraxyn-turquoise hover:bg-oraxyn-turquoise/10">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-oraxyn-turquoise hover:bg-oraxyn-darkTurquoise text-white shadow-sm">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-oraxyn-gray" />
          ) : (
            <Menu className="h-6 w-6 text-oraxyn-gray" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in overflow-auto max-h-[calc(100vh-5rem)]">
          <div className="container mx-auto px-6 py-4 space-y-3">
            <div className="border-b border-gray-200 pb-3">
              <button 
                className="flex items-center justify-between w-full py-2 text-left"
                onClick={() => toggleDropdown('platform-mobile')}
              >
                <span className="font-medium text-oraxyn-gray">Platform</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'platform-mobile' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'platform-mobile' && (
                <div className="mt-2 space-y-2 pl-4">
                  {platformDropdown.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="block py-2 text-gray-600 hover:text-oraxyn-turquoise"
                    >
                      <div className="flex items-center">
                        <div className="mr-2">{item.icon}</div>
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200 pb-3">
              <button 
                className="flex items-center justify-between w-full py-2 text-left"
                onClick={() => toggleDropdown('solutions-mobile')}
              >
                <span className="font-medium text-oraxyn-gray">Solutions</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'solutions-mobile' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'solutions-mobile' && (
                <div className="mt-2 space-y-2 pl-4">
                  {solutionsDropdown.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="block py-2 text-gray-600 hover:text-oraxyn-turquoise"
                    >
                      <div className="flex items-center">
                        <div className="mr-2">{item.icon}</div>
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="py-2 border-b border-gray-200">
              <Link to="/pricing" className="block py-2 text-oraxyn-gray hover:text-oraxyn-turquoise">
                Pricing
              </Link>
            </div>
            
            <div className="border-b border-gray-200 pb-3">
              <button 
                className="flex items-center justify-between w-full py-2 text-left"
                onClick={() => toggleDropdown('resources-mobile')}
              >
                <span className="font-medium text-oraxyn-gray">Resources</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'resources-mobile' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources-mobile' && (
                <div className="mt-2 space-y-2 pl-4">
                  {resourcesDropdown.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="block py-2 text-gray-600 hover:text-oraxyn-turquoise"
                    >
                      <div className="flex items-center">
                        <div className="mr-2">{item.icon}</div>
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200 pb-3">
              <button 
                className="flex items-center justify-between w-full py-2 text-left"
                onClick={() => toggleDropdown('company-mobile')}
              >
                <span className="font-medium text-oraxyn-gray">Company</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'company-mobile' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'company-mobile' && (
                <div className="mt-2 space-y-2 pl-4">
                  {companyDropdown.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="block py-2 text-gray-600 hover:text-oraxyn-turquoise"
                    >
                      <div className="flex items-center">
                        <div className="mr-2">{item.icon}</div>
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard">
                    <Button className="w-full bg-oraxyn-turquoise hover:bg-oraxyn-darkTurquoise text-white">
                      Dashboard
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleLogout}
                    variant="ghost"
                    className="w-full text-gray-600 hover:text-oraxyn-turquoise"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="w-full">
                    <Button variant="outline" className="w-full border-oraxyn-turquoise text-oraxyn-turquoise hover:bg-oraxyn-turquoise/10">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" className="w-full">
                    <Button className="w-full bg-oraxyn-turquoise hover:bg-oraxyn-darkTurquoise text-white">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
