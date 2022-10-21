import MovieChart from "../pages/detail/movie/movieChart/MovieChart";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData } from '../store/modules/moviecharts'
import { useEffect } from 'react';

const ContainerMC = () => {
  const key = '30272d24c992f238a595ec8a2f5064b2';
  const url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json';
  const date = new Date();
  const movieData = useSelector(state => state.movieReducer);

  const dayToFormat = (source) => {
    const Year = source.getFullYear();
    const Month = String(source.getMonth() + 1).padStart(2, '0');
    const Date = String(source.getDate()).padStart(2, '0');

    return [Year, Month, Date].join('');
  }

  const targetDt = dayToFormat(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7));

  console.log('daytoFormat', targetDt)

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