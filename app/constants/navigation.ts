
export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  {
    name: "Components",
    href: "/components",
    description: "Explore our collection of UI components"
  },
//   {
//     name: "Templates",
//     href: "/templates",
//     description: "Ready-to-use templates and layouts"
//   },
//   {
//     name: "Pricing",
//     href: "/pricing",
//     description: "Choose the plan that works for you"
//   },
//   {
//     name: "Showcase",
//     href: "/showcase",
//     description: "See what others have built with ClipUI"
//   },
  {
    name: "Docs",
    href: "/docs",
    description: "Documentation and guides"
  },
  {
    name: "Resources",
    href: "/resources",
    description: "Additional resources and tools"
  }
];
