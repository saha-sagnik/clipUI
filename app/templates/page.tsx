"use client"

import React from 'react';
import { motion } from 'framer-motion';

const templates = [
  {
    id: 1,
    name: "Dashboard Template",
    description: "Modern admin dashboard with sidebar navigation and charts",
    image: "/api/placeholder/400/250",
    category: "Admin",
    tags: ["Dashboard", "Charts", "Tables"],
    preview: "#",
    source: "#"
  },
  {
    id: 2,
    name: "Landing Page",
    description: "Clean and modern landing page with hero section and features",
    image: "/api/placeholder/400/250",
    category: "Marketing",
    tags: ["Landing", "Hero", "Features"],
    preview: "#",
    source: "#"
  },
  {
    id: 3,
    name: "E-commerce",
    description: "Complete e-commerce template with product listing and cart",
    image: "/api/placeholder/400/250",
    category: "E-commerce",
    tags: ["Shop", "Cart", "Products"],
    preview: "#",
    source: "#"
  },
  {
    id: 4,
    name: "Portfolio",
    description: "Creative portfolio template for designers and developers",
    image: "/api/placeholder/400/250",
    category: "Portfolio",
    tags: ["Creative", "Portfolio", "Gallery"],
    preview: "#",
    source: "#"
  },
  {
    id: 5,
    name: "Blog Template",
    description: "Clean blog template with article listing and reading view",
    image: "/api/placeholder/400/250",
    category: "Blog",
    tags: ["Blog", "Articles", "Content"],
    preview: "#",
    source: "#"
  },
  {
    id: 6,
    name: "SaaS Template",
    description: "Complete SaaS template with pricing and feature sections",
    image: "/api/placeholder/400/250",
    category: "SaaS",
    tags: ["SaaS", "Pricing", "Features"],
    preview: "#",
    source: "#"
  }
];

const categories = ["All", "Admin", "Marketing", "E-commerce", "Portfolio", "Blog", "SaaS"];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredTemplates = selectedCategory === "All" 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

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
            Templates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use templates and layouts to jumpstart your projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-muted-foreground border-border hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Preview Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                    {template.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    Preview
                  </button>
                  <button className="flex-1 px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                    View Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
