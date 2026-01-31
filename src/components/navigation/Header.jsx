import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo.jsx';
import { MegaMenu } from './MegaMenu.jsx';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const navItems = [
    { label: 'Products', href: '#', submenu: true, menuKey: 'products' },
    { label: 'Solutions', href: '/solutions/call-centers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Developers', href: '/developers/api' },
    { label: 'Resources', href: '#' },
    { label: 'Company', href: '#', submenu: true, menuKey: 'company' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center flex-1 ml-12">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (item.menuKey === 'products') setProductsOpen(true);
                  if (item.menuKey === 'company') setCompanyOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.menuKey === 'products') setProductsOpen(false);
                  if (item.menuKey === 'company') setCompanyOpen(false);
                }}
              >
                {item.submenu ? (
                  <button className="text-gray-900 text-sm font-medium bg-transparent border-none cursor-pointer hover:text-blue-900 transition-colors py-2 flex items-center gap-1">
                    {item.label}
                    <ChevronDown size={16} className="opacity-60" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-900 text-sm font-medium no-underline hover:text-blue-900 transition-colors py-2 block"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {item.menuKey === 'products' && productsOpen && (
                  <div
                    className="absolute left-0 top-full pt-2"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <MegaMenu />
                  </div>
                )}
                
                {/* Company Menu Dropdown */}
                {item.menuKey === 'company' && companyOpen && (
                  <div
                    className="absolute left-0 top-full pt-2"
                    onMouseEnter={() => setCompanyOpen(true)}
                    onMouseLeave={() => setCompanyOpen(false)}
                  >
                    <MegaMenu filterTab="company" />
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Auth Links - Fancy */}
          <div className="hidden lg:flex gap-4 items-center ml-auto">
            <Link
              to="#login"
              className="text-gray-900 text-sm font-semibold bg-transparent border border-gray-300 px-5 py-2.5 rounded-lg hover:border-blue-900 hover:text-blue-900 transition-all no-underline"
            >
              Login
            </Link>
            <Link
              to="#signup"
              className="text-white text-sm font-semibold bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-2.5 rounded-lg hover:shadow-lg hover:from-blue-950 hover:to-blue-900 transition-all no-underline"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-gray-900" strokeWidth={1.5} />
            ) : (
              <Menu size={24} className="text-gray-900" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden flex flex-col gap-4 mt-6 pb-6 border-t border-gray-200 pt-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href || '#'}
                className="text-gray-900 text-base font-medium no-underline hover:text-blue-900"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button className="text-blue-900 bg-transparent border border-blue-900 px-6 py-2 rounded-md text-base font-semibold cursor-pointer">
                Talk to Sales
              </button>
              <button className="bg-blue-900 text-white border-none px-6 py-2 rounded-md text-base font-semibold cursor-pointer">
                Book Demo
              </button>
              <button className="text-blue-900 bg-white border border-blue-900 px-4 py-2 rounded-md text-sm font-semibold cursor-pointer">
                Be Your Own Telecom
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
