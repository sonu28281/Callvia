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
          animation: slideDownFade 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
          animation: slideIn 0.25s ease-out both;
        }
      `}</style>
      <div className="mega-menu-content bg-white border border-gray-200 shadow-2xl rounded-2xl w-fit">
        <div className="px-12 py-8">
          {/* Tabs - Pill style with rounded borders - Only show if not filtering */}
          {!filterTab && (
            <div className="flex gap-4 mb-8">
              {filteredTabs.filter(tab => tab.id !== 'company').map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all border-2 ${
                    activeTab === idx
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
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
                  className="mega-menu-item p-3 rounded-lg border border-gray-200 bg-white no-underline transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 flex flex-row items-start gap-2 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-cyan-100 group-hover:to-blue-100 transition-all duration-300 shadow-sm group-hover:shadow-md flex-shrink-0 mt-0.5">
                    <IconComponent
                      size={16}
                      className="text-blue-700 group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-blue-900 transition-colors block leading-tight">
                      {item.label}
                    </span>
                    <p className="text-xs text-gray-600 m-0 leading-snug group-hover:text-gray-800 transition-colors">
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
