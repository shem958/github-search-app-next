import React from "react";
import App from "../components/App";
import "../styles/globals.css"; // Correct import statement
import { ThemeProvider } from "../context/ThemeContext";

const Home: React.FC = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default Home;
