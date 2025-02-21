import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const HeroSection = ({ isDarkMode }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const numberOfDots = 100;
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initDots();
    };

    const initDots = () => {
      dotsRef.current = [];

      for (let i = 0; i < numberOfDots; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          originalX: Math.random() * canvas.width,
          originalY: Math.random() * canvas.height,
          color: isDarkMode
            ? `rgba(${139 + Math.random() * 30}, ${92 + Math.random() * 30}, ${
                246 + Math.random() * 30
              }, ${0.3 + Math.random() * 0.4})`
            : `rgba(${59 + Math.random() * 30}, ${130 + Math.random() * 30}, ${
                246 + Math.random() * 30
              }, ${0.3 + Math.random() * 0.4})`,
        });
      }
    };

    const drawDots = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.beginPath();
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i];
          const dot2 = dotsRef.current[j];
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)
          );

          if (distance < 100) {
            context.strokeStyle = isDarkMode
              ? `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`
              : `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            context.lineWidth = 0.5;
            context.moveTo(dot1.x, dot1.y);
            context.lineTo(dot2.x, dot2.y);
          }
        }
      }
      context.stroke();

      dotsRef.current.forEach((dot) => {
        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fillStyle = dot.color;
        context.fill();

        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(drawDots);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = anime({
        targets: dotsRef.current,
        x: (dot, i) => {
          const dx = mouseX - dot.x;
          const dy = mouseY - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const angle = Math.atan2(dy, dx);
            const force = 200 - distance;
            return dot.x - Math.cos(angle) * force * 0.3;
          } else {
            // Return to original position slowly
            return dot.originalX;
          }
        },
        y: (dot, i) => {
          const dx = mouseX - dot.x;
          const dy = mouseY - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            // Push dots away from mouse
            const angle = Math.atan2(dy, dx);
            const force = 200 - distance;
            return dot.y - Math.sin(angle) * force * 0.3;
          } else {
            // Return to original position slowly
            return dot.originalY;
          }
        },
        easing: "easeOutElastic(1, .5)",
        duration: 800,
        complete: function () {
          // Gradually return to original positions
          anime({
            targets: dotsRef.current,
            x: (dot) => dot.originalX,
            y: (dot) => dot.originalY,
            easing: "easeOutElastic(1, .5)",
            duration: 1500,
          });
        },
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    drawDots();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Canvas for anime.js animation */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500 opacity-10 filter blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-on-scroll" id="hero">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent leading-tight">
            Trade Skills, Build Together
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            SwapCrew is a skill-based service exchange platform where
            freelancers, students, and professionals collaborate
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold px-1">
              without financial barriers
            </span>
            .
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats banner */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            className={`p-6 rounded-xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg transform transition-all duration-300 hover:scale-105`}
          >
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              10,000+
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Target Community Size
            </p>
          </div>
          <div
            className={`p-6 rounded-xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg transform transition-all duration-300 hover:scale-105`}
          >
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              100%
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Skills-Based Exchange
            </p>
          </div>
          <div
            className={`p-6 rounded-xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg transform transition-all duration-300 hover:scale-105`}
          >
            <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              30+
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Planned Skill Categories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
