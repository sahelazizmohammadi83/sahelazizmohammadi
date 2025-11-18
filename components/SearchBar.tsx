"use client";

import { useState, ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="جستجو در پست‌ها..."
        value={query}
        onChange={handleChange}
        className="w-full border rounded-xl p-3 text-lg focus:outline-none
                   bg-white text-black border-gray-300
                   dark:bg-[#0b1220] dark:text-white dark:border-gray-600"
      />
    </div>
  );
}
