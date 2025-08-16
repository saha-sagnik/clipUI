import React from 'react';

interface PropItem {
  prop: string;
  type: string;
  default: string;
  desc: string;
}

interface PropsTableProps {
  props: PropItem[];
  title?: string;
}

export default function PropsTable({ props, title = "Props" }: PropsTableProps) {
  return (
    <div className="mt-8 bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto rounded-lg border border-violet-500/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-violet-500/10 border-b border-violet-500/30">
              <th className="text-left p-3 font-medium text-foreground whitespace-nowrap">Property</th>
              <th className="text-left p-3 font-medium text-foreground whitespace-nowrap">Type</th>
              <th className="text-left p-3 font-medium text-foreground whitespace-nowrap">Default</th>
              <th className="text-left p-3 font-medium text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((item, index) => (
              <tr key={index} className="border-b border-violet-500/20 last:border-b-0 hover:bg-violet-500/5">
                <td className="p-3">
                  <code className="text-xs font-mono bg-violet-500/20 px-2 py-1 rounded text-white whitespace-nowrap">
                    {item.prop}
                  </code>
                </td>
                <td className="p-3">
                  <code className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                    {item.type}
                  </code>
                </td>
                <td className="p-3">
                  <code className="text-xs font-mono text-muted-foreground bg-violet-500/10 px-2 py-1 rounded whitespace-nowrap">
                    {item.default}
                  </code>
                </td>
                <td className="p-3 text-xs text-muted-foreground">
                  {item.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
