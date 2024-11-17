import { createContext, useState } from 'react'

// Create the context

export const ThemeContext = createContext()

// Create the context provider

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {

    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}