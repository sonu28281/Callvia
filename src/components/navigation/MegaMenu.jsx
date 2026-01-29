import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { megaMenuConfig } from '../../config/menuConfig.js';

export function MegaMenu() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabData = megaMenuConfig.tabs[activeTab];

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
      <div className="mega-menu-content bg-white border border-gray-200 shadow-2xl rounded-xl w-fit">
        <div className="px-8 py-6 min-w-[900px]">
          {/* Tabs - Elegant with smooth transition */}
          <div className="flex gap-8 border-b border-gray-200 pb-4 mb-6">
            {megaMenuConfig.tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-2 bg-transparent border-none cursor-pointer transition-all text-sm font-semibold whitespace-nowrap relative ${
                  activeTab === idx
                    ? 'text-blue-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
                {activeTab === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-t transition-all duration-300"></div>
                )}
              </button>
            ))}
          </div>

          {/* Grid Items - Fancy with staggered animation */}
          <div className="grid grid-cols-5 gap-6">
            {activeTabData.items.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  style={{ animationDelay: `${idx * 0.03}s` }}
                  className="mega-menu-item p-4 rounded-lg border border-gray-200 bg-white no-underline transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 flex flex-col gap-3 group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                      <IconComponent
                        size={22}
                        className="text-blue-900 group-hover:scale-125 transition-transform duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-bold text-gray-900 group-hover:text-blue-900 transition-colors block leading-tight">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full font-bold inline-block mt-1.5 shadow-md">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 m-0 leading-snug group-hover:text-gray-800 transition-colors">
                    {item.description}
                  </p>
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
