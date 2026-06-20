import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check if theme preference is stored, or default to dark
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    // Default to dark theme for modern developer aesthetic
    return 'dark';
  });

  useEffect(() => {
    // Apply theme to html element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <PortfolioContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
