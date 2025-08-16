// Component list for sidebar navigation
export const componentList = [
  { name: "Dashboard", icon: "home" },
  {
    name: "E-commerce",
    icon: "shopping-cart",
    children: [
      { name: "Products" },
      { name: "Billing" },
      { name: "Invoice" },
    ],
  },
  { name: "Kanban", icon: "view-boards", badge: "Pro" },
  { name: "Inbox", icon: "inbox", badge: "3", badgeColor: "blue" },
  { name: "Users", icon: "users" },
  { name: "Products", icon: "tag" },
  { name: "Sign In", icon: "arrow-right" },
  { name: "Sign Up", icon: "plus" },
];