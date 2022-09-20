import { Link } from 'react-router-dom';
import './Header.scss';
import MainVisual from './MainVisual';

const OnTopHeader = ({ list }) => {
  return (
    <div className="onTopHeader">
      <div className="container">
        <ul className="top_list">
          {list.map((el, idx) => {
            return (
              <li key={el.id}>
                <Link to={el.link}>
                  {el.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const Header = () => {
  const topMenu = [
    { id: 1, title: '메인으로', link: '/' },
    { id: 2, title: '회원가입', link: '/' },
    { id: 3, title: '로그인', link: '/' }
  ]

  const mainMenu = [
    { id: 1, title: '이용안내', link: '/' },
    { id: 2, title: '고객참여', link: '/' },
    { id: 3, title: '문화관광', link: '/' },
    { id: 4, title: '정보공개', link: '/' },
    { id: 5, title: '안전/건설/기술', link: '/' },
    { id: 6, title: '공사소개', link: '/' },
  ]

  return (
    <>
      <OnTopHeader list={topMenu} />
      <header className="header">
        <div className="container">
          <nav className="gnb">
            <h1>
              <Link to="/">
                <img src="./logo.png" alt="humetro" />
              </Link>
            </h1>
            <ul className="main_menu">
              {mainMenu.map((el, idx) => {
                return (
                  <li key={el.id}>
                    <Link to={el.link}>
                      {el.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <MainVisual />
      </header>
    </>
  )
}

export default Header;