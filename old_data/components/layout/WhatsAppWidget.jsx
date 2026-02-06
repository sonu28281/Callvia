import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/918418828125"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}

export default WhatsAppWidget;
