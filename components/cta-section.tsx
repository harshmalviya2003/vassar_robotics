"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-10 opacity-90">
          Discover adaptive automation with Vassar Robotics, crafted in Cambridge, MA, and backed by Y Combinator.
        </p>
        <Button size="lg" variant="secondary">
          Join Our Beta Program
        </Button>
      </motion.div>
    </section>
  );
}