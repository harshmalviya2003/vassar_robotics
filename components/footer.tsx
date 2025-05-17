"use client";

import { motion } from "framer-motion";
import { Notebook as Robot, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div 
            className="space-y-4"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center">
              <Robot className="h-6 w-6 text-primary" />
              <span className="ml-2 font-semibold">Vassar Robotics</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Pioneering adaptive automation from Cambridge, MA.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Twitter, href: "https://twitter.com/vassarrobotics" },
                { Icon: Github, href: "https://github.com/vassarrobotics" },
                { Icon: Linkedin, href: "https://linkedin.com/company/vassarrobotics" },
              ].map(({ Icon, href }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Links Columns */}
          {[
            { title: "Company", links: ["About", "Team", "Mission", "Contact"] },
            { title: "Resources", links: ["Docs", "Beta Program", "Events", "Community"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Security"] },
          ].map((column, i) => (
            <motion.div
              key={column.title}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <h3 className="font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Button
                      variant="link"
                      className="px-0 text-muted-foreground"
                      asChild
                    >
                      <a
                        href={`/${link.toLowerCase().replace(" ", "-")}`}
                        rel="noopener noreferrer"
                      >
                        {link}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Copyright */}
        <motion.div
          className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Demo Vassar Robotics, DesignsVerse.
        </motion.div>
      </motion.div>
    </footer>
  );
}