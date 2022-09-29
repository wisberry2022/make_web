import './Event.scss';
import Header from '../../mainPage/header/Header';
import Footer from '../../mainPage/footer/Footer';
import MainEvent from './mainEvent/MainEvent';

const Event = () => {
  return (
    <div className="event_wrapper">
      <Header />
      <MainEvent />
      <Footer />
    </div>
  )
}

export default Event;