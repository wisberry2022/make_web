import './Introduce.scss';
import Table from './Table';
import { Link } from 'react-router-dom';

const Introduce = () => {
  const theaterList = [
    { id: 1, title: 'CGV 강남점', tableData: ['서울특별시 강남구 역삼동 814-6 스타플렉스', '1544-1122', '6관 / 874석'] },
    { id: 2, title: 'CGV 센텀시티점', tableData: ['부산광역시 해운대구 우동 1495번지 신세계센텀시티 7층', '1544-1122', '10관 / 2,152석'] },
    { id: 3, title: 'CGV 용산아이파크몰', tableData: ['서울특별시 용산구 한강로 3가 40-999 HDC아이파크몰 6층', '1544-1122', '20관 / 3,893석'] },
  ]

  return (
    <section className="theater_intro">
      <div className="container">
        <div className="title_box">
          <h3>CGV 극장 소개</h3>
          <p>
            오직 CGV 극장에서만 느낄 수 있는 체험
          </p>
        </div>
        <div className="intro_box">
          {theaterList.map((it, idx) => {
            return (
              <div className="theater" key={it.id}>
                <figure className={`bg_set itm0${it.id}`}></figure>
                <h4>{it.title}</h4>
                <div className="info_box">
                  <Table tableData={it.tableData} />
                  <div className="btn_box">
                    <Link to="#" className="btn left">예매하기</Link>
                    <Link to="#" className="btn right">극장정보</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Introduce;