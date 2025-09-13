"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { componentCategories } from "../constants/componentCategories";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  // State to track which categories are expanded (all expanded by default)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    componentCategories.forEach(category => {
      initialState[category.category] = true; // All expanded by default
    });
    return initialState;
  });

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <aside className={`sidebar ${className}`}>
      <div className="sidebar-content">
        <div className="sidebar-scroll">
          {componentCategories.map((category) => {
            const isExpanded = expandedCategories[category.category];
            
            return (
              <div key={category.category} className="category-section">
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="category-header"
                >
                  <h3 className="category-title">{category.category}</h3>
                  <div className="category-toggle">
                    {isExpanded ? (
                      <ChevronDownIcon className="w-4 h-4" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <ul className="category-items">
                    {category.items.map((item) => (
                      <li key={item.path} className="category-item">
                        <button
                          onClick={() => handleItemClick(item.path)}
                          className={`item-button ${
                            pathname === item.path ? "active" : ""
                          }`}
                          data-active={pathname === item.path}
                        >
                          <span className="item-name">{item.name}</span>
                          {item.isNew && (
                            <span className="new-badge">New</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 280px;
          height: 100vh;
          background: #181826;
          border-right: 1px solid #2a2a3a;
          z-index: 10;
        }

        .sidebar-content {
          position: relative;
          height: 100%;
          padding-top: 80px; /* Space for navbar */
        }

        .sidebar-scroll {
          height: 100%;
          overflow-y: auto;
          padding: 0 16px 20px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .sidebar-scroll::-webkit-scrollbar {
          display: none;
        }

        .category-section {
          margin-bottom: 16px;
        }

        .category-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
          margin-bottom: 8px;
        }

        .category-header:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .category-title {
          color: #666;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
          text-align: left;
        }

        .category-toggle {
          color: #666;
          transition: color 0.15s ease;
        }

        .category-header:hover .category-toggle {
          color: #a0a0a0;
        }

        .category-items {
          list-style: none;
          padding: 0;
          margin: 0;
          animation: slideDown 0.2s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .category-item {
          margin-bottom: 2px;
          position: relative;
        }

        .item-button {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          color: #a0a0a0;
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          margin-left: 8px; /* Indent items under categories */
        }

        .item-button:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #e0e0e0;
        }

        .item-button.active {
          background: rgba(139, 92, 246, 0.15);
          color: #ffffff;
        }

        .item-button.active::before {
          content: '';
          position: absolute;
          left: -24px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          border-radius: 0 2px 2px 0;
        }

        .item-name {
          flex: 1;
        }

        .new-badge {
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          color: white;
          font-size: 10px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }

          .sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </aside>
  );
}