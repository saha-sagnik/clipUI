"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaRocket, FaPalette, FaCog, FaQuestionCircle } from 'react-icons/fa';

const docSections = [
  {
    title: "Getting Started",
    icon: FaRocket,
    description: "Quick setup guide to get ClipUI running in your project",
    articles: [
      "Installation",
      "First Component",
      "Project Structure",
      "Configuration"
    ]
  },
  {
    title: "Components",
    icon: FaCode,
    description: "Comprehensive guide to all available components",
    articles: [
      "Button Components",
      "Form Elements",
      "Layout Components",
      "Navigation Elements",
      "Data Display",
      "Feedback Components"
    ]
  },
  {
    title: "Theming",
    icon: FaPalette,
    description: "Customize colors, typography, and design tokens",
    articles: [
      "Color System",
      "Typography",
      "Dark Mode",
      "Custom Themes",
      "CSS Variables"
    ]
  },
  {
    title: "Advanced",
    icon: FaCog,
    description: "Advanced patterns and customization techniques",
    articles: [
      "Custom Components",
      "Animation System",
      "Performance Tips",
      "TypeScript Integration",
      "Build Optimization"
    ]
  }
];

const quickLinks = [
  {
    title: "Installation Guide",
    description: "Get up and running in 5 minutes",
    href: "#installation"
  },
  {
    title: "Component API",
    description: "Complete reference for all components",
    href: "#components"
  },
  {
    title: "Examples",
    description: "Ready-to-use code examples",
    href: "#examples"
  },
  {
    title: "Migration Guide",
    description: "Upgrading from older versions",
    href: "#migration"
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build beautiful interfaces with ClipUI
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Documentation Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {section.description}
                </p>
                <div className="space-y-2">
                  {section.articles.map((article) => (
                    <a
                      key={article}
                      href={`#${article.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 px-3 rounded-md hover:bg-muted transition-colors text-sm"
                    >
                      {article}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Quick Example</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
              <span className="text-sm font-medium">Installation</span>
              <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Copy
              </button>
            </div>
            <div className="p-4 bg-muted/20">
              <pre className="text-sm text-muted-foreground">
                <code>{`npm install @clipui/react

import { Button } from '@clipui/react'

export function App() {
  return (
    <Button variant="primary">
      Get Started
    </Button>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaQuestionCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Is ClipUI compatible with my existing project?",
                a: "Yes! ClipUI is designed to work with any React project and can be gradually adopted."
              },
              {
                q: "Do I need to eject from Create React App?",
                a: "No, ClipUI works perfectly with Create React App without any ejection required."
              },
              {
                q: "Can I customize the default theme?",
                a: "Absolutely! ClipUI provides extensive theming capabilities with CSS variables and design tokens."
              },
              {
                q: "Is TypeScript supported?",
                a: "Yes, ClipUI is written in TypeScript and provides full type definitions."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card border border-border rounded-lg p-4"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-card border border-border rounded-lg p-8">
            <FaBook className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Join our community or reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Join Discord
              </button>
              <button className="px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
