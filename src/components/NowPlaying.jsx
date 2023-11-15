import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function NowPlaying() {
  const { data, isPending, error } = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=14ebb2b896776a12bf5c8a0e6e3b10d8"
  );

  if (data) {
    return data.results.map((movie) => {
      const { id, poster_path: image, overview } = movie;
      return (
        <div className="carousel-item hover:opacity-50 transition-all" key={id}>
          <Link to={`singlePage/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${image}`}
              alt={overview}
            />
          </Link>
        </div>
      );
    });
  }
}

export default NowPlaying;
