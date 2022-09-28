import Header from './header/Header';
import MainVisual from './mainvisual/MainVisual';
import Footer from './footer/Footer';
import './Common.css';
import './Basic.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addmovieName } from '../../store/modules/boxofficelist';
import axios from 'axios';

const MainPage = () => {
  const key = '30272d24c992f238a595ec8a2f5064b2';
  const url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json';
  const date = new Date();
  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const Day = date.getDate() - 7;
  const dispatch = useDispatch();

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

  const dataToRedux = (jsonData) => {
    jsonData.map((it, idx) => (dispatch(addmovieName(it.movieNm))))
  }

  const targetDt = dayToFormat(Year, Month, Day);

  useEffect(() => {
    axios.get(url + `?key=${key}&targetDt=${targetDt}&weekGb=0`)
      .then((res) => (dataToRedux(res.data.boxOfficeResult.weeklyBoxOfficeList)))
  }, [])

  return (
    <>
      <Header />
      <MainVisual />
      <Footer />
    </>
  )
}

export default MainPage;