import React, { useState } from "react";
import {
  Twitter,
  Linkedin,
  Github,
  MessageSquare,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Use Cases", href: "#use-cases" },
      { name: "FAQ", href: "#faq" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Vision", href: "#" },
      { name: "Join Our Team", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Coming Soon", href: "#" },
      { name: "Early Access", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
    social: [
      {
        name: "Discord",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.888-.608 1.283a18.566 18.566 0 0 0-5.487 0c-.164-.395-.397-.893-.608-1.283a.077.077 0 0 0-.079-.036c-1.715.29-3.355.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961c.004.06.042.102.101.118 1.645 1.209 3.239 1.942 4.804 2.427a.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 12.87 12.87 0 0 1-1.837-.878.077.077 0 0 1-.008-.128c.124-.093.247-.19.365-.289a.076.076 0 0 1 .08-.012c4.036 1.844 8.406 1.844 12.395 0a.076.076 0 0 1 .08.012c.118.099.241.196.366.29a.077.077 0 0 1-.007.127c-.588.347-1.2.634-1.838.878a.076.076 0 0 0-.041.106c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.574-.485 3.168-1.218 4.813-2.427a.077.077 0 0 0 .1-.118c.505-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-.948 0-1.725-.886-1.725-1.975s.756-1.974 1.725-1.974c.978 0 1.743.895 1.725 1.974 0 1.09-.766 1.975-1.725 1.975zm6.37 0c-.947 0-1.725-.886-1.725-1.975s.757-1.974 1.726-1.974c.978 0 1.743.895 1.725 1.974 0 1.09-.757 1.975-1.725 1.975z" />
          </svg>
        ),
        href: "https://discord.gg/FpM4AzpE",
      },
    ],
  };

  return (
    <footer
      className={`relative pt-20 pb-10 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={isDarkMode ? "fill-gray-800" : "fill-white"}
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Newsletter section */}
        {/* <div className="relative mb-20 max-w-4xl mx-auto">
          <div className={`rounded-2xl p-10 shadow-xl ${
            isDarkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-blue-50 to-indigo-50"
          }`}>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="text-center mb-8 pt-6">
              <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-600 dark:text-gray-300">Join our newsletter to get updates on our launch and early access opportunities</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow py-3 px-6 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SwapCrew
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Trade skills, build together, and grow your professional network
              without financial barriers. Join our community of creators,
              developers, and professionals exchanging expertise.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  sulaimsaed@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  Kannur, India
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {footerLinks.social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white dark:text-gray-300 dark:hover:bg-blue-600 transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Product
            </h4>
            <ul className="space-y-4">
              {footerLinks.product.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-blue-600 after:rounded-full">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} SwapCrew. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Cookies
              </a>
              <button
                onClick={scrollToTop}
                className="ml-6 p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
