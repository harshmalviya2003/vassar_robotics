"use client";

import { useRef, useEffect } from "react";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video parallax effect
      gsap.fromTo(
        videoRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Text animation with stagger
      const headingSpans = headingRef.current?.querySelectorAll("span");
      if (headingSpans) {
        gsap.from(headingSpans, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: { amount: 0.8, from: "random" },
          ease: "expo.out",
          delay: 0.2,
        });
      }

      // Subtext animation
      if (subTextRef.current) {
        gsap.from(subTextRef.current, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "circ.out",
          delay: 0.8,
        });
      }

      // Button animation
      const buttonElements = buttonsRef.current?.children;
      if (buttonElements) {
        gsap.from(buttonElements, {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(2)",
          delay: 1.2,
          rotationX: 15,
          transformOrigin: "50% 50% -50px",
        });
      }

      // Floating particles animation
      const particles = heroRef.current?.querySelectorAll(".particle");
      if (particles) {
        particles.forEach((particle, i) => {
          const duration = 10 + Math.random() * 10;
          const delay = Math.random() * 5;
          const x = (Math.random() - 0.5) * 100;
          const y = (Math.random() - 0.5) * 100;

          gsap.to(particle, {
            x,
            y,
            duration,
            delay,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Animated grain overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15 mix-blend-overlay"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/20 blur-3xl"></div>

        {/* Animated particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-white/20"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}

        <h1
          ref={headingRef}
          className="text-5xl sm:text-7xl lg:text-7xl font-bold tracking-tight text-white overflow-hidden leading-tight"
        >
          <span className="inline-block overflow-hidden">
            <span className="inline-block">ADAPTIVE</span>
          </span>{" "}
          <span className="inline-block overflow-hidden">
            <span className="inline-block font-light">AUTOMATION</span>
          </span>{" "}
          <span className="inline-block overflow-hidden">
            <span className="inline-block">SOLUTIONS</span>
          </span>
        </h1>

        <div className="relative mt-8 mb-12 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-white to-transparent overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-white animate-[shimmer_3s_linear_infinite]"></div>
        </div>

        <p
          ref={subTextRef}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Founded in 2025 by Miguel Flores-Acton and Charles Yong, Vassar Robotics delivers practical automation technologies that empower industries with accessible, innovative solutions from Cambridge, MA.
        </p>

        <div
          ref={buttonsRef}
          className="mt-12 flex flex-wrap gap-6 justify-center"
        >
          <Button
            size="lg"
            className="min-w-[220px] bg-black text-white border border-white font-medium transition-none"
          >
            <span>Discover Our Tech</span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="min-w-[220px] bg-black text-white border border-white font-medium transition-none"
          >
            <Play className="mr-2 h-5 w-5" />
            <span>Watch Demo</span>
          </Button>
        </div>

        {/* Rating Section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2">5.0/5 (Early Adopters)</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          <div>Proudly part of Y Combinator Spring 2025</div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
        @keyframes scrollIndicator {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(30px);
          }
        }
      `}</style>
    </section>
  );
}