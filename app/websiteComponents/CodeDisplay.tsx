import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheck, FaChevronDown } from 'react-icons/fa';

interface CodeFramework {
  id: string;
  label: string;
  code: string;
}

interface CodeDisplayProps {
  frameworks: CodeFramework[];
  reactNativeSupport?: {
    typescript: string;
    javascript: string;
  };
}

export default function CodeDisplay({ frameworks, reactNativeSupport }: CodeDisplayProps) {
  const [selectedFramework, setSelectedFramework] = useState(frameworks[0]?.id || '');
  const [reactNativeLanguage, setReactNativeLanguage] = useState<'typescript' | 'javascript'>('typescript');
  const [copiedFramework, setCopiedFramework] = useState<null | string>(null);
  const [showRNDropdown, setShowRNDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowRNDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getCodeExample = () => {
    const framework = frameworks.find(f => f.id === selectedFramework);
    if (selectedFramework === 'reactnative' && reactNativeSupport) {
      return reactNativeSupport[reactNativeLanguage];
    }
    return framework?.code || '';
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getCodeExample());
      setCopiedFramework(selectedFramework);
      setTimeout(() => setCopiedFramework(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="relative">
      {/* Framework Selector */}
      <div className="flex border-b border-border relative overflow-visible">
        {frameworks.map((framework) => (
          <button
            key={framework.id}
            onClick={() => setSelectedFramework(framework.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
              selectedFramework === framework.id
                ? 'border-b-2 border-primary text-primary bg-primary/5'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {framework.label}
              {framework.id === 'reactnative' && reactNativeSupport && selectedFramework === 'reactnative' && (
                <span 
                  className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-violet-500/20 border border-violet-500/30 cursor-pointer hover:bg-violet-500/30 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRNDropdown(!showRNDropdown);
                  }}
                >
                  {reactNativeLanguage === 'typescript' ? 'TS' : 'JS'}
                  <FaChevronDown className={`w-2 h-2 transition-transform ${showRNDropdown ? 'rotate-180' : ''}`} />
                </span>
              )}
            </span>
          </button>
        ))}
        
        {/* React Native Language Dropdown */}
        {selectedFramework === 'reactnative' && reactNativeSupport && (
          <AnimatePresence>
            {showRNDropdown && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[90]"
                  onClick={() => setShowRNDropdown(false)}
                />
                
                {/* Dropdown */}
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-4 mt-2 bg-card border border-violet-500/30 rounded-lg shadow-xl overflow-hidden z-[100]"
                  style={{ minWidth: '120px' }}
                >
                  <button
                    onClick={() => {
                      setReactNativeLanguage('typescript');
                      setShowRNDropdown(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-xs hover:bg-violet-500/20 transition-colors whitespace-nowrap ${
                      reactNativeLanguage === 'typescript' ? 'bg-violet-500/20 text-violet-300' : 'text-muted-foreground'
                    }`}
                  >
                    TypeScript
                  </button>
                  <button
                    onClick={() => {
                      setReactNativeLanguage('javascript');
                      setShowRNDropdown(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-xs hover:bg-violet-500/20 transition-colors whitespace-nowrap ${
                      reactNativeLanguage === 'javascript' ? 'bg-violet-500/20 text-violet-300' : 'text-muted-foreground'
                    }`}
                  >
                    JavaScript
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}
      </div>
      
      {/* Code Display */}
      <div className="relative">
        <pre className="p-6 text-sm text-muted-foreground overflow-x-auto bg-violet-500/5">
          <code>{getCodeExample()}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 p-2 bg-background border border-violet-500/30 rounded-md hover:bg-violet-500/20 hover:border-violet-500 transition-colors"
        >
          {copiedFramework === selectedFramework ? (
            <FaCheck className="w-4 h-4 text-green-500" />
          ) : (
            <FaCopy className="w-4 h-4 text-violet-300" />
          )}
        </button>
      </div>
    </div>
  );
}
