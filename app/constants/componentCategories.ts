// Component categories and items for sidebar navigation
export interface ComponentItem {
  name: string;
  path: string;
  isNew?: boolean;
}

export interface ComponentCategory {
  category: string;
  items: ComponentItem[];
}

export const componentCategories: ComponentCategory[] = [
  {
    category: "Text",
    items: [
      { name: "Blur Text", path: "/components/blur-text" },
      { name: "Circular Text", path: "/components/circular-text" },
      { name: "Text Type", path: "/components/text-type", isNew: true },
      { name: "Shiny Text", path: "/components/shiny-text" },
      { name: "Text Pressure", path: "/components/text-pressure" },
      { name: "Curved Loop", path: "/components/curved-loop", isNew: true },
      { name: "Fuzzy Text", path: "/components/fuzzy-text" },
      { name: "Gradient Text", path: "/components/gradient-text" },
      { name: "Text Trail", path: "/components/text-trail" },
      { name: "Falling Text", path: "/components/falling-text" },
      { name: "Text Cursor", path: "/components/text-cursor" },
      { name: "Decrypted Text", path: "/components/decrypted-text" },
      { name: "True Focus", path: "/components/true-focus" },
      { name: "Scroll Float", path: "/components/scroll-float" },
      { name: "Scroll Reveal", path: "/components/scroll-reveal" },
      { name: "ASCII Text", path: "/components/ascii-text" },
      { name: "Scramble Text", path: "/components/scramble-text" },
      { name: "Rotating Text", path: "/components/rotating-text" },
      { name: "Glitch Text", path: "/components/glitch-text" },
      { name: "Scroll Velocity", path: "/components/scroll-velocity" },
    ],
  },
  {
    category: "Buttons",
    items: [
      { name: "Primary Button", path: "/components/button" },
      { name: "Secondary Button", path: "/components/secondary-button" },
      { name: "Ghost Button", path: "/components/ghost-button" },
      { name: "Icon Button", path: "/components/icon-button" },
    ],
  },
  {
    category: "Layout",
    items: [
      { name: "Container", path: "/components/container" },
      { name: "Grid", path: "/components/grid" },
      { name: "Flex", path: "/components/flex" },
      { name: "Stack", path: "/components/stack" },
    ],
  },
  {
    category: "Navigation",
    items: [
      { name: "Navbar", path: "/components/navbar" },
      { name: "Breadcrumb", path: "/components/breadcrumb" },
      { name: "Pagination", path: "/components/pagination" },
      { name: "Tabs", path: "/components/tabs" },
    ],
  },
];
