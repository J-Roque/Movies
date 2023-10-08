import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../data/httpClient'
import { getMovieImg } from '../utils/getMovieImg'
import './movieDetails.css'
import { LandingPage } from './LandingPage'
export const MovieDetails = () => {
  const { movieId } = useParams([])
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get('/movie/' + movieId).then((data) => {
      setMovie(data)
      setGeneros(data.genres[0])
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className='detailsContainer'>
      <img className='detailsContainer-img' src={imageUrl} alt={movie.title} />
      <div className='detailsContainer_info'>
        <p className='detailsContainer_info-p'><span>Title :</span>{movie.title}</p>
        <p className='detailsContainer_info-p'><span>Genero:</span> {generos.name}</p>
        <p className='detailsContainer_info-p'><span>Descripcion:</span>{movie.overview}
          <br />
          <Link to={'/'}> <button className='detailsContainer_info-btn' >Rresar</button> </Link>
        </p>
      </div>
    </div>
  )
}
