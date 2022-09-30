import './CurrentEvent.scss';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import EventTemplate from '../EventTemplate';

const CurrentEvent = () => {
  const [num, setNum] = useState(0);
  const eventData = useSelector(state => state.currentEventReducer);

  return (
    <div className="current_event">
      <div className="intro_box">
        <h4>현재 진행 중인 이벤트</h4>
        <Link to="#" className="btn">전체 이벤트 보기</Link>
      </div>
      <ul className="event_list">
        {Array.from({ length: (num < 7 ? 3 + num : eventData.length) }, (v, k) => k + 1).map((it, idx) => {
          return (
            <EventTemplate eventData={eventData[it - 1]} key={it} />
          )
        })}
      </ul>
      <button type="button" className="more" onClick={() => (setNum(num + 1))}>더 보기</button>
    </div>
  )
}

export default CurrentEvent;