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
      <div className="mega-menu-content bg-white border border-gray-200 shadow-2xl rounded-2xl w-fit">
        <div className="px-12 py-8">
          {/* Tabs - Pill style with rounded borders */}
          <div className="flex gap-4 mb-8">
            {megaMenuConfig.tabs.map((tab, idx) => (
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

          {/* Grid Items - 3 columns like MyOperator */}
          <div className="grid grid-cols-3 gap-6">
            {activeTabData.items.slice(0, 6).map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  className="mega-menu-item p-5 rounded-xl border border-gray-200 bg-white no-underline transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 flex flex-col gap-3 group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-cyan-100 group-hover:to-blue-100 transition-all duration-300 shadow-sm group-hover:shadow-md flex-shrink-0">
                      <IconComponent
                        size={20}
                        className="text-blue-700 group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-900 group-hover:text-blue-900 transition-colors block leading-tight">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full font-bold inline-block mt-2 shadow-md">
                        {item.badge}
                      </span>
                    )}
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
