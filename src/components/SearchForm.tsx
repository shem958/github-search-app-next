import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface SearchFormProps {
  onSearch: (username: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const { darkMode } = useTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row items-center p-4 rounded-lg shadow-md max-w-md w-full mx-auto ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <input
        type="text"
        placeholder="Search Github username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`flex-grow p-2 border rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring focus:ring-blue-300 ${
          darkMode
            ? "bg-gray-800 text-white placeholder-gray-400"
            : "bg-white text-black placeholder-gray-500"
        } w-full sm:w-auto mb-2 sm:mb-0`}
      />
      <button
        type="submit"
        className={`w-full sm:w-auto px-4 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-blue-600 focus:ring focus:ring-blue-300 transition-colors duration-200 ${
          darkMode ? "bg-blue-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
