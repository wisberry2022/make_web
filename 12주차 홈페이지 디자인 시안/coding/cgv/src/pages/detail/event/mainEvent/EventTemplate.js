import { Link } from 'react-router-dom';

const Table = ({ eventData }) => {
  const theadList = ['이벤트기간', '지원방법', '상품', '당첨발표', '지급방법'];
  const tbodyData = Object.values(eventData).slice(2, 7);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4">event_table</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: Object.keys(eventData).length - 2 }, (v, k) => k + 1).map(it => {
          return (
            <tr key={it}>
              <td className="title">{theadList[it - 1]}</td>
              <td className="contents">{tbodyData[it - 1]}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
// 동적 컴포넌트(더 보기 버튼 클릭 시 EventTemplate 컴포넌트 새롭게 생성)
const EventTemplate = ({ eventData }) => {
  return (
    <li className="event_box">
      <figure className={`bg_set event0${eventData.id}`}></figure>
      <div className="event_desc">
        <h5>{eventData.name}</h5>
        <Table eventData={eventData} />
        <Link to="#" className="btn">이벤트 자세히 보기</Link>
      </div>
    </li>
  )
}

export default EventTemplate;