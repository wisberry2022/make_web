import './Event.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Table from './Table.js';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

const Right = ({ title, sub_title, desc, info }) => {
  return (
    <div className="right">
      <div className="info_title_box">
        <h4>{title}</h4>
        <strong>{sub_title}</strong>
        <p>{desc}</p>
      </div>
      {info.map((itm, num) => {
        return (
          <div className="info_bottom_box" key={num}>
            <Table period={itm.sup_date} target={itm.target} pop={itm.pop} announce={itm.result} />
            <Link to="/" className="btn">이벤트 응모하기</Link>
            <ul className="check_list">
              {itm.check.map((atm, cnt) => {
                return (
                  <li key={cnt}>{atm}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

const EventBox = () => {
  const eventData = [
    {
      id: 1, h3: '소믈리에', strong: '와인의 전설', p: '결코 깨어지지 않는 와인의 마법에 당신을 초대합니다', desc: [
        { idx: 1, sup_date: ' 09.25 - 10.05', target: '부산 시민 누구나', pop: '10명', result: '10월 9일', check: ['신청 시 이름, 연락처 등을 정확하게 기입해주시기 바랍니다', '당첨결과는 해당 일자에 당첨인원에게 개별적으로 공지합니다'] }
      ]
    },
    {
      id: 2, h3: '갤럭시 일루전 쇼', strong: 'GALAXY ILLUSION SHOW', p: '우리는 우주로부터 시작했다', desc: [
        { idx: 1, sup_date: ' 09.29 - 10.12', target: '부산 시민 누구나', pop: '5명', result: '10월 13일', check: ['신청 시 이름, 연락처 등을 정확하게 기입해주시기 바랍니다', '당첨결과는 해당 일자에 당첨인원에게 개별적으로 공지합니다'] }
      ]
    },
    {
      id: 3, h3: 'My Own Ritual', strong: '새로운 시대의 새로운 미술', p: '새로운 시대의 미술을 체험해보세요', desc: [
        { idx: 1, sup_date: ' 10.03 - 10.20', target: '부산 시민 누구나', pop: '8명', result: '10월 25일', check: ['신청 시 이름, 연락처 등을 정확하게 기입해주시기 바랍니다', '당첨결과는 해당 일자에 당첨인원에게 개별적으로 공지합니다'] }
      ]
    }
  ];

  const [swiper, setSwiper] = useState(null);
  const [idx, setIdx] = useState(1);
  return (
    <div className="event_box">
      <strong className="num_set">{idx} / <span className="end_num">3</span></strong>
      <i className="xi-angle-left l_angle" onClick={() => (swiper.slidePrev())}></i>
      <Swiper
        slidesPerView={1}
        onInit={(e) => (setSwiper(e))}
        onSlideChange={(e) => (setIdx(e.activeIndex + 1))}
        className="swiper_box"
      >
        {eventData.map((it, idx) => {
          return (
            <SwiperSlide className="swiper_slide" key={idx} >
              <figure className={`bg_set itm0${idx + 1} left`}></figure>
              <Right title={it.h3} sub_title={it.strong} desc={it.p} info={it.desc} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <i className="xi-angle-right r_angle" onClick={() => (swiper.slideNext())}></i>
    </div >
  )
}

const Event = () => {
  return (
    <section className="event">
      <div className="container">
        <div className="title_box">
          <h3>Event With Humetro</h3>
          <p>부산교통공사와 함께하는 이벤트!</p>
        </div>
        <EventBox />
      </div>
    </section>
  )
}

export default Event;