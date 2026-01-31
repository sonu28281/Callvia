import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Pages
import { Home } from '../pages/Home.jsx';
import { PricingPage } from '../pages/Pricing.jsx';
import { SupportPage } from '../pages/Support.jsx';
import ContactPage from '../pages/Contact.jsx';
import { AboutPage } from '../pages/About.jsx';
import CareersPage from '../pages/Careers.jsx';
import PartnershipPage from '../pages/Partnership.jsx';

// Products
import { DidNumbersPage } from '../pages/Products/DidNumbers.jsx';
import { SipTrunksPage } from '../pages/Products/SipTrunks.jsx';
import { CloudCallCenterPage } from '../pages/Products/CloudCallCenter.jsx';
import { DialerPage } from '../pages/Products/Dialer.jsx';
import { IvrRoutingPage } from '../pages/Products/IvrRouting.jsx';
import { CallMonitoringPage } from '../pages/Products/CallMonitoring.jsx';
import { AiReceptionistPage } from '../pages/Products/AiReceptionist.jsx';
import { AiVoiceAgentsPage } from '../pages/Products/AiVoiceAgents.jsx';
import { AiOutboundPage } from '../pages/Products/AiOutbound.jsx';
import { ConversationalIvrPage } from '../pages/Products/ConversationalIvr.jsx';
import { WhatsappAutomationPage } from '../pages/Products/WhatsappAutomation.jsx';
import { ClickToCallPage } from '../pages/Products/ClickToCall.jsx';

// Platform
import { WhiteLabelPage } from '../pages/Platform/WhiteLabel.jsx';
import { ResellerPage } from '../pages/Platform/Reseller.jsx';
import { BillingPage } from '../pages/Platform/Billing.jsx';
import { ControlsPage } from '../pages/Platform/Controls.jsx';

// Solutions
import { CallCentersSolutionPage } from '../pages/Solutions/CallCenters.jsx';
import { EnterprisesSolutionPage } from '../pages/Solutions/Enterprises.jsx';
import { ResellersSolutionPage } from '../pages/Solutions/Resellers.jsx';
import { SmallBusinessSolutionPage } from '../pages/Solutions/SmallBusiness.jsx';

// Developers
import { ApiPage } from '../pages/Developers/Api.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'support', element: <SupportPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'partnership', element: <PartnershipPage /> },
      
      // Products
      { path: 'products/did-numbers', element: <DidNumbersPage /> },
      { path: 'products/sip-trunks', element: <SipTrunksPage /> },
      { path: 'products/cloud-call-center', element: <CloudCallCenterPage /> },
      { path: 'products/dialer', element: <DialerPage /> },
      { path: 'products/ivr-routing', element: <IvrRoutingPage /> },
      { path: 'products/call-monitoring', element: <CallMonitoringPage /> },
      { path: 'products/ai-receptionist', element: <AiReceptionistPage /> },
      { path: 'products/ai-voice-agents', element: <AiVoiceAgentsPage /> },
      { path: 'products/ai-outbound', element: <AiOutboundPage /> },
      { path: 'products/conversational-ivr', element: <ConversationalIvrPage /> },
      { path: 'products/whatsapp-automation', element: <WhatsappAutomationPage /> },
      { path: 'products/click-to-call', element: <ClickToCallPage /> },
      
      // Platform
      { path: 'platform/white-label', element: <WhiteLabelPage /> },
      { path: 'platform/reseller', element: <ResellerPage /> },
      { path: 'platform/billing', element: <BillingPage /> },
      { path: 'platform/controls', element: <ControlsPage /> },
      
      // Solutions
      { path: 'solutions/call-centers', element: <CallCentersSolutionPage /> },
      { path: 'solutions/enterprises', element: <EnterprisesSolutionPage /> },
      { path: 'solutions/resellers', element: <ResellersSolutionPage /> },
      { path: 'solutions/small-business', element: <SmallBusinessSolutionPage /> },
      
      // Developers
      { path: 'developers/api', element: <ApiPage /> },
    ],
  },
]);

export default router;
