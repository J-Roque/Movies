import placeholder from '../img/placeholder/placeholder.png'
export const getMovieImg = (path,width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}`:placeholder
}

// const imgaUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
