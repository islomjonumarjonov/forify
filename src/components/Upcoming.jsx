import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Upcoming() {
  const { data, isPending, error } = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=14ebb2b896776a12bf5c8a0e6e3b10d8"
  );

  if (data) {
    return data.results.map((movie) => {
      const {
        id,
        title,
        poster_path: image,
        release_date: date,
        overview,
        vote_average: rate,
      } = movie;
      return (
        <div className="carousel-item hover:opacity-50 transition-all" key={id}>
          <Link to={`singlePage/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w400${image}`}
              alt={overview}
            />
          </Link>
        </div>
      );
    });
  }
}

export default Upcoming;
