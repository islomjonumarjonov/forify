import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function Bookmark() {
  const { bookmarked } = useGlobalContext();
  console.log(bookmarked);
  return (
    <div className="cite-container flex flex-wrap gap-5">
      {bookmarked.map((movie) => {
        const { id, poster_path: image, overview } = movie;
        return (
          <div key={id}>
            <div className="flex hover:opacity-50 transition-all" key={id}>
              <Link to={`singlePage/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${image}`}
                  alt={overview}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
  // return bookmarked.map((movie) => {
  //   const { id, poster_path: image, overview } = movie;
  //   return (
  //     <div>
  //       <div className="flex hover:opacity-50 transition-all" key={id}>
  //         <Link to={`singlePage/${id}`}>
  //           <img
  //             src={`https://image.tmdb.org/t/p/w200${image}`}
  //             alt={overview}
  //           />
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // });
}

export default Bookmark;
