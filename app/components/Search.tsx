import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Search = ({ setQuery, query }: { setQuery: any; query: string }) => {
  return (
    <div
      className={`flex relative w-full md:w-[60%] bg-gray-100 hover:bg-gray-200 duration-200 text-lg md:text-3xl md:py-2 px-4 rounded-full m-auto items-center`}
    >
      <button
        className={`transition-all p-1 duration-100 outline-none   justify-end 
      `}
      >
        <IoIosSearch />
      </button>
      <input autoFocus={true}
        placeholder={`Search our products ..`}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className={` placeholder:text-gray-400 bg-transparent w-[100%]  ml-1 outline-none text-sm md:text-xl h-[2rem] `}
        type="text"
      />
      <button
        className="p-1"
        onClick={() => {
          setQuery("");
        }}
      >
<RxCross2/>
</button>
    </div>
  );
};

export default Search;
