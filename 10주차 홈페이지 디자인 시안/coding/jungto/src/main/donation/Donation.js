import './Donation.scss';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h4>후원하기</h4>
      <form action="#!" method="GET">
        <div className = "name_ip">
          <label for="name">이름</label>
          <input type="text" id = "name" placeholder = "성함을 입력하세요" />
        </div>
        <div className="email_ip">
          <label for = "email">이메일</label>
          <input type="email" id = "email" placeholder = "이메일을 입력하세요" />
        </div>
        <div className="hp_ip">
          <label for = "phone">전화번호</label>
          <input type="text" id = "phone" placeholder = "전화번호를 입력하세요" />
        </div>
        <div className="check_box">
          정기후원<input type="radio" name = "donate" />
          일시후원<input type="radio" name = "donate" />
        </div>
        <div className="btn_box">
          <button type = "submit">제출하기</button>
          <button type = "button">후원현황</button>
        </div>
        
        </form>
        </div>
  )
}

const Contents = () => {
  return (
    <div className = "contents">
      <div className="container">
        <Subscribe/>
        <div className="right_box">
        </div>
      </div>
      
    </div>
  )
}

const Donation = () => {
  return (
    <section className="donation">
      <div className="title_box">
        <h3>
          정토회 후원
        </h3>
        <p>
          정토회는 도움을 필요로 하는 사람들을 지나치지 않습니다
        </p>
      </div>
      <Contents />

      
    </section>
  )
}

export default Donation;