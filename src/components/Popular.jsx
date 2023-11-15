import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Popular() {
  const { data, isPending, error } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=14ebb2b896776a12bf5c8a0e6e3b10d8"
  );

  // console.log(data);
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
        <>
          <div
            className="flex flex-col carousel-item hover:opacity-50 transition-all"
            key={id}
          >
            <Link to={`singlePage/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${image}`}
                alt={overview}
              />
            </Link>
          </div>
        </>
      );
    });
  }
}

export default Popular;
