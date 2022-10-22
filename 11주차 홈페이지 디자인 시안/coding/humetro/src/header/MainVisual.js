import { Link } from 'react-router-dom';
import './MainVisual.scss';

const GuideBox = ({ data }) => {
  return (
    <div className="cs_grid">
      {data.map((el, idx) => {
        return (
          <Link to={el.link} key={el.id} className="grid_son">
            <img src={`./icons_0${el.id}.png`} alt="humetro" />
            <strong>
              {el.title}
            </strong>
          </Link>

        )
      })}
    </div>
  )
}

const MainVisual = () => {
  const gridData = [
    { id: 1, title: '고객의 소리', link: '/' },
    { id: 2, title: '역정보', link: '/' },
    { id: 3, title: '단체승차권', link: '/' },
    { id: 4, title: '유실물센터', link: '/' },
    { id: 5, title: '열차시각표', link: '/' },
    { id: 6, title: '운임안내', link: '/' },
    { id: 7, title: '체험학습', link: '/' },
    { id: 8, title: '청소년 자원봉사활동', link: '/' },
  ];

  return (
    <div className="main_visual bg_set">
      <div className="container">
        <div className="slogan_box">
          <h2>행복한 부산도시철도</h2>
          <p>
            부산 시민을 위한 편리한 생활공간<br />
            절대 안전·시민 행복·대중교통의 중심
          </p>
        </div>
        <div className="guide_box">
          <GuideBox data={gridData} />
        </div>
      </div>
    </div>
  )
}

export default MainVisual;