"use client"

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import SearchBar from "./SearchBar";
import { FaGithub, FaStar } from "react-icons/fa"; // Add FaStar import

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [stars, setStars] = useState<number | null>(null);

  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  useEffect(() => {
    fetch("https://api.github.com/repos/saha-sagnik/UIMint")
      .then(res => res.json())
      .then(data => setStars(data.stargazers_count));
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{
        backgroundColor: `rgba(24, 24, 38, ${headerOpacity.get()})`,
        backdropFilter: `blur(${headerBlur.get()}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center gap-x-6">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-foreground font-bold">C</span>
          </motion.div>
          <span className="text-xl font-bold">ClipUI</span>
          {/* Version badge */}
          <span className="ml-2 px-2 py-0.5 rounded-full bg-muted text-xs font-semibold text-primary-foreground border border-border">
            v1.0.0
          </span>
        </motion.div>
        
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Components", "Docs", "Resources"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <a
            href="https://github.com/saha-sagnik/UIMint"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 border rounded-md bg-transparent hover:bg-primary/10 transition"
          >
            <FaGithub className="w-5 h-5" />
            <FaStar className="w-4 h-4 text-yellow-400" />
            <span>{stars !== null ? stars : "--"}</span>
            <span className="sr-only">GitHub Stars</span>
          </a>
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            className="px-2 py-1 border rounded-md hover:scale-105 transition-transform"
            onClick={() => alert('Sign In clicked!')}
          >
            Sign In
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
}
