"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import {
  FaRobot,
  FaCogs,
  FaMicrochip,
  FaBrain,
  FaFlask,
  FaCheckCircle,
  FaTools,
  FaLightbulb,
  FaChartLine,
  FaNetworkWired,
  FaCodeBranch,
} from "react-icons/fa";
import { GiArtificialIntelligence, GiProcessor, GiGears } from "react-icons/gi";
import { BsStars, BsCpu, BsLightningCharge } from "react-icons/bs";

export default function AutomationProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Mobile breakpoint at 640px
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create particles (optimized for mobile)
    const createParticles = () => {
      if (!particlesRef.current) return;

      particlesRef.current.innerHTML = "";
      const particleCount = isMobile ? 20 : 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute rounded-full bg-gray-500";

        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 8;

        gsap.set(particle, {
          width: `${size}px`,
          height: `${size}px`,
          left: `${posX}%`,
          top: `${posY}%`,
          opacity: 0,
          scale: 0,
        });

        gsap.to(particle, {
          opacity: Math.random() * 0.4 + 0.2,
          scale: 1,
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        particlesRef.current.appendChild(particle);
      }
    };

    // Create particles on mount
    createParticles();

    // Desktop-specific animations (horizontal scroll)
    if (!isMobile) {
      const panels = gsap.utils.toArray(".panel") as HTMLElement[];
      const scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          end: () => `+=${containerRef.current?.offsetWidth || window.innerWidth * panels.length}`,
          markers: false,
        },
      });

      // Adaptive AI Engine Box Animation
      gsap.to(".ai-box", {
        boxShadow: "0 0 30px rgba(100, 100, 100, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".ai-box",
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none reset",
        },
      });

      // Automation Testing Suite Box Animation
      gsap.to(".test-box", {
        boxShadow: "0 0 30px rgba(100, 100, 100, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".test-box",
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none reset",
        },
      });

      // Collaborative Innovation Hub Box Animation
      gsap.to(".design-box", {
        boxShadow: "0 0 30px rgba(100, 100, 100, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-box",
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none reset",
        },
      });

      gsap.from(".cascade-text", {
        opacity: 1,
        duration: 1,
        visibility: "visible",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".cascade-section",
          containerAnimation: scrollTween,
          start: "left 60%",
        },
      });
    } else {
      // Mobile-specific animations (vertical scroll)
      // Adaptive AI Engine Box Animation
      gsap.to(".ai-box", {
        boxShadow: "0 0 30px rgba(100, 100, 100, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".ai-box",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      // Automation Testing Suite Box Animation
      gsap.to(".test-box", {
        boxShadow: "0 0 30px rgba(100, 100, 100, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".test-box",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      // Collaborative Innovation Hub Box Animation
      gsap.to(".design-box", {
        boxShadow: "0 0 30px rgba(100, 100, 100, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-box",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      gsap.from(".cascade-text", {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".cascade-section",
          start: "top 60%",
        },
      });
    }

    // Force ScrollTrigger refresh after setup
    setTimeout(() => ScrollTrigger.refresh(), 100);

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Particle Background */}
      <div ref={particlesRef} className="fixed inset-0 z-0 pointer-events-none" />

      {isMobile ? (
        // Mobile View (Vertical Grid Layout)
        <div className="relative z-10 box-border">
          {/* Vassar Robotics Platform Section */}
          <section className="min-h-screen w-full py-16 px-4 sm:px-8">
            <div className="w-full max-w-7xl mx-auto">
              <div className="mb-20">
                <div className="flex justify-center mb-12">
                  <div className="p,zerofour bg-gray-500/20 rounded-full border border-gray-500/50">
                    <FaRobot className="text-5xl text-gray-500" />
                  </div>
                </div>
                <h1 className="cascade-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white text-center">
                  <span className="text-gray-500">Vassar Robotics</span> Platform
                </h1>
                <p className="cascade-text text-base sm:text-lg md:text-xl text-gray-300 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
                  Empower your business with adaptive automation solutions, powered by <span className="text-gray-500">AI</span> and designed for real-world impact, from Cambridge, MA.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
                {/* Adaptive AI Engine Box */}
                <div className="ai-box bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-500/20 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-500/20 rounded-full border border-gray-500/50">
                      <GiArtificialIntelligence className="text-5xl text-gray-500" />
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-widest mb-4 text-center">Smart Automation</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Adaptive AI Engine</h2>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    Build intelligent automation systems that adapt and optimize in real time, leveraging AI-driven insights and scalable architectures.
                  </p>
                  <div className="text-center">
                    <Link
                      href="/platform#adaptive-ai"
                      className="inline-flex items-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <BsLightningCharge className="mr-2" /> Start Building
                    </Link>
                  </div>
                </div>

                {/* Automation Testing Suite Box */}
                <div className="test-box bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-500/20 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-500/20 rounded-full border border-gray-500/50">
                      <FaFlask className="text-5xl text-gray-500" />
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-widest mb-4 text-center">Reliability Suite</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Automation Testing Suite</h2>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    Ensure robust automation with testing tools designed for real-world applications, featuring pre-built templates and automated validation.
                  </p>
                  <div className="text-center">
                    <Link
                      href="/platform#testing-suite"
                      className="inline-flex items-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <FaCheckCircle className="mr-2" /> Test Now
                    </Link>
                  </div>
                </div>

                {/* Collaborative Innovation Hub Box */}
                <div className="design-box bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-500/20 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-500/20 rounded-full border border-gray-500/50">
                      <FaLightbulb className="text-5xl text-gray-500" />
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-widest mb-4 text-center">Community-Driven</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Collaborative Innovation Hub</h2>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    Shape the future of automation by contributing ideas and prioritizing features, backed by Y Combinator’s innovative ecosystem.
                  </p>
                  <div className="text-center">
                    <Link
                      href="/platform#innovation-hub"
                      className="inline-flex items-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <FaCodeBranch className="mr-2" /> Collaborate Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                <Link
                  href="/platform"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-gray-500/50"
                >
                  <FaRobot className="mr-2" /> Discover Platform
                </Link>
                <Link
                  href="/solutions"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500/20 font-semibold rounded-full transition-all transform hover:scale-105"
                >
                  <BsStars className="mr-2" /> Explore Solutions
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        // Desktop View (Horizontal Scrolling)
        <div ref={containerRef} className="relative h-screen w-[400%] flex z-10 box-border">
          {/* Vassar Robotics Platform Panel */}
          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8 opacity-100">
            <div className="w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-gray-500/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-500/20 rounded-full border border-gray-500/50">
                  <FaRobot className="text-5xl text-gray-500" />
                </div>
              </div>
              <h1 className="cascade-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                <span className="text-gray-500">Vassar Robotics</span> Platform
              </h1>
              <p className="cascade-text text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
                Empower your business with adaptive automation solutions, powered by <span className="text-gray-500">AI</span> and designed for real-world impact, from Cambridge, MA.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-16">
                <Link
                  href="/platform"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-gray-500/50"
                >
                  <FaRobot className="mr-2" /> Discover Platform
                </Link>
                <Link
                  href="/solutions"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500/20 font-semibold rounded-full transition-all transform hover:scale-105"
                >
                  <BsStars className="mr-2" /> Explore Solutions
                </Link>
              </div>
              <div className="flex justify-center space-x-8 mt-8 opacity-80">
                <FaMicrochip className="text-2xl text-gray-500" />
                <FaBrain className="text-2xl text-gray-500" />
                <GiGears className="text-2xl text-gray-500" />
                <BsCpu className="text-2xl text-gray-500" />
              </div>
            </div>
          </section>

          {/* Adaptive AI Engine Panel */}
          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8">
            <div className="ai-box w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-gray-500/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-500/20 rounded-full border border-gray-500/50">
                  <GiArtificialIntelligence className="text-5xl text-gray-500" />
                </div>
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-widest mb-4">Smart Automation</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Adaptive AI Engine</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Build intelligent automation systems that adapt and optimize in real time, leveraging AI-driven insights and scalable architectures.
              </p>
              <Link
                href="/platform#adaptive-ai"
                className="inline-flex items-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <BsLightningCharge className="mr-2" /> Start Building
              </Link>
            </div>
          </section>

          {/* Automation Testing Suite Panel */}
          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8">
            <div className="test-box w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-gray-500/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-500/20 rounded-full border border-gray-500/50">
                  <FaFlask className="text-5xl text-gray-500" />
                </div>
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-widest mb-4">Reliability Suite</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Automation Testing Suite</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Ensure robust automation with testing tools designed for real-world applications, featuring pre-built templates and automated validation.
              </p>
              <Link
                href="/platform#testing-suite"
                className="inline-flex items-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <FaCheckCircle className="mr-2" /> Test Now
              </Link>
            </div>
          </section>

          {/* Collaborative Innovation Hub Panel */}
          <section className="cascade-section panel w-full h-full flex items-center justify-center p-4 sm:p-8">
            <div className="design-box w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-gray-500/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-500/20 rounded-full border border-gray-500/50">
                  <FaLightbulb className="text-5xl text-gray-500" />
                </div>
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-widest mb-4">Community-Driven</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Collaborative Innovation Hub</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Shape the future of automation by contributing ideas and prioritizing features, backed by Y Combinator’s innovative ecosystem.
              </p>
              <Link
                href="/platform#innovation-hub"
                className="inline-flex items-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <FaCodeBranch className="mr-2" /> Collaborate Now
              </Link>
            </div>
          </section>
        </div>
      )}

      {/* Final CTA Section (Shared for both views) */}
      <section className="relative py-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-black z-10 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gray-500/20 rounded-full border border-gray-500/50">
              <FaRobot className="text-5xl text-gray-500" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your <span className="text-gray-500">Business</span> with Automation
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join businesses leveraging Vassar Robotics’ AI-driven solutions, crafted in Cambridge, MA, to revolutionize operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-gray-500/50"
            >
              <FaRobot className="mr-2" /> Contact Us
            </Link>
            <Link
              href="/solutions"
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 bg-transparent border-2 border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500/20 font-semibold rounded-full transition-all transform hover:scale-105"
            >
              <BsStars className="mr-2" /> Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}