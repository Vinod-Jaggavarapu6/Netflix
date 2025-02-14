import { useEffect } from "react";
import {
  IMDB_FETCH_API_OPTIONS,
  IMDB_TOPRATED_MOVIES_URL,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(IMDB_TOPRATED_MOVIES_URL, IMDB_FETCH_API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
