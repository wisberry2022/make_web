import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import './Region.scss';

const Region = () => {
  const [num, setNum] = useState(0);
  const regionList = useSelector(state => state.subRegionReducer);
  const mainRegionList = useSelector(state => state.mainRegionReducer);

  return (
    <section className="region_theater">
      <div className="container">
        <div className="title_box">
          <h3>CGV 극장</h3>
          <p>전국에 있는 CGV 극장을 둘러보세요</p>
        </div>
        <div className="theater_location">
          <ul className="main_category">
            {mainRegionList.map((it, idx) => {
              return (
                <li key={it.id} onClick={() => (setNum(idx))}>
                  <Link to="#">{it.title}</Link>
                </li>
              )
            })}
          </ul>
          <div className="sub_category">
            <ul className="sub_list">
              {regionList[num].title.map((its, id) => {
                return (
                  <li key={id}>
                    <Link to="#">{its}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Region;