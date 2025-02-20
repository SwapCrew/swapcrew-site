import React from 'react';
import { 
  Coins, 
  ArrowRightLeft,
  Clock,
  BadgeCheck,
  Users,
  CircleDollarSign,
  Star
} from 'lucide-react';

const CreditsSection = () => {
  return (
    <div className="py-20 px-6 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-5 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500 opacity-5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <Coins className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Credits</span> Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our optional credit system adds flexibility to your skill exchanges, helping balance trades even when skills have different time commitments
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Credit system illustration */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="w-full h-64 relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-750 rounded-lg p-4">
              {/* Designer */}
              <div className="absolute top-4 left-4 w-32 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-purple-600 dark:text-purple-400">
                      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                      <path d="M2 2l7.586 7.586"></path>
                      <circle cx="11" cy="11" r="2"></circle>
                    </svg>
                  </div>
                  <div className="text-sm font-medium">Designer</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Offers:</div>
                  <div className="text-xs font-medium">5hr logo design</div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Credits:</div>
                  <div className="text-xs font-medium flex items-center">
                    <span className="text-yellow-500 flex items-center">
                      +50 <Coins className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Developer */}
              <div className="absolute bottom-4 right-4 w-32 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600 dark:text-blue-400">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div className="text-sm font-medium">Developer</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Offers:</div>
                  <div className="text-xs font-medium">10hr coding</div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Credits:</div>
                  <div className="text-xs font-medium flex items-center">
                    <span className="text-red-500 flex items-center">
                      -50 <Coins className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Exchange arrows */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                  <ArrowRightLeft className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="mt-2 text-center text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Fair Exchange
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Time Balancing</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Balance trades when skills require different time commitments. Credits help make exchanges fair when hours don't match exactly.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Skill Value Recognition</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Credits acknowledge different skill values based on expertise level, complexity, and market demand.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Multi-person Trades</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Credits enable trading with multiple people. Earn credits from one exchange and use them in another.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How to earn and spend credits */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Earn Credits */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <CircleDollarSign className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="text-2xl font-bold">Earn Credits</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">1</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Complete trades where your time contribution exceeds your partner's</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">2</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Receive bonuses for high-quality work and positive ratings</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">3</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Provide rare or high-demand skills that command premium values</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">4</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Participate in community challenges and special events</p>
              </li>
            </ul>
          </div>
          
          {/* Spend Credits */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Coins className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Spend Credits</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">1</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Balance trades where you're receiving more time or expertise</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">2</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Access premium skills from top-rated community members</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">3</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Unlock additional milestone slots for complex projects</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">4</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Request expedited delivery for time-sensitive needs</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Credit FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="font-semibold mb-2">Are credits required to use SwapCrew?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                No, credits are completely optional. You can trade directly without credits if both parties agree to the exchange terms.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="font-semibold mb-2">How are credit values determined?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Credit values are based on time commitment, skill level, market rates, and community supply/demand. Our algorithm suggests fair credit values, but traders can negotiate.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="font-semibold mb-2">Can I purchase credits?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                No. To maintain our skill-based economy, credits can only be earned through contributions to the community. This ensures everyone participates actively.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="font-semibold mb-2">What happens to unused credits?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Credits remain in your account indefinitely. You can use them for future trades or donate them to community initiatives and nonprofit projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsSection;