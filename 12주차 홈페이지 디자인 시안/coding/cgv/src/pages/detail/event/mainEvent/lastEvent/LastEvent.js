import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EventTemplate from '../EventTemplate';
import './LastEvent.scss';

const LastEvent = () => {
  const [num, setNum] = useState(0);
  const eventData = useSelector(state => state.lastEventReducer);

  return (
    <div className="last_event">
      <div className="intro_box">
        <h4>지난 이벤트</h4>
        <Link to="#" className="btn">전체 이벤트 보기</Link>
      </div>
      <ul className="event_list">
        {Array.from({ length: (num < 6 ? 3 + num : eventData.length) }, (v, k) => k + 1).map((it, idx) => {
          return (
            <EventTemplate eventData={eventData[it - 1]} key={it} />
          )
        })}
      </ul>
      <button type="button" className="more" onClick={() => (setNum(num + 1))}>더 보기</button>
    </div>
  )
}

export default LastEvent;