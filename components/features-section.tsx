"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Notebook as Robot, Zap } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Adaptability",
    description:
      "Our automation systems use advanced AI to learn and evolve, optimizing performance in dynamic industrial settings.",
  },
  {
    icon: Robot,
    title: "Real-World Solutions",
    description:
      "We design automation tailored to solve practical business challenges, ensuring immediate value and efficiency.",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description:
      "Deploy our solutions quickly with minimal setup, built for instant compatibility with existing workflows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
    },
  },
};

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Why Vassar Robotics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience intelligent automation crafted in Cambridge, MA, backed by Y Combinator, and designed to empower your business.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-muted/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-14 w-14 text-primary mb-6" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}