import {
  Phone,
  Zap,
  MessageSquare,
  Settings,
  Headphones,
  RotateCw,
  Radio,
  Eye,
  Bot,
  Cpu,
  TrendingUp,
  MessageCircle,
  Square,
  Globe,
  Users,
  CreditCard,
  Code,
  Info,
  Briefcase,
  Mail,
  FileText,
} from 'lucide-react';

export const megaMenuConfig = {
  tabs: [
    {
      id: 'voice',
      label: 'Voice & Calling',
      items: [
        {
          id: 'did-numbers',
          label: 'DID Numbers',
          description: 'Pan-India virtual numbers with instant activation',
          icon: Phone,
          path: '/products/did-numbers',
        },
        {
          id: 'sip-trunks',
          label: 'SIP Trunks',
          description: 'Carrier-grade SIP connectivity for India',
          icon: Zap,
          path: '/products/sip-trunks',
        },
        {
          id: 'predictive-dialer',
          label: 'Predictive Dialer',
          description: 'Boost agent productivity with smart dialing',
          icon: RotateCw,
          path: '/products/predictive-dialer',
        },
        {
          id: 'call-recording',
          label: 'Call Recording',
          description: 'Secure recording for compliance & quality',
          icon: Eye,
          path: '/products/call-recording',
        },
      ],
    },
    {
      id: 'ai',
      label: 'AI & Automation',
      items: [
        {
          id: 'ai-receptionist',
          label: 'Callflo DeskAI',
          description: 'Answer calls 24×7 with AI automation',
          icon: Bot,
          path: '/solutions/ai-receptionist',
        },
        {
          id: 'ai-agents',
          label: 'AI Voice Agents',
          description: 'Programmable AI for calling workflows',
          icon: Cpu,
          path: '/products/ai-agents',
        },
        {
          id: 'ai-transcription',
          label: 'AI Transcription',
          description: 'Transcribe calls for QA & insights',
          icon: FileText,
          path: '/products/ai-transcription',
        },
      ],
    },
    {
      id: 'channels',
      label: 'More',
      items: [
        {
          id: 'whatsapp-automation',
          label: 'WhatsApp Automation',
          description: 'Automate WhatsApp follow-ups & notifications',
          icon: MessageSquare,
          path: '/products/whatsapp-automation',
        },
      ],
    },
  ],
  solutions: [
    {
      id: 'callflo-suite',
      label: 'CallFlo Suite',
      description: 'For call centers & enterprises',
      path: '/solutions/callflo-suite',
    },
    {
      id: 'ai-receptionist-solution',
      label: 'Callflo DeskAI',
      description: 'For small businesses',
      path: '/solutions/ai-receptionist',
    },
    {
      id: 'partners',
      label: 'Partners',
      description: 'White-label reseller program',
      path: '/solutions/partners',
    },
  ],
  company: [
    {
      id: 'about',
      label: 'About Us',
      description: 'Learn about Callvia',
      icon: Info,
      path: '/about',
    },
    {
      id: 'careers',
      label: 'Careers',
      description: 'Join our team',
      icon: Briefcase,
      path: '/careers',
    },
    {
      id: 'contact',
      label: 'Contact Us',
      description: 'Get in touch',
      icon: Mail,
      path: '/contact',
    },
  ],
};

export default megaMenuConfig;
