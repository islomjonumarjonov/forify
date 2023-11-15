import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Searched({ url }) {
  console.log(url);
  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${url}&api_key=14ebb2b896776a12bf5c8a0e6e3b10d8`
  );

  console.log(data);
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
          {image && (
            <Link to={`singlePage/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${image}`}
                alt={overview}
              />
            </Link>
          )}
          {!image && <h2>There is no info</h2>}
        </div>
      );
    });
  }
}

export default Searched;
