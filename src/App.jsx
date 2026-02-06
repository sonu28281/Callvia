import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing';
import PlaceholderPage from './components/PlaceholderPage';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <SEO />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                
                {/* Solutions */}
                <Route path="/solutions" element={<PlaceholderPage title="[SOLUTIONS_PAGE_TITLE]" description="[SOLUTIONS_PAGE_DESCRIPTION]" />} />
                <Route path="/solutions/callflo-suite" element={<PlaceholderPage title="[CALLFLO_SUITE_TITLE]" description="[CALLFLO_SUITE_DESCRIPTION]" />} />
                <Route path="/solutions/ai-receptionist" element={<PlaceholderPage title="[AI_RECEPTIONIST_TITLE]" description="[AI_RECEPTIONIST_DESCRIPTION]" />} />
                <Route path="/solutions/partners" element={<PlaceholderPage title="[PARTNERS_TITLE]" description="[PARTNERS_DESCRIPTION]" />} />
                
                {/* Products */}
                <Route path="/products" element={<PlaceholderPage title="[PRODUCTS_PAGE_TITLE]" description="[PRODUCTS_PAGE_DESCRIPTION]" />} />
                <Route path="/products/sip-trunks" element={<PlaceholderPage title="[SIP_TRUNKS_TITLE]" description="[SIP_TRUNKS_DESCRIPTION]" />} />
                <Route path="/products/did-numbers" element={<PlaceholderPage title="[DID_NUMBERS_TITLE]" description="[DID_NUMBERS_DESCRIPTION]" />} />
                <Route path="/products/ai-agents" element={<PlaceholderPage title="[AI_AGENTS_TITLE]" description="[AI_AGENTS_DESCRIPTION]" />} />
                <Route path="/products/ai-transcription" element={<PlaceholderPage title="[AI_TRANSCRIPTION_TITLE]" description="[AI_TRANSCRIPTION_DESCRIPTION]" />} />
                <Route path="/products/call-recording" element={<PlaceholderPage title="[CALL_RECORDING_TITLE]" description="[CALL_RECORDING_DESCRIPTION]" />} />
                <Route path="/products/predictive-dialer" element={<PlaceholderPage title="[PREDICTIVE_DIALER_TITLE]" description="[PREDICTIVE_DIALER_DESCRIPTION]" />} />
                <Route path="/products/ai-receptionist" element={<PlaceholderPage title="[PRODUCT_AI_RECEPTIONIST_TITLE]" description="[PRODUCT_AI_RECEPTIONIST_DESCRIPTION]" />} />
                <Route path="/products/whatsapp-automation" element={<PlaceholderPage title="[WHATSAPP_AUTOMATION_TITLE]" description="[WHATSAPP_AUTOMATION_DESCRIPTION]" />} />
                
                {/* Company */}
                <Route path="/features" element={<PlaceholderPage title="[FEATURES_PAGE_TITLE]" description="[FEATURES_PAGE_DESCRIPTION]" />} />
                <Route path="/developers" element={<PlaceholderPage title="[DEVELOPERS_PAGE_TITLE]" description="[DEVELOPERS_PAGE_DESCRIPTION]" />} />
                <Route path="/resources" element={<PlaceholderPage title="[RESOURCES_PAGE_TITLE]" description="[RESOURCES_PAGE_DESCRIPTION]" />} />
                <Route path="/about" element={<PlaceholderPage title="[ABOUT_PAGE_TITLE]" description="[ABOUT_PAGE_DESCRIPTION]" />} />
                <Route path="/careers" element={<PlaceholderPage title="[CAREERS_PAGE_TITLE]" description="[CAREERS_PAGE_DESCRIPTION]" />} />
                <Route path="/reseller-program" element={<PlaceholderPage title="[RESELLER_PROGRAM_TITLE]" description="[RESELLER_PROGRAM_DESCRIPTION]" />} />
                <Route path="/contact" element={<PlaceholderPage title="[CONTACT_PAGE_TITLE]" description="[CONTACT_PAGE_DESCRIPTION]" />} />
                
                {/* Legal */}
                <Route path="/terms" element={<PlaceholderPage title="[TERMS_PAGE_TITLE]" description="[TERMS_PAGE_DESCRIPTION]" />} />
                <Route path="/privacy" element={<PlaceholderPage title="[PRIVACY_PAGE_TITLE]" description="[PRIVACY_PAGE_DESCRIPTION]" />} />
                <Route path="/compliance" element={<PlaceholderPage title="[COMPLIANCE_PAGE_TITLE]" description="[COMPLIANCE_PAGE_DESCRIPTION]" />} />
                <Route path="/security" element={<PlaceholderPage title="[SECURITY_PAGE_TITLE]" description="[SECURITY_PAGE_DESCRIPTION]" />} />
                <Route path="/faq" element={<PlaceholderPage title="[FAQ_PAGE_TITLE]" description="[FAQ_PAGE_DESCRIPTION]" />} />
                <Route path="/status" element={<PlaceholderPage title="[STATUS_PAGE_TITLE]" description="[STATUS_PAGE_DESCRIPTION]" />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppWidget />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
