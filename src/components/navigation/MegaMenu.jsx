import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { megaMenuConfig } from '../../config/menuConfig.js';

export function MegaMenu({ filterTab = null }) {
  // If filterTab is provided, find that tab, otherwise show all tabs
  const filteredTabs = filterTab 
    ? megaMenuConfig.tabs.filter(tab => tab.id === filterTab)
    : megaMenuConfig.tabs;
  
  const [activeTab, setActiveTab] = useState(0);
  const activeTabData = filteredTabs[activeTab];
  
  if (!activeTabData || !activeTabData.items) {
    return null;
  }

  return (
    <div>
      <style>{`
        @keyframes slideDownFade {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .mega-menu-content {
          animation: slideDownFade 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .mega-menu-item {
          animation: slideIn 0.2s ease-out both;
        }
      `}</style>
      <div className="mega-menu-content bg-brand-dark border border-brand-border shadow-2xl rounded-2xl w-fit">
        <div className="px-12 py-8">
          {/* Tabs - Pill style with rounded borders - Only show if not filtering */}
          {!filterTab && (
            <div className="flex gap-4 mb-8">
              {filteredTabs.filter(tab => tab.id !== 'company').map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-200 border-2 ${
                    activeTab === idx
                      ? 'bg-brand-accent text-brand-dark border-brand-accent'
                      : 'bg-brand-surface text-brand-text border-brand-border hover:border-brand-border-light'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Grid Items - Show all items */}
          <div className="grid grid-cols-2 gap-4 min-w-[500px]">
            {activeTabData.items.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  className="mega-menu-item p-3 rounded-lg border border-brand-border bg-brand-surface no-underline transition-all duration-200 hover:border-brand-border-light hover:shadow-card hover:bg-brand-surface-hover flex flex-row items-start gap-2 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20 transition-all duration-200 group-hover:bg-brand-accent/15 shadow-sm flex-shrink-0 mt-0.5">
                    <IconComponent
                      size={16}
                      className="text-brand-accent transition-transform duration-200 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-brand-text group-hover:text-brand-accent transition-colors block leading-tight">
                      {item.label}
                    </span>
                    <p className="text-xs text-brand-text-muted m-0 leading-snug group-hover:text-brand-text transition-colors">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
