import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo.jsx';
import { companyConfig } from '../../config/company.js';

export function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'DID Numbers', href: '/products/did-numbers' },
        { label: 'SIP Trunks', href: '/products/sip-trunks' },
        { label: 'Cloud Call Center', href: '/products/cloud-call-center' },
        { label: 'AI Receptionist', href: '/products/ai-receptionist' },
        { label: 'AI Voice Agents', href: '/products/ai-voice-agents' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Call Centers', href: '/solutions/call-centers' },
        { label: 'Enterprises', href: '/solutions/enterprises' },
        { label: 'Resellers', href: '/solutions/resellers' },
        { label: 'Small Business', href: '/solutions/small-business' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { label: 'White-Label', href: '/platform/white-label' },
        { label: 'Reseller Program', href: '/platform/reseller' },
        { label: 'Billing', href: '/platform/billing' },
        { label: 'Controls', href: '/platform/controls' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Support', href: '/support' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <span className="text-lg font-semibold text-white">Callvia</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Enterprise telecom & AI platform for India.
            </p>
            <div className="space-y-2">
              <p className="text-xs text-gray-400">
                <strong className="text-gray-200">Support:</strong>
              </p>
              <a href={`mailto:${companyConfig.contact.support}`} className="text-sm text-blue-400 hover:text-blue-300 no-underline">
                {companyConfig.contact.support}
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 no-underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold text-gray-300 mb-2">SALES</p>
              <a href={`mailto:${companyConfig.contact.sales}`} className="text-sm text-blue-400 hover:text-blue-300 no-underline">
                {companyConfig.contact.sales}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-300 mb-2">SUPPORT HOURS</p>
              <p className="text-sm text-gray-400">{companyConfig.hours.support}</p>
              <p className="text-xs text-gray-500">{companyConfig.hours.supportDays}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-300 mb-2">OFFICE</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {companyConfig.address.city},<br />
                {companyConfig.address.state}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            © 2024 Callvia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/about"
              className="text-xs text-gray-400 hover:text-blue-400 no-underline transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-xs text-gray-400 hover:text-blue-400 no-underline transition-colors"
            >
              Contact
            </Link>
            <a
              href={`https://wa.me/${companyConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-blue-400 no-underline transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
