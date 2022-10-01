import ContainerMC from '../../../components/ContainerMC';
import MovieSearch from './movieSearch/MovieSearch';

const Movie = () => {
  return (
    <div className="movie_wrap">
      <ContainerMC />
      <MovieSearch />
    </div>
  )
}

export default Movie;