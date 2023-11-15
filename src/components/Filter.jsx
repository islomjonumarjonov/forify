import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Filter() {
  const handleCLick = (type) => {
    const { data, isPending, error } = useFetch(
      `https://api.themoviedb.org/3/discover/movie?query=${type}&api_key=14ebb2b896776a12bf5c8a0e6e3b10d8`
    );
    console.log(data);
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Filter
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link
            onClick={() => {
              handleCLick("action");
            }}
          >
            Action
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              handleCLick("drama");
            }}
          >
            Drama
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
