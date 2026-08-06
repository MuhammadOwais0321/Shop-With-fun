import React from "react";
import { Search } from "lucide-react";

const SearchFilter = ({searchTerm, setSearchTerm}) => {
  return (
    <>
      <div className="mb-5 rounded-2xl border border-gray-800 bg-gray-900 p-5 shadow-xl ">
        <div className="flex items-center overflow-hidden rounded-xl border border-gray-700 bg-gray-800 transition duration-300 focus-within:ring-4 focus-within:ring-orange-600/50">
          <Search className="shrink- ml-4 size-5 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search high-performance product by name or feature... "
            className="w-full bg-gray-800 p-4 text-base font-medium text-white placeholder-gray-500 outline-none"
            aria-label="Search Product"
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
