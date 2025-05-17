"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function AboutSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", bounce: 0.5 }
    }
  };

  return (
    <section className="py-28 bg-gradient-to-b from-muted/20 to-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Column */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Vassar Robotics automation technology"
                className="w-full h-auto object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            <motion.div 
              variants={highlightVariants}
              className="absolute -bottom-5 -right-5 bg-background p-5 rounded-xl shadow-lg border border-primary/10 backdrop-blur-sm"
            >
              <div className="text-primary font-bold text-xl">Since 2025</div>
              <div className="text-muted-foreground text-sm">Building Tomorrow’s Automation</div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-semibold text-primary mb-3 tracking-wider">ABOUT US</h2>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Pioneering <span className="text-primary">Adaptive Automation</span>
              </h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground">
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                <span className="font-medium text-foreground">Vassar Robotics</span>, founded in 
                <span className="font-semibold text-primary"> 2025</span> by Miguel Flores-Acton and Charles Yong, 
                is redefining automation with practical, innovative solutions designed for real-world impact.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                Based in <span className="font-semibold text-primary">Cambridge, MA</span>, and part of 
                <span className="font-semibold"> Y Combinator’s Spring 2025 batch</span>, we bridge advanced 
                technology with industry needs to make automation accessible and effective.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                Our team leverages expertise in <span className="text-primary font-medium">robotics</span>, 
                <span className="text-primary font-medium"> artificial intelligence</span>, and 
                <span className="text-primary font-medium"> system integration</span> to empower businesses 
                in the heart of Boston’s robotics ecosystem.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
              >
                Explore Our Mission
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-primary/30 text-foreground rounded-lg font-medium hover:bg-primary/5 transition-all shadow-sm hover:shadow-md"
              >
                Meet Our Founders
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}