import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Cpu, 
  DraftingCompass, 
  Sun, 
  MapPin, 
  Boxes, 
  Building2, 
  Trees ,
  Home, Wrench, Info, LayoutDashboard, 
} from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 text-gray-900"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor" 
            opacity=".25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="currentColor" 
            opacity=".5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <Link 
              to="/" 
              className="flex items-center group"
            >
              
              <div className="flex items-center space-x-4">
  <img 
    src="/lovable-uploads/52ae9643-7094-4b5f-aa46-2fa4c721162c.png" 
    alt="Decexperts Logo" 
    className="h-10 w-auto" 
  />
  <div>
    <div className="flex items-baseline space-x-1">
      <span className="font-heading text-2xl font-bold">
        <span className="text-brand-800">Dec</span>
        <span className="text-[#FFD700]">experts</span>
      </span>
      
    </div>
  </div>
</div>

            </Link>
            <p className="text-gray-400 leading-relaxed">
              Precision construction estimating services to help your projects stay on time and on budget.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Facebook, color: 'hover:text-blue-500' },
                { icon: Twitter, color: 'hover:text-sky-400' },
                { icon: Linkedin, color: 'hover:text-blue-600' },
                { icon: Instagram, color: 'hover:text-pink-500' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  aria-label={`${social.icon.name} link`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
  {[
    { title: 'Home', path: '/', icon: <Home size={16} className="text-blue-400" /> },
    { title: 'Services', path: '/services', icon: <Wrench size={16} className="text-blue-400" /> },
    { title: 'About Us', path: '/about', icon: <Info size={16} className="text-blue-400" /> },
    { title: 'Projects', path: '/projects', icon: <LayoutDashboard size={16} className="text-blue-400" /> },
    { title: 'Contact', path: '/contact', icon: <Mail size={16} className="text-blue-400" /> }
  ].map((link, index) => (
    <li key={index}>
      <Link 
        to={link.path} 
        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
      >
        {link.icon}
        <span className="ml-2">{link.title}</span>
      </Link>
    </li>
  ))}
</ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'MEP Design', icon: <Cpu className="h-4 w-4 text-blue-400 mr-2" /> },
                { name: 'Architectural Services', icon: <DraftingCompass className="h-4 w-4 text-blue-400 mr-2" /> },
                { name: 'Solar PV System Design', icon: <Sun className="h-4 w-4 text-blue-400 mr-2" /> },
                { name: 'Civil Design', icon: <MapPin className="h-4 w-4 text-blue-400 mr-2" /> },
                { name: 'BIM Modeling', icon: <Boxes className="h-4 w-4 text-blue-400 mr-2" /> },
                { name: 'Structural Services', icon: <Building2 className="h-4 w-4 text-blue-400 mr-2" /> },
                { name: 'Landscaping Design', icon: <Trees className="h-4 w-4 text-blue-400 mr-2" /> }
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  {service.icon}
                  <span className="text-gray-400 hover:text-white transition-colors duration-300">
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Contact Us
            </h4>
            <address className="not-italic space-y-4">
  {/* Main Office */}
  {/* <div className="flex items-start">
    <MapPin size={18} className="text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
    <span className="text-gray-400">
      123 Construction Ave<br />
      New York, NY 10001
    </span>
  </div> */}

  <div className="flex items-center">
    <Phone size={18} className="text-blue-400 mr-3 flex-shrink-0" />
    <a href="tel:+17187196171" className="text-gray-400 hover:text-white transition-colors">
      +1 (718) 719 6171
    </a>
  </div>

  <div className="flex items-center">
    <Mail size={18} className="text-blue-400 mr-3 flex-shrink-0" />
    <a href="mailto:info@decexperts.com" className="text-gray-400 hover:text-white transition-colors">
      info@decexperts.com
    </a>
  </div>

  <div className="flex items-start">
    <Clock size={18} className="text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
    <div>
      <p className="text-gray-400">Mon-Fri: 8AM-5PM</p>
      <p className="text-gray-400">Sat-Sun: Closed</p>
    </div>
  </div>

  {/* Additional Locations */}
  <div className="flex items-start">
    <MapPin size={18} className="text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
    <span className="text-gray-400">
      <strong>U.S - New York:</strong><br />
      896 Bay Ridge Avenue, New York, NY 11220
    </span>
  </div>

  <div className="flex items-start">
    <MapPin size={18} className="text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
    <span className="text-gray-400">
      <strong>U.S - California:</strong><br />
      4215 Lunar Way, Union City, CA
    </span>
  </div>

  <div className="flex items-start">
    <MapPin size={18} className="text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
    <span className="text-gray-400">
      <strong>Canada:</strong><br />
      150 Consumers Road, Suite 502,<br />
      M2J1P9, North York, ON
    </span>
  </div>

  <div className="flex items-start">
    <MapPin size={18} className="text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
    <span className="text-gray-400">
      <strong>UAE:</strong><br />
      Office #312, Muhammad Al Mulla Tower,<br />
      8 AL-Etihad Street, Sharjah, U.A.E
    </span>
  </div>

  <div className="flex items-start">
    <MapPin size={18} className="text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
    <span className="text-gray-400">
      <strong>Pakistan:</strong><br />
      760 B PCSIR II, Lahore, Pakistan
    </span>
  </div>
</address>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EstimatingHub. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;