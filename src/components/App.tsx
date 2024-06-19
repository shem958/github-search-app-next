import React, { useState } from "react";
import SearchForm from "./SearchForm";
import UserCard from "./UserCard";
import { useTheme } from "../context/ThemeContext";

interface User {
  avatar_url: string;
  name: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  company: string;
  twitter_username: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { darkMode, toggleDarkMode } = useTheme();

  const fetchUser = async (username: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <button
        className="absolute top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-md"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <SearchForm onSearch={fetchUser} />
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;
