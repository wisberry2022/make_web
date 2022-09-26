import { useEffect, useState } from "react";
import axios from 'axios';

const MovieChart = () => {
  const key = '30272d24c992f238a595ec8a2f5064b2';
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json';
  const date = new Date();
  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const Day = date.getDate() - 7;
  const [data, setData] = useState();

  const dayToFormat = (Year, Month, Day) => {
    let sMonth = Month.toString();
    let sDay = Day.toString();
    if (sMonth.length < 2) {
      let result = Array.from(sMonth);
      result.unshift('0');
      sMonth = result.join('');
    } else if (sDay.length < 2) {
      let result = Array.from(sDay);
      result.unshift('0');
      sDay = result.join('');
    }
    return Year + sMonth + sDay;
  }

  const targetDt = dayToFormat(Year, Month, Day);

  useEffect(() => {
    axios.get(url + `?key=${key}&targetDt=${targetDt}&weekGb=0`)
      .then((res) => (setData(res.data.boxOfficeResult.weeklyBoxOfficeList)))
  }, [targetDt]);

  return (
    <section className="movie_chart">
      <div className="title_box">
        {console.log(data)}
        <h3>
          무비차트
        </h3>
        <p>
          현재 상영 중인 영화들을 찾아보세요
        </p>
      </div>
    </section>
  )
}

export default MovieChart;