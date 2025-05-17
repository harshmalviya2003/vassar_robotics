"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dr. Anika Patel",
    role: "Lead Engineer at InnovateLabs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content: "Vassar Robotics’ adaptive automation streamlined our prototype testing, saving us weeks of development time."
  },
  {
    name: "James Carter",
    role: "Founder of AutoTech Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content: "Their AI-driven systems integrated seamlessly into our workflows, boosting efficiency from day one."
  },
  {
    name: "Lila Nguyen",
    role: "Operations Lead at SmartFact",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content: "The practical solutions from Vassar Robotics transformed our small-scale operations with minimal setup."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What Early Adopters Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from innovators and businesses who are transforming their operations with Vassar Robotics’ adaptive automation solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card
                className="h-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
                role="article"
                aria-labelledby={`testimonial-${testimonial.name}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}, ${testimonial.role} at their company`}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/10"
                      loading="lazy"
                    />
                    <div>
                      <h3
                        id={`testimonial-${testimonial.name}`}
                        className="text-lg font-semibold text-foreground"
                      >
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative pt-2">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-base text-muted-foreground italic leading-relaxed mt-6">
                    “{testimonial.content}”
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}