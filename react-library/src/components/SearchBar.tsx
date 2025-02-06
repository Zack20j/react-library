import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Busca un libro..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        value={value}
        onChange={onChange}
      />
      <button
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        onClick={onSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
