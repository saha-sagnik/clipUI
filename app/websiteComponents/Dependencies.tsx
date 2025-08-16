import React from 'react';

interface Dependency {
  name: string;
  version: string;
}

interface DependenciesProps {
  dependencies: Dependency[];
}

export default function Dependencies({ dependencies }: DependenciesProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Dependencies</h3>
      <div className="space-y-3">
        {dependencies.map((dep, index) => (
          <div key={index}>
            <h4 className="text-sm font-medium text-foreground">{dep.name}</h4>
            <p className="text-xs text-muted-foreground">{dep.version}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
