import React from "react";
import { IMDB_MOVIE_POSTER_URL } from "../utils/constants";
const MovieCard = ({ movieName, posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMDB_MOVIE_POSTER_URL + posterPath} alt={movieName} />
    </div>
  );
};

export default MovieCard;
