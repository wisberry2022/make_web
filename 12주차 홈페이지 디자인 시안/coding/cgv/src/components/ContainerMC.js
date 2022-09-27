import MovieChart from "../pages/detail/movie/movieChart/MovieChart";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData } from '../store/modules/moviecharts'
import { useEffect } from 'react';

const ContainerMC = () => {
  const key = '30272d24c992f238a595ec8a2f5064b2';
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json';
  const date = new Date();
  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const Day = date.getDate() - 7;
  const movieData = useSelector(state => state.movieReducer);

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
  const dispatch = useDispatch();
  const deletePatch = () => (dispatch(deleteData()))

  const nameToImage = (movieName) => {
    axios.get('/setImage', {
      params: {
        name: movieName
      }
    })
      .then((res) => (dispatch(addData(res.data.items[0].title, res.data.items[0].image))))
  }

  useEffect(() => {
    axios.get(url + `?key=${key}&targetDt=${targetDt}&weekGb=0`)
      .then((res) => (res.data.boxOfficeResult.weeklyBoxOfficeList))
      .then((res) => (res.map((it, idx) => (nameToImage(it.movieNm)))))
  }, [targetDt]);

  return (
    <>
      <MovieChart data={movieData.data} deletePatch={deletePatch} />
    </>
  )
}

export default ContainerMC;