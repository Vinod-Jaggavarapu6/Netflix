export const NETFLIX_LOGO_IMG_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/US-en-20250210-TRIFECTA-perspective_5cc3f8aa-0c98-40f5-96f7-ac7e4af57d4a_large.jpg";

export const NETFLIX_USER_IMG_URL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const IMDB_FETCH_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_IMDB_API_AUTH_KEY}`,
  },
};

export const IMDB_UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const IMDB_NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const IMDB_TOPRATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const IMDB_POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const IMDB_MOVIE_VIDEOS_URL = "https://api.themoviedb.org/3/movie";

export const IMDB_MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w500";
