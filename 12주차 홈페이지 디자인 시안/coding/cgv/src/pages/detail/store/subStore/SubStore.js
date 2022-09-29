import './SubStore.scss';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import PromotionTemplate from './PromotionTemplate';

const SubStore = () => {
  const navRef = useRef();
  const onSticky = () => {
    if (window.scrollY >= navRef.current.offsetTop) {
      navRef.current.style.position = 'sticky';
      navRef.current.style.top = '0';
      navRef.current.style.backgroundColor = '#fff';
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onSticky);
    return () => {
      window.removeEventListener('scroll', onSticky);
    }
  }, [])
  const storeList = useSelector(state => state.storeReducer);
  const [num, setNum] = useState(0)
  return (
    <section className="sub_store">
      <div className="nav_box" ref={navRef}>
        <div className="container">
          <ul className="main_list">
            {storeList.map((it, idx) => {
              return (
                <li key={it.id} className={num === idx ? 'on' : ''} onClick={() => (setNum(idx))}>{it.title}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <PromotionTemplate storeData={storeList[num]} />
    </section>
  )
}

export default SubStore;