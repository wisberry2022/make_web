import './Theater.scss';
import Header from '../../mainPage/header/Header';
import Footer from '../../mainPage/footer/Footer';
import Region from './region/Region';
import Introduce from './introduce/Introduce';

const Theater = () => {
  return (
    <div className="theater_wrap">
      <Header />
      <Region />
      <Introduce />
      <Footer />
    </div>
  )
}

export default Theater;