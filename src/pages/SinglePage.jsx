import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";
import { useGlobalContext } from "../hooks/useGlobalContext";

function SinglePage() {
  const { state } = useGlobalContext();
  const { addNewBookmark } = useGlobalContext();
  const { isMovieAlreadyAdded } = addNewBookmark;
  const { id } = useParams();
  // console.log(id);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=14ebb2b896776a12bf5c8a0e6e3b10d8`;
  const { data, isPending, error } = useFetch(url);
  // console.log(data);
  if (data) {
    const {
      poster_path: image,
      title,
      release_date: date,
      genres,
      production_countries: country,
      budget,
      revenue,
      production_companies: production,
      status,
      overview,
      vote_average: rating,
      vote_count: quantitiy,
    } = data;
    genres.map((genre) => {
      // console.log(genre.name);
    });

    // console.log("STATE", state, "IS", isMovieAlreadyAdded);

    const money = revenue - budget;

    // console.log(country);

    return (
      <div className="cite-container flex gap-10">
        <div className="flex items-center h-full w-fullS">
          <img
            className="lg:h-[100vh] lg:w-[400px] md:h-[400px] md:w-[250px]"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between gap-3 py-3 lg:w-[500px] md:w-[100px]">
          <div>
            <h1 className="lg:text-4xl md:text-2xl font-bold">{title}</h1>
            <p className="text-neutral-100">{date}</p>
          </div>
          <div>
            <h2 className="lg:text-3xl md:text-xl">About the film:</h2>
            <p className="flex gap-3">
              Genres:
              <span className="text-neutral-100 flex text-md gap-[4px]">
                {genres.map((genre) => {
                  return (
                    <span key={genre.id} to="/">
                      {genre.name}
                    </span>
                  );
                })}
              </span>
            </p>
            <p key={country[0].name}>
              Country:
              <span className="text-neutral-100"> {country[0].name}</span>
            </p>
            <p>
              Budget: <span className="text-neutral-100"> ${budget}</span>
            </p>
            <p>
              Revenue:
              <span className="text-neutral-100"> ${revenue}</span> (+$
              <span>{money}</span>)
            </p>
            <p className="flex gap-3">
              Production:
              <span className="flex gap-2">
                {production.map((company) => {
                  return (
                    <span className="text-neutral-100" key={company.name}>
                      {company.name}
                    </span>
                  );
                })}
              </span>
            </p>
            <p>
              Status: <span className="text-neutral-100">{status}</span>
            </p>
            <p className="flex flex-col">
              Description:
              <span className="text-neutral-100 w-[400px]">{overview}</span>
            </p>
          </div>
          <div className="flex gap-10 items-center">
            <p className="flex flex-col">
              Rating:{" "}
              <span className="text-xl btn btn-primary px-[13px]">
                {rating}
              </span>
            </p>
            <p className="flex flex-col">
              Voted:{" "}
              <span className="text-xl btn btn-outline px-[15px]">
                {quantitiy}
              </span>
            </p>
            <p className="flex flex-col">
              Bookmark:
              <button
                onClick={() => addNewBookmark(data)}
                className="btn btn-primary text-3xl"
              >
                <IoBookmark />
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePage;
