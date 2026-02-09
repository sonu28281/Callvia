import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';
import EnquiryModal from './components/EnquiryModal';
import SEO from './components/SEO';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing';
import PlaceholderPage from './components/PlaceholderPage';

// Product Pages
import DidNumbers from './pages/Products/DidNumbers';
import SipTrunks from './pages/Products/SipTrunks';
import PredictiveDialer from './pages/Products/PredictiveDialer';
import CallRecording from './pages/Products/CallRecording';
import WhatsAppAutomation from './pages/Products/WhatsAppAutomation';
import AiTranscription from './pages/Products/AiTranscription';
import AiVoiceAgents from './pages/Products/AiVoiceAgents';

// Solution Pages
import CallFloSuite from './pages/Solutions/CallFloSuite';
import CallfloDeskAI from './pages/Solutions/CallfloDeskAI';
import Partners from './pages/Solutions/Partners';

// Company Pages
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Developers from './pages/Developers';
import ResourcesPage from './pages/Resources';

// Legal Pages
import TermsOfService from './pages/Legal/Terms';
import PrivacyPolicy from './pages/Legal/Privacy';
import Compliance from './pages/Legal/Compliance';
import SecurityPage from './pages/Security';

function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Capture UTM parameters on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParams = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
    };
    
    // Store UTM params in session storage if any exist
    if (Object.values(utmParams).some(v => v)) {
      sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
    }
  }, []);

  const handleEnquiryClick = () => {
    setIsEnquiryModalOpen(true);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <SEO />
          <EnquiryModal
            isOpen={isEnquiryModalOpen}
            onClose={() => setIsEnquiryModalOpen(false)}
            leadSource="footer_enquiry"
          />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                
                {/* Solutions */}
                <Route path="/solutions" element={<PlaceholderPage title="[SOLUTIONS_PAGE_TITLE]" description="[SOLUTIONS_PAGE_DESCRIPTION]" />} />
                <Route path="/solutions/callflo-suite" element={<CallFloSuite />} />
                <Route path="/solutions/ai-receptionist" element={<CallfloDeskAI />} />
                <Route path="/solutions/partners" element={<Partners />} />
                
                {/* Products */}
                <Route path="/products" element={<PlaceholderPage title="[PRODUCTS_PAGE_TITLE]" description="[PRODUCTS_PAGE_DESCRIPTION]" />} />
                <Route path="/products/sip-trunks" element={<SipTrunks />} />
                <Route path="/products/did-numbers" element={<DidNumbers />} />
                <Route path="/products/ai-agents" element={<AiVoiceAgents />} />
                <Route path="/products/ai-transcription" element={<AiTranscription />} />
                <Route path="/products/call-recording" element={<CallRecording />} />
                <Route path="/products/predictive-dialer" element={<PredictiveDialer />} />
                <Route path="/products/ai-receptionist" element={<PlaceholderPage title="[PRODUCT_AI_RECEPTIONIST_TITLE]" description="[PRODUCT_AI_RECEPTIONIST_DESCRIPTION]" />} />
                <Route path="/products/whatsapp-automation" element={<WhatsAppAutomation />} />
                
                {/* Company */}
                <Route path="/features" element={<PlaceholderPage title="[FEATURES_PAGE_TITLE]" description="[FEATURES_PAGE_DESCRIPTION]" />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/reseller-program" element={<PlaceholderPage title="[RESELLER_PROGRAM_TITLE]" description="[RESELLER_PROGRAM_DESCRIPTION]" />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Legal */}
                <Route path="/legal/terms" element={<TermsOfService />} />
                <Route path="/legal/privacy" element={<PrivacyPolicy />} />
                <Route path="/legal/compliance" element={<Compliance />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/faq" element={<PlaceholderPage title="[FAQ_PAGE_TITLE]" description="[FAQ_PAGE_DESCRIPTION]" />} />
                <Route path="/status" element={<PlaceholderPage title="[STATUS_PAGE_TITLE]" description="[STATUS_PAGE_DESCRIPTION]" />} />
              </Routes>
            </main>
            <Footer onEnquiryClick={handleEnquiryClick} />
            <WhatsAppWidget />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
