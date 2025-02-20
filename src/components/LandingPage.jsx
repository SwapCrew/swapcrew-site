import React, { useState } from "react";
import {
  Sun,
  Moon,
  Code,
  Palette,
  Megaphone,
  PenTool,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
// import Footer from "./Footer";

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const steps = [
    {
      title: "Create Trade Request",
      description: "Share what you need and what you offer",
    },
    {
      title: "Match Skills",
      description: "Connect with users having complementary skills",
    },
    { title: "Track Progress", description: "Use built-in milestone tracking" },
    {
      title: "Complete & Rate",
      description: "Finish the trade and share feedback",
    },
  ];

  const targetUsers = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developers",
      description: "Exchange coding work for UI/UX or marketing",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Designers",
      description: "Trade branding and UI/UX skills",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketers",
      description: "Offer SEO and advertising expertise",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Content Creators",
      description: "Trade content writing and editing",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Students",
      description: "Gain real-world project experience",
    },
  ];

  const features = [
    {
      title: "Trade Request System",
      description: "Define your needs and offerings clearly",
    },
    {
      title: "Milestone Tracking",
      description: "Monitor progress and ensure fair exchanges",
    },
    {
      title: "Experience-Based Learning",
      description: "Perfect for beginners and students",
    },
    {
      title: "Secure Collaboration",
      description: "Protected trade details until matched",
    },
    {
      title: "No Money Involved",
      description: "Pure skill-based barter system",
    },
    {
      title: "Credit System",
      description: "Optional credits for flexible exchanges",
    },
  ];

  const testimonials = [
    {
      quote:
        "SwapCrew helped me trade web development for SEO services, doubling my visibility!",
      author: "Alex Chen, Freelance Developer",
    },
    {
      quote:
        "As a student designer, I got real-world experience creating a startup's brand identity.",
      author: "Sarah Miller, Design Student",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SwapCrew</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Trade Skills, Build Together, No Money Involved!
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            SwapCrew is a skill-based service exchange platform where
            freelancers, students, and professionals collaborate without
            financial barriers.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`p-6 rounded-xl ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg hover:shadow-xl transition-all`}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Who SwapCrew is For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {targetUsers.map((user, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="mb-4 text-blue-600">{user.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{user.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {user.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl transition-all`}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                <p className="font-semibold text-blue-600">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Join the SwapCrew Community
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4 justify-center mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all">
                Join SwapCrew
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all">
                Explore Trades
              </button>
            </div>
            <div className="mb-8">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section><Footer /></section> */}
    </div>
  );
};

export default LandingPage;
