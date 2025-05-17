"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

export function NewsletterSection() {
  const constraintsRef = useRef(null);
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        ref={constraintsRef}
      >
        {/* Floating AI nodes animation */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 500 - 250,
              opacity: 0.3,
            }}
            animate={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 500 - 250,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Join the Automation Revolution
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.2 }}
          >
            Get updates on Vassar Robotics’ adaptive automation innovations and industry insights from Cambridge, MA.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.4 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-5 px-4 text-base"
            />
            <Button 
              size="lg"
              className="px-6 py-5 text-base"
            >
              Stay in the Loop
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground mt-4"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            Your privacy is our priority. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}