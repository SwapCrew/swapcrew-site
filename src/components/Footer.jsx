// import React, { useState } from "react";
// import { Twitter, Linkedin, Github, Discord } from "lucide-react";

// const Footer = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const footerLinks = {
//     product: [
//       { name: "Features", href: "#" },
//       { name: "How It Works", href: "#" },
//       { name: "Pricing", href: "#" },
//       { name: "FAQ", href: "#" },
//     ],
//     company: [
//       { name: "About Us", href: "#" },
//       { name: "Careers", href: "#" },
//       { name: "Blog", href: "#" },
//       { name: "Press Kit", href: "#" },
//     ],
//     resources: [
//       { name: "Documentation", href: "#" },
//       { name: "Support", href: "#" },
//       { name: "Terms of Service", href: "#" },
//       { name: "Privacy Policy", href: "#" },
//     ],
//     social: [
//       { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
//       { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
//       { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "#" },
//       { name: "Discord", icon: <Discord className="w-5 h-5" />, href: "#" },
//     ],
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       {/* Footer */}
//       <footer
//         className={`border-t ${
//           isDarkMode ? "border-gray-800" : "border-gray-200"
//         }`}
//       >
//         <div className="container mx-auto px-6 py-12">
//           {/* Top section with links */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
//             {/* Logo and description */}
//             <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2">
//               <h3 className="text-2xl font-bold text-blue-600 mb-4">
//                 SwapCrew
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400 mb-4">
//                 Trade skills, build together, and grow your professional network
//                 without financial barriers.
//               </p>
//               {/* Social links */}
//               <div className="flex space-x-4">
//                 {footerLinks.social.map((item, index) => (
//                   <a
//                     key={index}
//                     href={item.href}
//                     className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
//                     aria-label={item.name}
//                   >
//                     {item.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Product links */}
//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <ul className="space-y-2">
//                 {footerLinks.product.map((item, index) => (
//                   <li key={index}>
//                     <a
//                       href={item.href}
//                       className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
//                     >
//                       {item.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company links */}
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 {footerLinks.company.map((item, index) => (
//                   <li key={index}>
//                     <a
//                       href={item.href}
//                       className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
//                     >
//                       {item.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Resources links */}
//             <div>
//               <h4 className="font-semibold mb-4">Resources</h4>
//               <ul className="space-y-2">
//                 {footerLinks.resources.map((item, index) => (
//                   <li key={index}>
//                     <a
//                       href={item.href}
//                       className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
//                     >
//                       {item.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Bottom section with copyright */}
//           <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-600 dark:text-gray-400 text-sm">
//                 © {new Date().getFullYear()} SwapCrew. All rights reserved.
//               </p>
//               <div className="flex space-x-6 mt-4 md:mt-0">
//                 <a
//                   href="#"
//                   className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
//                 >
//                   Terms
//                 </a>
//                 <a
//                   href="#"
//                   className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
//                 >
//                   Privacy
//                 </a>
//                 <a
//                   href="#"
//                   className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
//                 >
//                   Cookies
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
