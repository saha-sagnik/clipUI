"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { swiftUIButtonCode, swiftUIButtonProps } from './swiftui';
import { composeButtonCode, composeButtonProps } from './compose';
import { reactNativeButtonCodeTS, reactNativeButtonCodeJS, reactNativeButtonProps } from './reactnative';
import MobileFrame from '../../websiteComponents/MobileFrame';
import PropsTable from '../../websiteComponents/PropsTable';
import CodeDisplay from '../../websiteComponents/CodeDisplay';
import HelpImprove from '../../websiteComponents/HelpImprove';
import Dependencies from '../../websiteComponents/Dependencies';
import CLIInstall from '../../websiteComponents/CLIInstall';

const frameworkLabels = {
  swiftui: 'SwiftUI',
  compose: 'Compose',
  reactnative: 'React Native'
};

const dependencies = [
  { name: 'SwiftUI', version: 'iOS 13.0+, macOS 10.15+' },
  { name: 'Jetpack Compose', version: 'Compose BOM 2024.02.00+' },
  { name: 'React Native', version: 'React Native 0.70+' }
];

const frameworks = [
  { id: 'swiftui', label: 'SwiftUI', code: swiftUIButtonCode },
  { id: 'compose', label: 'Compose', code: composeButtonCode },
  { id: 'reactnative', label: 'React Native', code: reactNativeButtonCodeTS }
];

export default function ButtonPage() {
  const [activeTab, setActiveTab] = useState('preview');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('issue'); // 'issue' or 'feature'

  // Enhanced customization controls
  const [customization, setCustomization] = useState({
    variant: 'primary',
    size: 'medium',
    borderRadius: 8,
    fontSize: 16,
    paddingX: 24,
    paddingY: 12,
    backgroundColor: '#7C3AED',
    textColor: '#FFFFFF',
    fullWidth: false,
    disabled: false,
    loading: false,
    showIcon: false,
    iconPosition: 'left'
  });

  const openModal = (type: 'issue' | 'feature') => {
    setModalType(type);
    setShowModal(true);
  };

  const getSelectedProps = () => {
    // For now, return SwiftUI props as default, but this can be made dynamic
    return swiftUIButtonProps;
  };

  return (
    <div className="px-8 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Button</h1>
          <p className="text-lg text-muted-foreground">
            A fundamental UI component for triggering actions across SwiftUI, Jetpack Compose, and React Native.
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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-muted-foreground border-border hover:border-primary/50'
              }`}
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
                        <button 
                          className={`font-semibold shadow-lg transition-all hover:scale-105 ${
                            customization.fullWidth ? 'w-4/5' : ''
                          } ${
                            customization.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                          }`}
                          style={{
                            backgroundColor: customization.backgroundColor,
                            color: customization.textColor,
                            fontSize: `${customization.fontSize}px`,
                            paddingLeft: `${customization.paddingX}px`,
                            paddingRight: `${customization.paddingX}px`,
                            paddingTop: `${customization.paddingY}px`,
                            paddingBottom: `${customization.paddingY}px`,
                            borderRadius: `${customization.borderRadius}px`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                          }}
                          disabled={customization.disabled}
                        >
                          {customization.loading ? (
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              {customization.showIcon && customization.iconPosition === 'left' && (
                                <span>⭐</span>
                              )}
                              Primary Button
                              {customization.showIcon && customization.iconPosition === 'right' && (
                                <span>⭐</span>
                              )}
                            </>
                          )}
                        </button>
                      </div>
                    </MobileFrame>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <CodeDisplay 
                  frameworks={frameworks}
                  reactNativeSupport={{
                    typescript: reactNativeButtonCodeTS,
                    javascript: reactNativeButtonCodeJS
                  }}
                />
              )}

              {activeTab === 'cli' && (
                <CLIInstall componentName="button" />
              )}
            </div>

            {/* Props Section - Now below preview */}
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
                <div>
                  <label className="block text-sm font-medium mb-2">Variant</label>
                  <select
                    value={customization.variant}
                    onChange={(e) => setCustomization(prev => ({ ...prev, variant: e.target.value }))}
                    className="w-full px-3 py-2 bg-background border border-violet-500/30 rounded-md text-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="ghost">Ghost</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <select
                    value={customization.size}
                    onChange={(e) => setCustomization(prev => ({ ...prev, size: e.target.value }))}
                    className="w-full px-3 py-2 bg-background border border-violet-500/30 rounded-md text-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Border Radius</label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={customization.borderRadius}
                    onChange={(e) => setCustomization(prev => ({ ...prev, borderRadius: parseInt(e.target.value) }))}
                    className="w-full accent-violet-500"
                  />
                  <span className="text-xs text-muted-foreground">{customization.borderRadius}px</span>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Font Size</label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={customization.fontSize}
                    onChange={(e) => setCustomization(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
                    className="w-full accent-violet-500"
                  />
                  <span className="text-xs text-muted-foreground">{customization.fontSize}px</span>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Background Color</label>
                  <input
                    type="color"
                    value={customization.backgroundColor}
                    onChange={(e) => setCustomization(prev => ({ ...prev, backgroundColor: e.target.value }))}
                    className="w-full h-10 rounded-md border border-violet-500/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Text Color</label>
                  <input
                    type="color"
                    value={customization.textColor}
                    onChange={(e) => setCustomization(prev => ({ ...prev, textColor: e.target.value }))}
                    className="w-full h-10 rounded-md border border-violet-500/30"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Full Width</label>
                  <input
                    type="checkbox"
                    checked={customization.fullWidth}
                    onChange={(e) => setCustomization(prev => ({ ...prev, fullWidth: e.target.checked }))}
                    className="w-4 h-4 accent-violet-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Disabled</label>
                  <input
                    type="checkbox"
                    checked={customization.disabled}
                    onChange={(e) => setCustomization(prev => ({ ...prev, disabled: e.target.checked }))}
                    className="w-4 h-4 accent-violet-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Loading</label>
                  <input
                    type="checkbox"
                    checked={customization.loading}
                    onChange={(e) => setCustomization(prev => ({ ...prev, loading: e.target.checked }))}
                    className="w-4 h-4 accent-violet-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Show Icon</label>
                  <input
                    type="checkbox"
                    checked={customization.showIcon}
                    onChange={(e) => setCustomization(prev => ({ ...prev, showIcon: e.target.checked }))}
                    className="w-4 h-4 accent-violet-500"
                  />
                </div>

                {customization.showIcon && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Icon Position</label>
                    <select
                      value={customization.iconPosition}
                      onChange={(e) => setCustomization(prev => ({ ...prev, iconPosition: e.target.value }))}
                      className="w-full px-3 py-2 bg-background border border-violet-500/30 rounded-md text-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    >
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                )}
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
                ? 'Help us improve this component by reporting any issues you\'ve encountered.'
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
