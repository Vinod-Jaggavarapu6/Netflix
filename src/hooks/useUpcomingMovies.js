import { useEffect } from "react";
import {
  IMDB_FETCH_API_OPTIONS,
  IMDB_UPCOMING_MOVIES_URL,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(IMDB_UPCOMING_MOVIES_URL, IMDB_FETCH_API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
