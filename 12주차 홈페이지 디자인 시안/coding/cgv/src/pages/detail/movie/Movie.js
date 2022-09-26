import './Movie.scss';
import Header from '../../mainPage/header/Header';
import Footer from '../../mainPage/footer/Footer';
import MovieChart from './movieChart/MovieChart';

const Movie = () => {
  return (
    <div className="movie_wrap">
      <Header />
      <MovieChart />
      <Footer />
    </div>
  )
}

export default Movie;