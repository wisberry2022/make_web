import './Ticketing.scss';
import Header from '../../mainPage/header/Header';
import Footer from '../../mainPage/footer/Footer';
import Reservation from './reservation/Reservation';

const Ticketing = () => {
  return (
    <div className="ticketing_wrap">
      <Header />
      <Reservation />
      <Footer />
    </div>
  )
}

export default Ticketing;