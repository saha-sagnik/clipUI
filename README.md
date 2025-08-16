# ClipUI

_Effortless Mobile UI Starts Here_

<!-- (Optional: Add your logo here) -->

**ClipUI** is a hybrid SaaS and open-source hub for ready-to-use, community-driven mobile UI components.  
Instantly find, share, and use high-quality UI building blocks for **SwiftUI, Jetpack Compose, and React Native**—all in one place.

---

## 🚀 Features

- 📱 **Cross-platform components** — SwiftUI, Jetpack Compose, React Native
- 💎 **Clean, copy-paste code** — Production-ready UI snippets
- 🔎 **Live previews** — See components in action with mobile device frames
- 🤝 **Community-powered** — Submit, vote, and improve components together
- 📚 **Professional docs** — Code examples, usage guides, and best practices
- 🎨 **Interactive customization** — Real-time component styling and preview
- 📋 **Comprehensive documentation** — Detailed props tables and dependencies

---

## 🌟 Why ClipUI?

Stop reinventing the wheel.  
Whether you're building your next app, prototyping, or learning, ClipUI empowers you to:

- **Build faster:** Save hours on UI development with ready-to-use components
- **Trust quality:** Use well-documented, community-vetted code with comprehensive props
- **Stay up-to-date:** Discover new patterns and design best practices
- **Visualize first:** See components in realistic mobile frames before implementation

---

## 📦 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/saha-sagnik/clipui.git
cd clipui

# Install dependencies
npm install

# Start development server
npm run dev
```

### Using Components

Each component includes:
- **Live Preview:** See components in mobile device frames
- **Cross-platform Code:** SwiftUI, Jetpack Compose, and React Native implementations
- **Interactive Customization:** Real-time styling controls
- **Props Documentation:** Comprehensive property tables
- **Copy-paste Ready:** One-click code copying

---

## 🛠 Contributing Components

We welcome community contributions! Here's how to add a new component:

### 1. Component Structure

Create a new folder in `app/components/[component-name]/`:

```
app/components/your-component/
├── page.tsx          # Main component page
├── swiftui.ts        # SwiftUI implementation
├── compose.ts        # Jetpack Compose implementation
└── reactnative.ts    # React Native implementation
```

### 2. Implementation Files

Each platform file should export:
- **Code string:** The component implementation
- **Props array:** Property definitions

**Example for SwiftUI (`swiftui.ts`):**
```typescript
export const swiftUIButtonCode = `
Button(action: {
    // Handle button press
}) {
    Text(title)
        .font(.system(size: fontSize, weight: .medium))
        .padding()
}
.buttonStyle(.borderedProminent)
.disabled(disabled)
`;

export const swiftUIButtonProps = [
  { prop: 'title', type: 'String', default: '-', desc: 'Button text content' },
  { prop: 'disabled', type: 'Bool', default: 'false', desc: 'Disable button interaction' },
  // ... more props
];
```

### 3. Main Component Page

Use the reusable components we've created:

```typescript
import MobileFrame from '../../websiteComponents/MobileFrame';
import PropsTable from '../../websiteComponents/PropsTable';
import CodeDisplay from '../../websiteComponents/CodeDisplay';
import HelpImprove from '../../websiteComponents/HelpImprove';
import Dependencies from '../../websiteComponents/Dependencies';
import CLIInstall from '../../websiteComponents/CLIInstall';

export default function YourComponentPage() {
  // Component logic here...
  
  return (
    <div className="px-8 py-32">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Your Component</h1>
        <p className="text-lg text-muted-foreground">
          Component description here.
        </p>
      </div>

      {/* Tab Navigation */}
      {/* Preview with MobileFrame */}
      {/* CodeDisplay component */}
      {/* PropsTable component */}
      {/* HelpImprove component */}
      {/* Dependencies component */}
    </div>
  );
}
```

### 4. Reusable Components

We provide these reusable components to maintain consistency:

- **`MobileFrame`**: Mobile device preview frame (iOS/Android/Generic)
- **`PropsTable`**: Standardized property documentation table
- **`CodeDisplay`**: Code viewer with framework tabs and copy functionality
- **`HelpImprove`**: Issue reporting and feature request section
- **`Dependencies`**: Platform requirements display
- **`CLIInstall`**: CLI installation instructions

### 5. Component Guidelines

- **Responsive Design**: Ensure components work on all screen sizes
- **Accessibility**: Include proper accessibility features
- **Documentation**: Provide comprehensive prop descriptions
- **Examples**: Include realistic use cases
- **Testing**: Test across all supported platforms
- **Consistent Styling**: Use the violet theme (`#7C3AED`)

### 6. Submitting Your Component

1. Fork the repository
2. Create a feature branch: `git checkout -b add-component-name`
3. Add your component following the structure above
4. Update `app/constants/componentList.ts` to include your component
5. Test thoroughly
6. Submit a pull request with:
   - Clear description of the component
   - Screenshots of the mobile preview
   - Documentation of props and usage

---

## 🎨 Design System

ClipUI uses a consistent violet-themed design system:

- **Primary Color:** `#7C3AED` (violet-500)
- **Background:** Dark theme with violet accents
- **Typography:** Clean, readable fonts
- **Components:** Consistent spacing and styling
- **Mobile-first:** Components previewed in realistic device frames

---

## 📱 Supported Platforms

- **SwiftUI**: iOS 13.0+, macOS 10.15+
- **Jetpack Compose**: Compose BOM 2024.02.00+
- **React Native**: React Native 0.70+

---

## 🤝 Community

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Share ideas and get help
- **Pull Requests**: Contribute code and improvements
- **Discord**: Join our community (coming soon!)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🚀 Roadmap

- [ ] CLI tool for easy component installation
- [ ] Component search and filtering
- [ ] User authentication and component collections
- [ ] Advanced customization tools
- [ ] Component analytics and usage stats
- [ ] AI-powered component suggestions

---

**Built with ❤️ by the ClipUI community**

