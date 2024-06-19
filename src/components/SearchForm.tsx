import { useState } from "react";

interface SearchFormProps {
  onSearch: (username: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Search Github username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
