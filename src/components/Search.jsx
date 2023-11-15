import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Searched from "./Searched";

function Search() {
  const [input, setInput] = useState("");
  const searchText = useRef();
  return (
    <>
      <form className="flex py-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            setInput(searchText.current.value);
            console.log(searchText.current.value);
          }}
        >
          <FaSearch className="text-2xl" />
        </button>
        <label className="flex items-center">
          <input
            placeholder="Search..."
            ref={searchText}
            className="input "
            type="text"
          />
        </label>
      </form>
      <div>
        {input && (
          <div className="border">
            <h2 className="text-2xl font-bold bg text-neutral-950">
              You Searched:
            </h2>
            <div className="h-[340px] py-5 space-x-4 carousel carousel-center rounded-box ">
              <Searched url={input} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
