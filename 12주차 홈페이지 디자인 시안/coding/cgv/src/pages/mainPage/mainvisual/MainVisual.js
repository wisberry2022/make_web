import { Link } from 'react-router-dom';
import './MainVisual.scss';

const MainVisual = () => {
  const movieList = [
    { id: 1, title: '아바타 리마스터링', ticket_rate: '24.7%' },
    { id: 2, title: '정직한 후보2', ticket_rate: '23.4%' },
    { id: 3, title: '인생은 아름다워', ticket_rate: '17.9%' },
    { id: 4, title: '공조2 - 인터내셔날', ticket_rate: '9.3%' },
    { id: 5, title: '늑대사냥', ticket_rate: '6.4%' }
  ]

  return (
    <div className="main_visual bg_set">
      <div className="container">
        <div className="slogan_box">
          <h2>10월 1주차 CGV 박스오피스</h2>
          <p>지금 개봉한 영화들을 살펴보세요</p>
        </div>
        <div className="box_office_set">
          {movieList.map((it, idx) => {
            return (
              <div className="movie_set" key={it.id}>
                <Link to="/">
                  <figure className={`bg_set itm0${idx + 1}`}></figure>
                </Link>
                <div className="info_set">
                  <strong>{it.title}</strong>
                  <span>예매율: {it.ticket_rate}</span>
                </div>
                <div className="btn_box">
                  <button className="btn">
                    예매하기
                  </button>
                  <button className="btn">
                    영화정보
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainVisual;