#!/bin/bash

# ClipUI Component Generator
# Usage: ./create-component.sh ComponentName "Component description"

if [ $# -ne 2 ]; then
    echo "Usage: $0 ComponentName \"Component description\""
    echo "Example: $0 TextField \"A text input component for forms\""
    exit 1
fi

COMPONENT_NAME=$1
COMPONENT_DESCRIPTION=$2
COMPONENT_LOWER=$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]')

# Create component directory
mkdir -p "app/components/$COMPONENT_LOWER"

# Create main page.tsx
cat > "app/components/$COMPONENT_LOWER/page.tsx" << EOL
"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { swiftUI${COMPONENT_NAME}Code, swiftUI${COMPONENT_NAME}Props } from './swiftui';
import { compose${COMPONENT_NAME}Code, compose${COMPONENT_NAME}Props } from './compose';
import { reactNative${COMPONENT_NAME}CodeTS, reactNative${COMPONENT_NAME}CodeJS, reactNative${COMPONENT_NAME}Props } from './reactnative';
import MobileFrame from '../../websiteComponents/MobileFrame';
import PropsTable from '../../websiteComponents/PropsTable';
import CodeDisplay from '../../websiteComponents/CodeDisplay';
import HelpImprove from '../../websiteComponents/HelpImprove';
import Dependencies from '../../websiteComponents/Dependencies';
import CLIInstall from '../../websiteComponents/CLIInstall';

const dependencies = [
  { name: 'SwiftUI', version: 'iOS 13.0+, macOS 10.15+' },
  { name: 'Jetpack Compose', version: 'Compose BOM 2024.02.00+' },
  { name: 'React Native', version: 'React Native 0.70+' }
];

const frameworks = [
  { id: 'swiftui', label: 'SwiftUI', code: swiftUI${COMPONENT_NAME}Code },
  { id: 'compose', label: 'Compose', code: compose${COMPONENT_NAME}Code },
  { id: 'reactnative', label: 'React Native', code: reactNative${COMPONENT_NAME}CodeTS }
];

export default function ${COMPONENT_NAME}Page() {
  const [activeTab, setActiveTab] = useState('preview');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('issue');

  // Customization controls - customize as needed
  const [customization, setCustomization] = useState({
    // Add relevant customization properties here
  });

  const openModal = (type: 'issue' | 'feature') => {
    setModalType(type);
    setShowModal(true);
  };

  const getSelectedProps = () => {
    return swiftUI${COMPONENT_NAME}Props;
  };

  return (
    <div className="px-8 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">${COMPONENT_NAME}</h1>
          <p className="text-lg text-muted-foreground">
            ${COMPONENT_DESCRIPTION}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-8">
          {[
            { id: 'preview', label: 'Preview', icon: '👁' },
            { id: 'code', label: 'Code', icon: '</>' },
            { id: 'cli', label: 'CLI', icon: '⌘' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all \${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-muted-foreground border-border hover:border-primary/50'
              }\`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
          
          <div className="ml-auto">
            <button 
              onClick={() => alert('Contribute feature coming soon!')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-all"
            >
              <span>💖</span>
              Contribute
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Preview/Code Content */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {activeTab === 'preview' && (
                <div className="p-8">
                  <div className="flex flex-col items-center justify-center min-h-[400px] bg-violet-500/5 rounded-lg">
                    <MobileFrame platform="ios">
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-violet-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                        {/* Add your component preview here */}
                        <div>Your ${COMPONENT_NAME} Preview</div>
                      </div>
                    </MobileFrame>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <CodeDisplay 
                  frameworks={frameworks}
                  reactNativeSupport={{
                    typescript: reactNative${COMPONENT_NAME}CodeTS,
                    javascript: reactNative${COMPONENT_NAME}CodeJS
                  }}
                />
              )}

              {activeTab === 'cli' && (
                <CLIInstall componentName="${COMPONENT_LOWER}" />
              )}
            </div>

            {/* Props Section */}
            <PropsTable props={getSelectedProps()} />

            {/* Help Improve Section */}
            <HelpImprove 
              onReportIssue={() => openModal('issue')}
              onRequestFeature={() => openModal('feature')}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Customize Section */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Customize</h3>
              <div className="space-y-4">
                {/* Add customization controls here */}
                <p className="text-sm text-muted-foreground">
                  Customization controls for ${COMPONENT_NAME} will be added here.
                </p>
              </div>
            </div>

            {/* Dependencies Section */}
            <Dependencies dependencies={dependencies} />
          </div>
        </div>
      </div>

      {/* Modal for reporting issues/requesting features */}
      {showModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-xl p-6 max-w-md w-full mx-4"
          >
            <h3 className="text-lg font-semibold mb-4">
              {modalType === 'issue' ? 'Report an Issue' : 'Request a Feature'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {modalType === 'issue' 
                ? 'Help us improve this component by reporting any issues you\\'ve encountered.'
                : 'Have an idea for improving this component? Let us know!'
              }
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  window.open('https://github.com/saha-sagnik/clipui/issues/new', '_blank');
                }}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Open GitHub
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
EOL

# Create SwiftUI implementation
cat > "app/components/$COMPONENT_LOWER/swiftui.ts" << EOL
// SwiftUI ${COMPONENT_NAME} Component
export const swiftUI${COMPONENT_NAME}Code = \`// Add your SwiftUI implementation here
struct ${COMPONENT_NAME}View: View {
    var body: some View {
        Text("${COMPONENT_NAME}")
    }
}\`;

export const swiftUI${COMPONENT_NAME}Props = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
EOL

# Create Jetpack Compose implementation
cat > "app/components/$COMPONENT_LOWER/compose.ts" << EOL
// Jetpack Compose ${COMPONENT_NAME} Component
export const compose${COMPONENT_NAME}Code = \`@Composable
fun ${COMPONENT_NAME}(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}\`;

export const compose${COMPONENT_NAME}Props = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
EOL

# Create React Native implementation
cat > "app/components/$COMPONENT_LOWER/reactnative.ts" << EOL
// React Native ${COMPONENT_NAME} Component - TypeScript
export const reactNative${COMPONENT_NAME}CodeTS = \`import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ${COMPONENT_NAME}Props {
  text: string;
}

const ${COMPONENT_NAME}: React.FC<${COMPONENT_NAME}Props> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ${COMPONENT_NAME};\`;

// React Native ${COMPONENT_NAME} Component - JavaScript
export const reactNative${COMPONENT_NAME}CodeJS = \`import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ${COMPONENT_NAME} = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ${COMPONENT_NAME};\`;

export const reactNative${COMPONENT_NAME}Props = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
EOL

echo "✅ Component '$COMPONENT_NAME' created successfully!"
echo "📁 Files created in app/components/$COMPONENT_LOWER/"
echo "📝 Next steps:"
echo "   1. Implement the component code in each platform file"
echo "   2. Add customization controls in page.tsx"
echo "   3. Update the component preview"
echo "   4. Add the component to app/constants/components.ts"
echo "   5. Test the component thoroughly"
echo ""
echo "🚀 Happy coding!"
