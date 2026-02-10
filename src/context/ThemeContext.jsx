import React, { createContext, useContext, useEffect, useState } from 'react';
import siteConfig from '../config/site_config.json';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [animationType, setAnimationType] = useState(() => {
    return localStorage.getItem('animationType') || siteConfig.animation?.type || 'grid';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('animationType', animationType);
    // Trigger animation reload by dispatching a custom event
    window.dispatchEvent(new CustomEvent('animationTypeChange', { detail: animationType }));
  }, [animationType]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const changeAnimation = (type) => {
    setAnimationType(type);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, animationType, changeAnimation }}>
      {children}
    </ThemeContext.Provider>
  );
};
