"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaHeart } from 'react-icons/fa';

const showcaseProjects = [
  {
    id: 1,
    title: "TaskFlow Dashboard",
    description: "A modern project management dashboard built with ClipUI components featuring kanban boards, analytics, and team collaboration.",
    image: "/api/placeholder/600/400",
    author: "Sarah Chen",
    authorImage: "/api/placeholder/40/40",
    category: "Dashboard",
    technologies: ["React", "Next.js", "ClipUI"],
    liveUrl: "#",
    githubUrl: "#",
    likes: 124,
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "Full-featured online store with product catalog, shopping cart, and checkout process using ClipUI components.",
    image: "/api/placeholder/600/400",
    author: "Mike Johnson",
    authorImage: "/api/placeholder/40/40",
    category: "E-commerce",
    technologies: ["React", "TypeScript", "ClipUI"],
    liveUrl: "#",
    githubUrl: "#",
    likes: 98,
    featured: false
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Creative portfolio showcasing design work with smooth animations and responsive layout built with ClipUI.",
    image: "/api/placeholder/600/400",
    author: "Emma Wilson",
    authorImage: "/api/placeholder/40/40",
    category: "Portfolio",
    technologies: ["React", "Framer Motion", "ClipUI"],
    liveUrl: "#",
    githubUrl: "#",
    likes: 156,
    featured: true
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    description: "Converting landing page for a SaaS product with pricing tables, testimonials, and feature sections.",
    image: "/api/placeholder/600/400",
    author: "David Park",
    authorImage: "/api/placeholder/40/40",
    category: "Landing Page",
    technologies: ["Next.js", "Tailwind", "ClipUI"],
    liveUrl: "#",
    githubUrl: "#",
    likes: 87,
    featured: false
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Modern blog platform with rich text editor, commenting system, and social sharing built with ClipUI.",
    image: "/api/placeholder/600/400",
    author: "Lisa Rodriguez",
    authorImage: "/api/placeholder/40/40",
    category: "Blog",
    technologies: ["React", "Node.js", "ClipUI"],
    liveUrl: "#",
    githubUrl: "#",
    likes: 203,
    featured: false
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with interactive charts and real-time updates using ClipUI components.",
    image: "/api/placeholder/600/400",
    author: "Alex Thompson",
    authorImage: "/api/placeholder/40/40",
    category: "Analytics",
    technologies: ["React", "D3.js", "ClipUI"],
    liveUrl: "#",
    githubUrl: "#",
    likes: 145,
    featured: true
  }
];

const categories = ["All", "Dashboard", "E-commerce", "Portfolio", "Landing Page", "Blog", "Analytics"];

export default function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? showcaseProjects 
    : showcaseProjects.filter(project => project.category === selectedCategory);

  const featuredProjects = showcaseProjects.filter(project => project.featured);

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
            Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing projects built with ClipUI components by our community
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Preview</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <FaHeart className="text-red-500" />
                      {project.likes}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">{project.author[0]}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.author}</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                      <FaExternalLinkAlt className="w-3 h-3" />
                      View Live
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                      <FaGithub className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Preview</span>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <FaHeart className="text-red-500 w-3 h-3" />
                    {project.likes}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">{project.author[0]}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.author}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-muted rounded-md transition-colors">
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-md transition-colors">
                      <FaGithub className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Submit Your Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Share Your Project</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Built something amazing with ClipUI? We'd love to feature your project in our showcase!
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Submit Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
