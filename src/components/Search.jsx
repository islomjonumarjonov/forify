import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Searched from "./Searched";
import Filter from "../components/Filter";
import Filtered from "./Filtered";

function Search() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const searchText = useRef();
  if (type) {
    console.log(type);
  }
  return (
    <div className="py-3 items-center flex flex-col justify-between">
      <div className="flex items-center">
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
        <div className="flex flex-col">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              Filter
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={() => {
                    setType("action");
                  }}
                >
                  Action
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setType("drama");
                  }}
                >
                  Drama
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setType("comedy");
                  }}
                >
                  Comedy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex">
        <div>
          {type && (
            <div className="border">
              <h2 className="text-2xl font-bold bg text-neutral-950">
                You Searched:
              </h2>
              <div className="h-[340px] py-5 space-x-4 carousel carousel-center rounded-box ">
                <Filtered type={type} />
              </div>
            </div>
          )}

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
      </div>
    </div>
  );
}

export default Search;
