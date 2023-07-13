//MOVIE PATHS

export const moviePath = "https://api.themoviedb.org/3/movie/";
export const posterPath = "https://www.themoviedb.org/t/p/w500/";

const API_KEY = "0dd20164c60e7144bc2ec57531eeddbd";
export { API_KEY };

const isFave = (arr, path, id) => {
  if (path === "/favourites") {
    return true;
  }

  if (arr.length === 0) {
    return false;
  }

  return arr.some((obj) => obj !== null && obj.id === id);
};

export default isFave;
