import React, { createContext, useContext, useState, ReactNode } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div
        className={`bg-${
          darkMode ? "black" : "gray-100"
        } transition-colors duration-500`}
      >
        <ToggleDarkModeIcon
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const ToggleDarkModeIcon: React.FC<ThemeContextType> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <div
      className="fixed bottom-4 right-4 cursor-pointer z-50"
      onClick={toggleDarkMode}
    >
      {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
    </div>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
