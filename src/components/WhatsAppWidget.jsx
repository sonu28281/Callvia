import { MessageCircle } from 'lucide-react';
import siteConfig from '../config/site_config.json';

const WhatsAppWidget = () => {
  if (!siteConfig.features.enableWhatsAppWidget) return null;

  const handleClick = () => {
    window.open(siteConfig.contact.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="whatsapp-widget">
      <button
        onClick={handleClick}
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer',
          border: 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <MessageCircle size={28} color="white" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
