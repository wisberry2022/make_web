import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const menuList = [
    { id: 1, title: '영화', link: '/movie' },
    { id: 2, title: '극장', link: '/theater' },
    { id: 3, title: '예매', link: '/ticketing' },
    { id: 4, title: '스토어', link: '/' },
    { id: 5, title: '이벤트', link: '/' },
    { id: 6, title: '혜택', link: '/' },
  ]

  const sideList = [
    { id: 1, icon: 'xi-search', link: '/' },
    { id: 2, icon: 'xi-log-in', link: '/' },
    { id: 3, icon: 'xi-movie', link: '/' },
  ]

  return (
    <header className="header">
      <h1>
        <NavLink to="/">
          <img src='./cgv_logo.png' alt="cgv" />
        </NavLink>
      </h1>
      <nav className="gnb">
        <ul className="main_menu">
          {menuList.map((it) => {
            return (
              <li key={it.id}>
                <NavLink to={it.link}>
                  {it.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <ul className="side_menu">
          {sideList.map((it) => {
            return (
              <li key={it.id}>
                <i className={it.icon}></i>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header;