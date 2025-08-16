import React from 'react';
import { FaCopy } from 'react-icons/fa';

interface CLIInstallProps {
  componentName: string;
  packageName?: string;
}

export default function CLIInstall({ componentName, packageName }: CLIInstallProps) {
  const installCommand = packageName ? `npx clipui-cli add ${packageName}` : `npx clipui-cli add ${componentName.toLowerCase()}`;
  
  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-muted/50 rounded-lg p-4">
        <p className="text-sm text-muted-foreground mb-4">
          Install ClipUI CLI to quickly add components to your project:
        </p>
        <div className="relative">
          <pre className="text-sm bg-background border border-border rounded p-3 overflow-x-auto">
            <code>{installCommand}</code>
          </pre>
          <button 
            onClick={copyCommand}
            className="absolute top-2 right-2 p-1 hover:bg-muted rounded transition-colors"
          >
            <FaCopy className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
