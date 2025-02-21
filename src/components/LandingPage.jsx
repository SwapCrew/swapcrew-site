import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Code,
  Palette,
  Megaphone,
  PenTool,
  GraduationCap,
  ChevronRight,
  ArrowRight,
  Star,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";
import Footer from "./Footer";
import SubscriptionForm from "./SubscriptionForm";
import TaskBoardShowcase from "./TradeBoard";
import CreditsSection from "./CreditSection";
import HeroSection from "./Hero";

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState({});


  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    document.querySelectorAll(".animate-on-scroll").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Create Trade Request",
      description: "Share what you need and what you offer",
      icon: <Users className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Match Skills",
      description: "Connect with users having complementary skills",
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Track Progress",
      description: "Use built-in milestone tracking",
      icon: <Award className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Complete & Rate",
      description: "Finish the trade and share feedback",
      icon: <Star className="w-10 h-10 text-purple-500" />,
    },
  ];

  const targetUsers = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Developers",
      description: "Exchange coding work for UI/UX or marketing",
      bgGradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Designers",
      description: "Trade branding and UI/UX skills",
      bgGradient: "from-pink-500 to-rose-600",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Marketers",
      description: "Offer SEO and advertising expertise",
      bgGradient: "from-orange-500 to-amber-600",
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Content Creators",
      description: "Trade content writing and editing",
      bgGradient: "from-purple-500 to-violet-600",
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Students",
      description: "Gain real-world project experience",
      bgGradient: "from-green-500 to-emerald-600",
    },
  ];

  const features = [
    {
      title: "Trade Request System",
      description: "Define your needs and offerings clearly",
      icon: <ArrowRight className="w-6 h-6" />,
    },
    {
      title: "Milestone Tracking",
      description: "Monitor progress and ensure fair exchanges",
      icon: <ArrowRight className="w-6 h-6" />,
    },
    {
      title: "Experience-Based Learning",
      description: "Perfect for beginners and students",
      icon: <ArrowRight className="w-6 h-6" />,
    },
    {
      title: "Secure Collaboration",
      description: "Protected trade details until matched",
      icon: <ArrowRight className="w-6 h-6" />,
    },
    {
      title: "No Money Involved",
      description: "Pure skill-based barter system",
      icon: <ArrowRight className="w-6 h-6" />,
    },
    {
      title: "Credit System",
      description: "Optional credits for flexible exchanges",
      icon: <ArrowRight className="w-6 h-6" />,
    },
  ];

  

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      } transition-colors duration-300`}
    >
     
      <nav className="fixed w-full top-0 z-50 bg-opacity-80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SwapCrew
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#how-it-works"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#credit"
              className="font-medium hover:text-blue-600 transition-colors"
            >
             Credits
            </a>
            <a
              href="#use-cases"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              Use Cases
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* <button className="hidden md:block px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all">
              Sign Up
            </button> */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

     
      <HeroSection isDarkMode={isDarkMode} />


      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 opacity-50 skew-y-3"></div>
        <div className="container mx-auto relative z-10">
          <div
            className="text-center mb-16 animate-on-scroll"
            id="how-it-works-title"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Four simple steps to start trading skills and growing your network
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative animate-on-scroll ${
                  isVisible[`step-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } transition-all duration-700 delay-${index * 200}`}
                id={`step-${index}`}
              >
                <div
                  className={`p-8 rounded-xl ${
                    isDarkMode ? "bg-gray-800 bg-opacity-80" : "bg-white"
                  } shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-4 text-center">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <ChevronRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users with card hover effects */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div
            className="text-center mb-16 animate-on-scroll"
            id="target-users-title"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SwapCrew
              </span>{" "}
              is For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Whether you're established in your field or just starting out, our
              platform connects skilled individuals across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {targetUsers.map((user, index) => (
              <div
                key={index}
                className={`animate-on-scroll ${
                  isVisible[`user-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } transition-all duration-700 delay-${index * 150}`}
                id={`user-${index}`}
              >
                <div
                  className={`h-full p-6 rounded-xl ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${user.bgGradient}"></div>
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600 group-hover:text-indigo-600 transition-colors duration-300">
                      {user.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {user.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {user.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with interactive design */}
      <section id="features" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900 opacity-50 -skew-y-3"></div>
        <div className="container mx-auto relative z-10">
          <div
            className="text-center mb-16 animate-on-scroll"
            id="features-title"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our platform offers everything you need for successful skill
              trading
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`animate-on-scroll ${
                  isVisible[`feature-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } transition-all duration-700 delay-${index * 100}`}
                id={`feature-${index}`}
              >
                <div
                  className={`h-full p-6 rounded-xl ${
                    isDarkMode ? "bg-gray-800 bg-opacity-80" : "bg-white"
                  } shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 hover:border-indigo-600 group`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 mr-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 pl-12">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manage Your Trades With Ease
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Track progress, set milestones, and collaborate effectively with
              our intuitive task management system
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <TaskBoardShowcase />
          
          </div>
        </div>
      </section>

      <section className="py-16 px-6" id="credit">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
      
            <CreditsSection/>
          </div>
        </div>
      </section>

      {/* Testimonials with cards */}
      <section
        id="use-cases"
        className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="container mx-auto">
          <div
            className="text-center mb-16 animate-on-scroll"
            id="use-cases-title"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Potential{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how skills trading can transform your professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                persona: "Developer",
                scenario:
                  "A frontend developer wants to improve their app's SEO but lacks marketing expertise. Through SwapCrew, they exchange 10 hours of React development for comprehensive SEO optimization from a digital marketer.",
                outcome:
                  "Both professionals expand their project portfolio and gain services they couldn't otherwise afford.",
                avatar: "/api/placeholder/150/150",
                icon: <Code className="w-8 h-8" />,
              },
              {
                persona: "Design Student",
                scenario:
                  "A design student needs professional copy for their portfolio website. They match with a content writer who needs a new logo and brand identity for their freelance business.",
                outcome:
                  "The student gains real-world experience and professional content, while the writer receives high-quality design work.",
                avatar: "/api/placeholder/150/150",
                icon: <Palette className="w-8 h-8" />,
              },
              {
                persona: "Startup Founder",
                scenario:
                  "A bootstrapped startup founder needs legal document review but can't afford traditional legal fees. They exchange social media strategy consulting with a law student seeking to build their personal brand.",
                outcome:
                  "The founder gets necessary legal assistance, while the law student develops their professional online presence.",
                avatar: "/api/placeholder/150/150",
                icon: <Award className="w-8 h-8" />,
              },
              {
                persona: "Photographer",
                scenario:
                  "A photographer wants to create a custom portfolio website but lacks coding skills. They trade professional headshots and product photography with a web developer building their consulting business.",
                outcome:
                  "Both professionals enhance their online presence with specialized skills they couldn't access otherwise.",
                avatar: "/api/placeholder/150/150",
                icon: <PenTool className="w-8 h-8" />,
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className={`animate-on-scroll ${
                  isVisible[`use-case-${index}`]
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-20"
                    : "opacity-0 translate-x-20"
                } transition-all duration-1000`}
                id={`use-case-${index}`}
              >
                <div
                  className={`p-8 rounded-xl ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } shadow-xl hover:shadow-2xl transition-all duration-300 relative`}
                >
                  <div className="absolute -top-10 left-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
                      {useCase.icon}
                    </div>
                  </div>
                  <div className="pt-10">
                    <p className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-4">
                      {useCase.persona}
                    </p>
                    <h3 className="text-xl font-bold mb-4">The Scenario</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {useCase.scenario}
                    </p>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                      <h3 className="text-lg font-bold mb-2">The Outcome</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {useCase.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with gradient background */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-96 h-96 rounded-full bg-white absolute -top-20 -left-20 blur-3xl"></div>
          <div className="w-96 h-96 rounded-full bg-white absolute top-20 right-20 blur-3xl"></div>
          <div className="w-96 h-96 rounded-full bg-white absolute bottom-0 left-1/3 blur-3xl"></div>
        </div>

        <div
          className="container mx-auto text-center relative z-10 animate-on-scroll"
          id="cta"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Join the SwapCrew Community
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Start trading skills, building your portfolio, and growing your
            network today
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg">
                Join SwapCrew
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 hover:bg-opacity-30 transition-all transform hover:-translate-y-1">
                Explore Trades
              </button>
            </div>

            <SubscriptionForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
