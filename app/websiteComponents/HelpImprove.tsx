import React from 'react';
import { motion } from 'framer-motion';
import { FaBug, FaLightbulb } from 'react-icons/fa';

interface HelpImproveProps {
  onReportIssue: () => void;
  onRequestFeature: () => void;
}

export default function HelpImprove({ onReportIssue, onRequestFeature }: HelpImproveProps) {
  return (
    <div className="mt-8 bg-card border border-border rounded-xl p-6">
      <h3 className="text-center text-lg font-semibold mb-6 text-foreground">
        Help improve this component!
      </h3>
      <div className="flex gap-4 justify-center">
        <button
          onClick={onReportIssue}
          className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:bg-red-500/20 hover:border-red-500 hover:text-red-300 transition-colors"
        >
          <FaBug className="w-4 h-4" />
          Report an issue
        </button>
        <span className="text-muted-foreground self-center">or</span>
        <button
          onClick={onRequestFeature}
          className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:bg-yellow-500/20 hover:border-yellow-500 hover:text-yellow-300 transition-colors"
        >
          <FaLightbulb className="w-4 h-4" />
          Request a feature
        </button>
      </div>
    </div>
  );
}
