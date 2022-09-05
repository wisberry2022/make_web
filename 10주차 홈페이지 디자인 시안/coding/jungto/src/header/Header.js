import './Header.scss'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";


const TopInfo = () => {
  return (
    <div className="top_info">
      <div className="list_box">
        <ul className="left_info">
          <Link to="/login" className="box">회원가입</Link>
          <Link to="/sitemap" className="box">사이트맵</Link>
        </ul>
        <ul className="right_info">
          <Link to="/eng" className="box">ENG</Link>
          <Link to="/" className="box">HOME</Link>
        </ul>
      </div>
    </div>
  )
}

const GNB = () => {
  return (
    <nav className="gnb">
      <div className="top_menu">
        <ul className="main_menu">
          <Link to="/mm_intro"><li>소개</li></Link>
          <Link to="/mm_college"><li>정토불교대학</li></Link>
          <Link to="/mm_train"><li>수련원</li></Link>
          <Link to="/mm_practice"><li>수행과 실천</li></Link>
          <Link to="/mm_budd"><li>법륜스님</li></Link>
        </ul>
        <div className="side_menu">
          <li><i className="xi-search"></i></li>
          <li><i className="xi-message-o"></i></li>
          <li><i className="xi-bars"></i></li>
        </div>
      </div>
    </nav>
  )
}

const SubInfo = () => {
  return (
    <ul className="sub_info">
      <li className="college">
        <strong>
          정토불교대학
        </strong>
        <p>
          삶을 바꾸는 공부
        </p>
        <Link to="/" class="btn">입학신청</Link>
        <figure className="bg_set icon01"></figure>
      </li>
      <li className="jts">
        <strong>
          JTS
        </strong>
        <p>
          세상을 위한 작은 움직임
        </p>
        <Link to="/" class="btn">봉사신청</Link>
        <figure className="bg_set icon02"></figure>
      </li>
      <li className="sns">
        <strong>
          즉문즉설
        </strong>
        <p>
          행복을 찾는 질문
        </p>
        <Link to="/" class="btn">청강신청</Link>
        <figure className="bg_set icon03"></figure>
      </li>
    </ul>
  );
}

const MainVisual = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false
  };
  return (
    <div className="main_visual">
      <Slider {...settings}>
        <figure className="bg_set itm01">
          <div className="slogan_box">
            <h2>
              내 안에서 행복을 찾는 방법<br />
              법륜스님의 즉문즉설
            </h2>
            <p>내 안에 있는 행복을 찾을 수 있습니다</p>
            <Link to="/" class="btn">더 보기</Link>
          </div>
        </figure>
        <figure className="bg_set itm02">
          <div className="slogan_box">
            <h2>
              법륜스님과 함께하는 하계 템플스테이
            </h2>
            <p>한 달 동안 사찰 생활을 체험할 수 있습니다</p>
            <Link to="/" class="btn">더 보기</Link>
          </div>
        </figure>
        <figure className="bg_set itm03">
          <div className="slogan_box">
            <h2>
              온라인 한가위 명상
            </h2>
            <p>지금, 여기, 오직 나에게 오롯이 깨어있기</p>
            <Link to="/" class="btn">더 보기</Link>
          </div>
        </figure>
      </Slider>
      <SubInfo />
    </div>
  )
}

const Header = () => {
  return (
    <>
      <TopInfo />
      <header className="header">
        <h1>
          <Link to="/">
            <img src="./logo.png" alt="hello" />
          </Link>
        </h1>
        <GNB />
        <MainVisual />
      </header>
    </>

  )
}

export default Header;