"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Notebook as Robot, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b sticky top-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Vassar Robotics logo"
              width={32}
              height={32}
            />
            <span className="ml-2 text-xl font-bold">Vassar Robotics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                asChild
              >
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
            <ThemeToggle />
            <Button variant="default" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/beta">Join Beta</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2 flex flex-col">
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                ))}
                <div className="flex space-x-2 pt-2">
                  <Button variant="default" className="flex-1" asChild>
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button variant="secondary" className="flex-1" asChild>
                    <Link href="/beta">Join Beta</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}