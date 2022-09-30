import { useState } from 'react';
import './Template.scss';


const PromotionTemplate = ({ storeData }) => {
  const [num, setNum] = useState();
  return (
    <div className="container">
      <ul className={`promotion_list ${storeData.type}`}>
        {storeData.item.map((it, id) => {
          return (
            <li key={it.id}>
              <div className='promotion_box'>
                <figure className={`bg_set prm0${it.id}`}></figure>
                <h5 className="name">{it.name}</h5>
                <strong className="desc">{it.desc}</strong>
                <div className="purchase_box">
                  <span className="price">{it.price}</span>
                  <div className="icon_box">
                    {Array.from({ length: 3 }, (v, k) => k + 1).map((it, idx) => {
                      return (
                        // storeData.item[id]를 사용하면 버튼을 눌렀을 때 해당 상품을 고르게 할 수 있음
                        <figure className={`bg_set icon0${it}`} key={it}></figure>
                      )
                    })}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PromotionTemplate;