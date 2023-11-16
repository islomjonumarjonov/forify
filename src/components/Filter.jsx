import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Filtered from "./Filtered";

function Filter() {
  if (type) {
    console.log(type);
  }
  // const handleCLick = (type) => {
  //   const { data, isPending, error } = useFetch(
  //     `https://api.themoviedb.org/3/discover/movie?query=${type}&api_key=14ebb2b896776a12bf5c8a0e6e3b10d8`
  //   );
  //   console.log(data);
  // };
  return (
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
        </ul>
      </div>
      {/* {type && <Filtered type={type} />} */}
    </div>
  );
}

export default Filter;
