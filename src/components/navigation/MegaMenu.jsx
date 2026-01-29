import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { megaMenuConfig } from '../../config/menuConfig.js';

export function MegaMenu() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabData = megaMenuConfig.tabs[activeTab];

  return (
    <div className="fixed left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-2xl z-40 rounded-b-lg">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-12 border-b-2 border-gray-200 pb-6 mb-8">
          {megaMenuConfig.tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-0 py-2 bg-transparent border-none cursor-pointer transition-all text-base font-semibold whitespace-nowrap ${
                activeTab === idx
                  ? 'text-blue-900 border-b-4 border-blue-900 pb-2'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {activeTabData.items.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className="p-5 rounded-lg border border-gray-200 bg-gray-50 no-underline transition-all hover:bg-blue-50 hover:border-blue-900 hover:shadow-md hover:-translate-y-1 flex flex-col gap-3 group"
              >
                <div className="flex items-start gap-3">
                  <IconComponent
                    size={20}
                    className="text-blue-900 flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-gray-900 group-hover:text-blue-900 transition-colors block">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-xs bg-orange-600 text-white px-2 py-0.5 rounded-full font-bold inline-block mt-1">
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
