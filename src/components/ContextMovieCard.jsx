import { useState } from "react"
import { useEffect } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from '../components/MovieCard'
import './contexMovieCard.css'
import { Baner } from "./baner/Baner"
export const ContextMovieCard = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results)
    });
  }, []);

  return (
    <>
      <Baner/>
      <h1 className="title_movies">Popular Movies</h1>
      <div className="container_movieCard" id="title_movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </>
  );

}


