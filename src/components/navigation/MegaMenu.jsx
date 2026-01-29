import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { megaMenuConfig } from '../../config/menuConfig.js';

export function MegaMenu() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabData = megaMenuConfig.tabs[activeTab];

  return (
    <div className="fixed left-0 right-0 top-16 bg-white border-b border-gray-100 shadow-lg z-40 rounded-b-xl">
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Tabs - Smaller and Sleeker */}
        <div className="flex gap-8 border-b border-gray-150 pb-4 mb-6">
          {megaMenuConfig.tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-0 py-1.5 bg-transparent border-none cursor-pointer transition-all text-sm font-semibold whitespace-nowrap ${
                activeTab === idx
                  ? 'text-blue-900 border-b-3 border-blue-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Items - Compact and Fancy */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {activeTabData.items.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className="p-3 rounded-md border border-gray-100 bg-white no-underline transition-all hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:border-blue-200 hover:shadow-md flex flex-col gap-2 group"
              >
                <div className="flex items-start gap-2">
                  <IconComponent
                    size={18}
                    className="text-blue-900 flex-shrink-0 group-hover:scale-125 transition-transform mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-gray-900 group-hover:text-blue-900 transition-colors block leading-tight">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-xs bg-orange-600 text-white px-1.5 py-0.5 rounded-full font-bold inline-block mt-1">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-600 m-0 leading-tight group-hover:text-gray-700">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
