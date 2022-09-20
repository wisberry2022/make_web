import './Notice.scss';
import Table from './Table';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const MetroNotice = () => {
  const table_data = [{ thead: ['번호', '제목', '등록자', '등록일'] }]
  return (
    <div className="metro_notice">
      <Table data={table_data} />
    </div>
  )
}

const MetroNews = () => {
  return (
    <div className="metro_news">
      2
    </div>
  )
}

const MetroData = () => {
  return (
    <div className="metro_data">
      3
    </div>
  )
}

const MetroCulture = () => {
  return (
    <div className="metro_culture">
      4
    </div>
  )
}



const Notice = () => {
  const [cnum, setNum] = useState(1);
  const TabList = [
    { id: 1, title: '공지사항', link: '/' },
    { id: 2, title: '보도자료', link: '/' },
    { id: 3, title: '자료실', link: '/' },
    { id: 4, title: '문화행사', link: '/' },
  ];

  const ComponentSet = [<MetroNotice />, <MetroNews />, <MetroData />, <MetroCulture />];

  return (
    <section className="notice">
      <div className="container">
        <div className="title_box">
          <h3>부산교통공사의 알찬소식!</h3>
          <p>
            부산교통공사의 다양한 소식을 접할 수 있습니다
          </p>
        </div>
        <ul className="notice_list">
          {TabList.map((it, idx) => {
            return (
              <li key={idx} onClick={() => (setNum(idx))} className={idx === cnum ? 'on' : ''}>
                <NavLink to={it.link}>{it.title}</NavLink>
              </li>
            )
          })}
        </ul>
        {ComponentSet[cnum]}
      </div>
    </section>
  )
}

export default Notice;