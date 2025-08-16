"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaBookOpen, FaVideo, FaPencilRuler, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';

const resourceCategories = [
  {
    title: "Design Assets",
    icon: FaPencilRuler,
    description: "Design files and assets to help you prototype faster",
    resources: [
      {
        name: "Figma Design System",
        description: "Complete ClipUI components in Figma format",
        type: "Figma File",
        url: "#"
      },
      {
        name: "Sketch Library",
        description: "ClipUI components as a Sketch library",
        type: "Sketch File",
        url: "#"
      },
      {
        name: "Adobe XD Kit",
        description: "UI kit for Adobe XD with all components",
        type: "XD File",
        url: "#"
      },
      {
        name: "Icon Pack",
        description: "800+ icons used in ClipUI components",
        type: "SVG Pack",
        url: "#"
      }
    ]
  },
  {
    title: "Code Resources",
    icon: FaCode,
    description: "Code examples, snippets, and development tools",
    resources: [
      {
        name: "VS Code Extension",
        description: "ClipUI snippets and autocomplete for VS Code",
        type: "Extension",
        url: "#"
      },
      {
        name: "Storybook Examples",
        description: "Interactive component documentation",
        type: "Storybook",
        url: "#"
      },
      {
        name: "CodeSandbox Templates",
        description: "Ready-to-use project templates",
        type: "Templates",
        url: "#"
      },
      {
        name: "GitHub Repository",
        description: "Full source code and examples",
        type: "Repository",
        url: "#"
      }
    ]
  },
  {
    title: "Learning Materials",
    icon: FaBookOpen,
    description: "Tutorials, guides, and educational content",
    resources: [
      {
        name: "Video Course",
        description: "Complete ClipUI mastery course",
        type: "Video Series",
        url: "#"
      },
      {
        name: "Blog Articles",
        description: "Best practices and advanced techniques",
        type: "Articles",
        url: "#"
      },
      {
        name: "PDF Guide",
        description: "Complete reference guide in PDF format",
        type: "PDF",
        url: "#"
      },
      {
        name: "Interactive Tutorial",
        description: "Learn by building real projects",
        type: "Tutorial",
        url: "#"
      }
    ]
  },
  {
    title: "Community",
    icon: FaUsers,
    description: "Connect with other developers and get support",
    resources: [
      {
        name: "Discord Server",
        description: "Join our active developer community",
        type: "Community",
        url: "#"
      },
      {
        name: "GitHub Discussions",
        description: "Ask questions and share ideas",
        type: "Forum",
        url: "#"
      },
      {
        name: "Twitter",
        description: "Latest updates and announcements",
        type: "Social",
        url: "#"
      },
      {
        name: "Newsletter",
        description: "Monthly updates and new releases",
        type: "Newsletter",
        url: "#"
      }
    ]
  }
];

const tools = [
  {
    name: "Theme Builder",
    description: "Create custom themes with our visual editor",
    icon: FaPencilRuler,
    url: "#",
    tag: "New"
  },
  {
    name: "Component Generator",
    description: "Generate custom components based on your needs",
    icon: FaCode,
    url: "#",
    tag: "Beta"
  },
  {
    name: "Color Palette Generator",
    description: "Generate accessible color palettes for your theme",
    icon: FaPencilRuler,
    url: "#",
    tag: null
  },
  {
    name: "Migration Tool",
    description: "Migrate from other UI libraries to ClipUI",
    icon: FaCode,
    url: "#",
    tag: "Coming Soon"
  }
];

export default function ResourcesPage() {
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
            Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed with ClipUI - from design assets to code examples
          </p>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.a
                key={tool.name}
                href={tool.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="block group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  {tool.tag && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tool.tag === "New" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                      tool.tag === "Beta" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" :
                      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}>
                      {tool.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Resource Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.a
                    key={resource.name}
                    href={resource.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * resourceIndex }}
                    className="block group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {resource.name}
                      </h3>
                      <FaExternalLinkAlt className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {resource.description}
                    </p>
                    <span className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                      {resource.type}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest resources, tutorials, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
