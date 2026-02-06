import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/navigation/Header.jsx';
import { Footer } from '../components/layout/Footer.jsx';
import { WhatsAppWidget } from '../components/layout/WhatsAppWidget.jsx';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
