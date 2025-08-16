// Component registry for ClipUI components
export interface ComponentInfo {
  name: string;
  path: string;
  category: string;
  description: string;
  platforms: ('swiftui' | 'compose' | 'reactnative')[];
  tags: string[];
  isNew?: boolean;
  isPro?: boolean;
}

export const componentRegistry: ComponentInfo[] = [
  {
    name: 'Button',
    path: '/components/button',
    category: 'Form',
    description: 'A fundamental UI component for triggering actions across SwiftUI, Jetpack Compose, and React Native.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['button', 'action', 'form', 'interactive'],
    isNew: true
  },
  {
    name: 'Blur Text',
    path: '/components/blur-text',
    category: 'Text',
    description: 'Text component with blur effect for creating sophisticated text animations and transitions.',
    platforms: ['swiftui', 'compose', 'reactnative'],
    tags: ['text', 'animation', 'blur', 'effect'],
    isNew: true
  }
  // Add more components here as they are created
];

// Helper functions
export const getComponentsByCategory = (category: string) => {
  return componentRegistry.filter(component => component.category === category);
};

export const getComponentsByPlatform = (platform: 'swiftui' | 'compose' | 'reactnative') => {
  return componentRegistry.filter(component => component.platforms.includes(platform));
};

export const searchComponents = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return componentRegistry.filter(component => 
    component.name.toLowerCase().includes(lowercaseQuery) ||
    component.description.toLowerCase().includes(lowercaseQuery) ||
    component.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getNewComponents = () => {
  return componentRegistry.filter(component => component.isNew);
};

export const getProComponents = () => {
  return componentRegistry.filter(component => component.isPro);
};
