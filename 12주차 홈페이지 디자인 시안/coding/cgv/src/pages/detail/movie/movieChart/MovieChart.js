import './MovieChart.scss';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MovieChart = ({ data, deletePatch }) => {
  useEffect(() => {
    return () => {
      deletePatch()
    }
  }, []);

  return (
    <section className="movie_chart">
      <div className="chart_box">
        <div className="title_box">
          {console.log(data)}
          <h3>
            무비차트
          </h3>
          <p>
            현재 상영 중인 영화들을 찾아보세요
          </p>
        </div>
        <div className="movie_set">
          {data.length > 1 ?
            data.map((it, idx) => {
              return (
                <div className="movie">
                  <div className="img_box">
                    <img src={it.image} alt="cgv" />
                  </div>
                  <strong>{it.title.replace(/<[^>]*>?/g, '')}</strong>
                  <Link to="/" className="btn">예매하기</Link>
                </div>
              )
            }) :
            false
          }
        </div>
      </div>
    </section>
  )
}

export default MovieChart;