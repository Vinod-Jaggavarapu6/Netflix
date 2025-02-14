import { useEffect } from "react";
import {
  IMDB_FETCH_API_OPTIONS,
  IMDB_POPULAR_MOVIES_URL,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(IMDB_POPULAR_MOVIES_URL, IMDB_FETCH_API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
