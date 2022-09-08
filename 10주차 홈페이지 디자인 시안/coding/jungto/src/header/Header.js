import './Header.scss'
import { Link, Outlet } from 'react-router-dom';

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
          <Link to="/sangha"><li>법륜스님</li></Link>
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

const Header = () => {
  return (
    <header className="header">
      <TopInfo />
      <h1>
        <Link to="/">
          <img src="./logo.png" alt="hello" />
        </Link>
      </h1>
      <GNB />
      <Outlet />
    </header>

  )
}

export default Header;