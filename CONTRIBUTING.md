# Contributing to ClipUI

Thank you for your interest in contributing to ClipUI! This guide will help you get started with adding new components to our cross-platform UI library.

## Quick Start

### Using the Component Generator

We provide a script to quickly scaffold new components:

```bash
./create-component.sh ComponentName "Component description"
```

Example:
```bash
./create-component.sh TextField "A customizable text input component for forms"
```

This will create:
- Component folder structure
- Template files for all three platforms
- Main page with reusable components
- Proper TypeScript types

## Component Structure

Each component should follow this structure:

```
app/components/your-component/
├── page.tsx          # Main component page using reusable components
├── swiftui.ts        # SwiftUI implementation and props
├── compose.ts        # Jetpack Compose implementation and props
└── reactnative.ts    # React Native implementation (TS/JS) and props
```

## Implementation Guidelines

### 1. Platform Files

Each platform file should export:

```typescript
// Code implementation as a string
export const [platform][Component]Code = `...`;

// Props definition array
export const [platform][Component]Props = [
  { prop: 'propName', type: 'propType', default: 'defaultValue', desc: 'Description' }
];
```

### 2. Main Component Page

Use our reusable components for consistency:

```typescript
import MobileFrame from '../../websiteComponents/MobileFrame';
import PropsTable from '../../websiteComponents/PropsTable';
import CodeDisplay from '../../websiteComponents/CodeDisplay';
import HelpImprove from '../../websiteComponents/HelpImprove';
import Dependencies from '../../websiteComponents/Dependencies';
import CLIInstall from '../../websiteComponents/CLIInstall';
```

### 3. Mobile Preview

Always wrap your component preview in `MobileFrame`:

```jsx
<MobileFrame platform="ios">
  <div className="flex items-center justify-center h-full bg-gradient-to-br from-violet-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
    {/* Your component preview */}
  </div>
</MobileFrame>
```

### 4. Customization Controls

Provide interactive controls in the sidebar:

```jsx
<div className="bg-card border border-border rounded-xl p-6">
  <h3 className="text-lg font-semibold mb-4">Customize</h3>
  <div className="space-y-4">
    {/* Your customization controls */}
  </div>
</div>
```

## Design Guidelines

### Colors and Theming
- Primary color: `#7C3AED` (violet-500)
- Use violet theme throughout (`border-violet-500/30`, `bg-violet-500/5`, etc.)
- Maintain dark theme compatibility

### Styling Patterns
- Border radius: `rounded-lg` or `rounded-xl`
- Shadows: `shadow-lg` for elevated elements
- Transitions: `transition-all` or `transition-colors`
- Hover effects: Use violet color variations

### Mobile Frame Platforms
- `ios`: iPhone-style frame with rounded corners and home indicator
- `android`: Android-style frame with status bar
- `generic`: Simple mobile frame

## Code Quality

### TypeScript
- Use proper TypeScript types
- Define interfaces for props
- Use generic types where appropriate

### React Patterns
- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices

### Platform Compatibility
- **SwiftUI**: iOS 13.0+, macOS 10.15+
- **Jetpack Compose**: Compose BOM 2024.02.00+
- **React Native**: React Native 0.70+

## Documentation

### Props Table
Every component must have comprehensive props documentation:

```typescript
{ 
  prop: 'propertyName', 
  type: 'string | number | boolean', 
  default: 'defaultValue', 
  desc: 'Detailed description of what this property does and how it affects the component' 
}
```

### Code Examples
- Include realistic use cases
- Show all major props in action
- Provide both TypeScript and JavaScript versions for React Native

## Testing

### Manual Testing
- Test in mobile preview frames
- Verify all customization controls work
- Check copy-to-clipboard functionality
- Test across different screen sizes

### Code Validation
- Ensure no TypeScript errors
- Verify component renders properly
- Test all interactive elements

## Submission Process

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b add-component-name`
3. **Generate component**: `./create-component.sh ComponentName "Description"`
4. **Implement component**:
   - Add SwiftUI implementation
   - Add Jetpack Compose implementation
   - Add React Native implementation
   - Create interactive preview
   - Add customization controls
5. **Update component registry**: Add to `app/constants/components.ts`
6. **Test thoroughly**
7. **Submit pull request** with:
   - Clear description
   - Screenshots of mobile preview
   - Documentation of new props

## Component Categories

When adding to the component registry, use these categories:
- **Form**: Input fields, buttons, checkboxes, etc.
- **Layout**: Containers, grids, stacks, etc.
- **Navigation**: Tabs, breadcrumbs, menus, etc.
- **Feedback**: Alerts, toasts, modals, etc.
- **Display**: Cards, lists, tables, etc.
- **Media**: Images, videos, icons, etc.
- **Text**: Typography, headings, labels, etc.
- **Animation**: Transitions, loading indicators, etc.

## Reusable Components Reference

### MobileFrame
```typescript
<MobileFrame platform="ios" | "android" | "generic">
  {children}
</MobileFrame>
```

### PropsTable
```typescript
<PropsTable props={propsArray} title="Props" />
```

### CodeDisplay
```typescript
<CodeDisplay 
  frameworks={frameworksArray}
  reactNativeSupport={{
    typescript: tsCode,
    javascript: jsCode
  }}
/>
```

### HelpImprove
```typescript
<HelpImprove 
  onReportIssue={() => openModal('issue')}
  onRequestFeature={() => openModal('feature')}
/>
```

### Dependencies
```typescript
<Dependencies dependencies={dependenciesArray} />
```

### CLIInstall
```typescript
<CLIInstall componentName="component-name" />
```

## Need Help?

- 📖 Check existing components for reference
- 💬 Open a discussion for questions
- 🐛 Report issues on GitHub
- 📧 Contact maintainers

## Recognition

Contributors will be:
- Listed in component documentation
- Recognized in release notes
- Added to contributors list
- Eligible for maintainer status

Thank you for helping make ClipUI better! 🎉
