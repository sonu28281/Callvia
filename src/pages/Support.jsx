import React from 'react';
import { Mail, MessageCircle, Clock } from 'lucide-react';

export function SupportPage() {
  return (
    <div>
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">We're Here to Help</h1>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Mail, title: 'Email', text: 'support@callvia.in' },
              { icon: MessageCircle, title: 'WhatsApp', text: '+91 8418 828 125' },
              { icon: Clock, title: 'Hours', text: '9 AM - 6 PM IST' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 border border-gray-200 rounded-lg text-center">
                  <Icon size={32} className="text-blue-900 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportPage;
