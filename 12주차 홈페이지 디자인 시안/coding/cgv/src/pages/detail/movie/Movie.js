import './Movie.scss';
import Header from '../../mainPage/header/Header';
import Footer from '../../mainPage/footer/Footer';
import ContainerMC from '../../../components/ContainerMC';
import MovieSearch from './movieSearch/MovieSearch';

const Movie = () => {
  return (
    <div className="movie_wrap">
      <Header />
      <ContainerMC />
      <MovieSearch />
      <Footer />
    </div>
  )
}

export default Movie;