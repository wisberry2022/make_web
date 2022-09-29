import './MainEvent.scss';
import CurrentEvent from './currentEvent/CurrentEvent';
import LastEvent from './lastEvent/LastEvent';

const MainEvent = () => {
  return (
    <section className="main_event">
      <div className="container">
        <div className="title_box">
          <h3>CGV EVENT</h3>
          <p>다양한 이벤트에 참여하여 CGV를 더욱 풍성하게 이용하세요!</p>
        </div>
        <CurrentEvent />
        <LastEvent />
      </div>
    </section>
  )
}

export default MainEvent;