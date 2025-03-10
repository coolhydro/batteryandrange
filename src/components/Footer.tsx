
import { Link } from 'react-router-dom';
import { BatteryMedium, ChevronRight, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ev-gray border-t border-ev-gray-dark/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BatteryMedium className="h-6 w-6 text-ev-blue" />
              <span className="font-semibold text-lg">
                Battery<span className="text-ev-blue">&</span>Range
              </span>
            </Link>
            <p className="text-sm text-ev-gray-dark mb-6 max-w-xs">
              Understanding electric vehicle batteries, range, and technology to help you make informed decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ev-gray-dark hover:text-ev-blue transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-ev-gray-dark hover:text-ev-blue transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-ev-gray-dark hover:text-ev-blue transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-ev-gray-dark hover:text-ev-blue transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Battery Guide', 'Range Estimator', 'EV Comparison', 'Charging Map'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ev-gray-dark hover:text-ev-blue flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Contact', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ev-gray-dark hover:text-ev-blue flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ev-gray-dark hover:text-ev-blue flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-ev-gray-dark/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-ev-gray-dark mb-4 md:mb-0">
            © {currentYear} Battery&Range. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-ev-gray-dark hover:text-ev-blue transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-ev-gray-dark hover:text-ev-blue transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-ev-gray-dark hover:text-ev-blue transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
