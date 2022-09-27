import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData, initializeData } from '../../../../store/modules/moviesearch';
import axios from 'axios';
import Result from './Result.js';
import './MovieSearch.scss';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [movieName, keepName] = useState(0);

  useEffect(() => {
    return () => (dispatch(initializeData()))
  }, [])

  const searchTarget = useRef();
  const storeData = useSelector(state => state.movieSearchReducer);

  const getData = (movieName) => {
    axios.get('/search', {
      params: {
        name: movieName
      }
    })
      .then((res) => { dispatch(updateData(res.data.items)); })
  }

  const submitHandling = (e) => {
    e.preventDefault();
    getData(searchTarget.current.value);
  }

  return (
    <>
      <div className="search_box">
        <form className="form_box" onSubmit={(e) => (submitHandling(e))}>
          <input type="text" placeholder="영화 이름을 검색하세요!" ref={searchTarget} />
          <button type="submit" onClick={() => (keepName(searchTarget.current.value))}><i className="xi-search"></i></button>
        </form>
      </div>
      {/* {console.log(`storeData:`, storeData)} */}
      {movieName !== 0 ? <Result resultData={storeData} searchTarget={movieName} /> : ''}
    </>
  )
}

const MovieSearch = () => {
  return (
    <section className="movie_search">
      <div className="title_box">
        <h3>CGV 영화 검색</h3>
        <p>원하는 영화의 정보를 검색해보세요!</p>
      </div>
      <SearchBox />
    </section>
  )
}

export default MovieSearch;