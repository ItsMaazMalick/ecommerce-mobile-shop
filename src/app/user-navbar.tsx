"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Products", href: "/#products" },
  { name: "Repairing Services", href: "/#services" },
];

export function UserNavbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <nav className={cn(className, "bg-white shadow-md")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              MobileShop
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/cart"
                className="p-2 text-gray-700 hover:text-primary transition duration-150 ease-in-out"
              >
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </motion.div>
            <div className="ml-4 md:hidden">
              <Button variant="ghost" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg absolute top-16 left-0 right-0 z-50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex justify-between items-center px-3">
            <Link
              href="/cart"
              className="text-gray-700 hover:text-primary transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Button variant="ghost" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
