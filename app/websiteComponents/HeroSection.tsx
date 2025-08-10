import { FaStar } from "react-icons/fa";
import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full pt-32 pb-16 flex flex-col items-center justify-center text-center">
      <div className="mb-6">
        <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/30 text-primary-foreground text-sm font-semibold border-none mb-8 shadow-lg max-w-md mx-auto justify-center">
          <FaStar className="w-5 h-5 text-yellow-400" />
          <span>Coming Soon - Developer Preview</span>
        </span>
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4">
          <span className="block text-foreground">Ship UI faster</span>
          <span className="block bg-gradient-to-r from-primary via-purple-500 to-blue-900 bg-clip-text text-transparent font-extrabold">
            across platforms
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10">
          ClipUI provides a unified component library for SwiftUI, Jetpack Compose, and React Native. Write once, deploy everywhere with consistent design.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-secondary transition flex items-center gap-2">
            Join Waitlist
            <span className="inline-block ml-1">→</span>
          </button>
          <button className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-muted transition bg-transparent">
            View Demo
          </button>
        </div>
        <div className="flex gap-64 justify-center mt-16">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-primary">3</span>
            <span className="text-sm text-muted-foreground mt-1">Platforms</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-primary">100+</span>
            <span className="text-sm text-muted-foreground mt-1">Components</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-primary">1</span>
            <span className="text-sm text-muted-foreground mt-1">API</span>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">One Library, Three Platforms</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          ClipUI bridges the gap between native development platforms with a unified component system that feels native on every platform.
        </p>
      </div>
    </section>
  );
}
