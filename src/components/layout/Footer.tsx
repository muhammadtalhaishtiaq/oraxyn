
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-oraxyn-darkGray text-oraxyn-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Oraxyn</h3>
            <p className="text-oraxyn-lightGray mb-4">
              The world's largest e-commerce cross-channel ad platform, powered by advanced AI.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/amazon/advertising" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  Amazon Advertising
                </Link>
              </li>
              <li>
                <Link to="/platform/meta" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  Facebook Ads
                </Link>
              </li>
              <li>
                <Link to="/platform/google" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link to="/platform/analytics" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  Analytics Platform
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#blog" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#case-studies" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/#e-books" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  E-Books
                </Link>
              </li>
              <li>
                <Link to="/#webinars" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-oraxyn-lightGray">
                123 Ad Tech Plaza
              </li>
              <li className="text-oraxyn-lightGray">
                New York, NY 10001
              </li>
              <li>
                <a href="mailto:info@oraxyn.com" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  info@oraxyn.com
                </a>
              </li>
              <li>
                <a href="tel:+12025551234" className="text-oraxyn-lightGray hover:text-oraxyn-orange transition-colors">
                  +1 202-555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-oraxyn-purple/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-oraxyn-lightGray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Oraxyn. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/terms" className="text-oraxyn-lightGray hover:text-oraxyn-orange text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-oraxyn-lightGray hover:text-oraxyn-orange text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-oraxyn-lightGray hover:text-oraxyn-orange text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
