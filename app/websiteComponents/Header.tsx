"use client"

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import SearchBar from "./SearchBar";
import SpotlightSearchModal from "./SpotlightSearchModal";
import { navItems } from "../constants/navigation";
import { FaGithub, FaStar } from "react-icons/fa";

export function Header() {
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

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

  useEffect(() => {
    function handleShortcut(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-[60] border-b border-border/50"
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
            <Link href="/" className="flex items-center space-x-2">
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
            </Link>
          </motion.div>
          
          <div className="flex-1 flex justify-center">
            <SearchBar />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 3).map((item, index) => {
              const isActive = pathname === item.href || (item.href === '/components' && pathname.startsWith('/components'));
              return (
                <motion.div key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`transition-colors relative ${
                        isActive 
                          ? 'text-primary font-medium' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <motion.span
                        whileHover={{ y: -2 }}
                        className="block"
                      >
                        {item.name}
                      </motion.span>
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                          layoutId="activeNavIndicator"
                          initial={false}
                          animate={{ opacity: 1 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
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
      <SpotlightSearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
