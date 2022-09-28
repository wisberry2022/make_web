import './Reservation.scss';
import { useSelector } from "react-redux/es/exports";
import { useState } from 'react';


const UnClickMonitor = () => {
  return (
    <div className="unclick">
      <p>영화 혹은 지역을 먼저 선택해주세요!</p>
    </div>
  )
}

const MovieBox = ({ boolSet, setBool }) => {
  const data = useSelector(state => state.boxofficeReducer);
  return (
    <div className="movie_box common">
      <h4>영화</h4>
      <ul className="movie_list">
        {data.map((it, idx) => {
          return (
            <li key={idx} onClick={() => (setBool([true, false]))}>
              {it}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const RegionBox = ({ boolSet, setBool }) => {
  const [num, setNum] = useState(0);
  const subRegionList = useSelector(state => state.subRegionReducer);
  const mainRegionList = useSelector(state => state.mainRegionReducer);

  return (
    <div className="region_box common">
      <h4>지역</h4>
      {boolSet[0] ?
        <div className="region_select">
          <ul className="main_region">
            {mainRegionList.map((it, idx) => {
              return (
                <li key={it.id} onClick={() => (setNum(idx))}>{it.title}</li>
              )
            })}
          </ul>
          <ul className="sub_region">
            {subRegionList[num].title.map((its, id) => {
              return (
                <li key={id} onClick={() => (setBool([true, true]))}>{its}</li>
              )
            })}
          </ul>
        </div>
        :
        <UnClickMonitor />}
    </div>
  )
}


const TimeBox = ({ boolSet, setBool }) => {
  const hourList = Array.from({ length: 24 }, (v, i) => i + 1);
  const minuteList = Array.from({ length: 24 }, (v, k) => ({
    id: k + 1,
    minute: Array.from({ length: Math.floor(Math.random() * 10) }, (v, k) => Math.round(Math.floor(Math.random() * 60))).sort((a, b) => { return a - b })
  }))

  return (
    <div className="time_box common">
      {console.log(minuteList)}
      <h4>시간</h4>
      {boolSet[1] ?
        <ul className="time_list">
          {hourList.map((it, idx) => {
            return (
              <li key={it}>
                <strong>{it}시</strong>
                <ul className="minute_list">
                  {minuteList[idx].minute.map((its, idx) => {
                    return (
                      <li key={idx}>{it}:{its}</li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
        :
        <UnClickMonitor />}

    </div>
  )
}

const Reservation = () => {
  const [boolSet, setBool] = useState([false, false]);

  return (
    <section className="reservation">
      <div className="container">
        <div className="title_box">
          <h3>예매하기</h3>
          <p>보고 싶은 영화가 있나요? 여기서 예매하세요!</p>
        </div>
        <div className="reserve_box">
          <div className="box_title">
            <h4>Ticketing Box</h4>
          </div>
          <div className="date_box common">
            <h4>날짜</h4>
            <ul className="date_list"></ul>
          </div>
          <MovieBox boolSet={boolSet} setBool={setBool} />
          <RegionBox boolSet={boolSet} setBool={setBool} />
          <TimeBox boolSet={boolSet} setBool={setBool} />
        </div>
      </div>
    </section>
  )
}

export default Reservation;