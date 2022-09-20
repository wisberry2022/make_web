import './TimeTable.scss'
import Table from './Table';
import { useState } from 'react';

const TopBox = ({ date }) => {
  return (
    <>
      <strong>시간 및 요일 설정</strong>
      <div className="top_box">
        <select name="date_type" id="date" className="date_type">
          {date.map((el, idx) => {
            return (
              <option value={el.id} key={idx}>&nbsp; {el.title}</option>
            )
          })}
        </select>
        <select name="hour_type" id="hour_data" className="hour_type">
          <option value="hour">&nbsp; 시간</option>
          {Array.from(Array(12).keys()).map((it, idx) => {
            return (
              it += 1,
              <option value={idx + 1} key={idx}>&nbsp; {it}</option>
            )
          })}
        </select>
        <select name="minute_type" id="miunte_data" className="minute_type">
          <option value="minute">&nbsp; 분</option>
          {Array.from(Array(60).keys()).map((it, idx) => {
            return (
              <option value={idx} key={idx}>&nbsp; {it}</option>
            )
          })}
        </select>
      </div>
    </>
  )
}

const BottomBox = ({ line, direction, station }) => {
  const [wayLine, setLine] = useState(1);

  return (
    <>
      <strong>노선 및 방향 설정</strong>
      <div className="bottom_box">
        <select name="line_type" id="line_data" className="line_type" onChange={
          (e) => (setLine(e.target.value))
        }>
          {line.map((it, idx) => {
            return (
              <option value={it.id} key={idx}>&nbsp; {it.title}</option>
            )
          })}
        </select>
        <select name="direction_type" id="direction_data" className="direction_type">
          {direction[wayLine].directionSet.map((it, idx) => {
            return (
              <option value={it.id} key={idx}>&nbsp; {it.title}</option>
            )
          })}
        </select>
        <select name="station_type" id="station_data" className="station_type">
          <option value="title">&nbsp; 역명</option>
          {station[wayLine].stationSet.map((it, idx) => {
            return (
              <option value={it.code}>&nbsp; {it.name}</option>
            )
          })}
        </select>
      </div>
    </>
  )
}

const SearchForm = ({ date, direction, line, station }) => {
  return (
    <div className="search_box">
      <div className="left">
        <TopBox date={date} />
        <BottomBox line={line} direction={direction} station={station} />
      </div>
      <div className="right">
        <Table />
      </div>
    </div>
  )
}

const TimeTable = ({ station }) => {
  const dateData = [
    { id: 0, title: '요일구분' },
    { id: 1, title: '평일' },
    { id: 2, title: '토요일' },
    { id: 3, title: '일요일' }
  ];

  const directionData = [
    { id: 0, directionSet: [] },
    { id: 1, directionSet: [{ id: 2, title: '운행방향' }, { id: 0, title: '노포동 방면' }, { id: 1, title: '다대포해수욕장 방면' }] },
    { id: 2, directionSet: [{ id: 2, title: '운행방향' }, { id: 0, title: '양산 방면' }, { id: 1, title: '장산 방면' }] },
    { id: 3, directionSet: [{ id: 2, title: '운행방향' }, { id: 0, title: '대저 방면' }, { id: 1, title: '수영 방면' }] },
    { id: 4, directionSet: [{ id: 2, title: '운행방향' }, { id: 0, title: '안평 방면' }, { id: 1, title: '미남 방면' }] },

  ];

  const lineData = [
    { id: 0, title: '호선구분' },
    { id: 1, title: '1호선' },
    { id: 2, title: '2호선' },
    { id: 3, title: '3호선' },
    { id: 4, title: '4호선' }
  ]



  return (
    <section className="time_table">
      <div className="container">
        <div className="title_box">
          <h3>
            열차시각표 조회
          </h3>
          <p>
            부산도시철도의 모든 노선도의 시각표를 조회할 수 있습니다
          </p>
        </div>
        <SearchForm date={dateData} direction={directionData} line={lineData} station={station} />
      </div>
    </section>
  )
}

export default TimeTable;