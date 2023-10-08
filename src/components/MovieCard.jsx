
import { Link } from "react-router-dom";
import './movieCard.css';
export const MovieCard = ({ movie }) => {
  const imgaUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className="movieCard">
      <Link to={'/movies/'+ movie.id}>
      <img  className="movieCard-img"  width={230}  src={imgaUrl} alt={movie.title} />
      <div className="movieCard_info">
        <h1 className="movieCard_info-h1">{movie.title}</h1>
      </div>
      </Link>
    </div>
  )
}
