import './Footer.scss';
import { Link } from 'react-router-dom';

const TopFooter = () => {
  const footerBar = [
    { id: 1, title: '개인정보처리방침', link: '/' },
    { id: 2, title: '여객운송약관', link: '/' },
    { id: 3, title: '전화번호안내', link: '/' },
    { id: 4, title: '찾아오시는길', link: '/' },
  ]
  return (
    <div className="top_footer">
      <div className="container">
        <ul className="tf_bar">
          {footerBar.map((it, idx) => {
            return (
              <li key={idx}>
                <Link to={it.link}>
                  {it.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const BottomFooter = () => {
  const relatedSite = [
    { id: 1, site: '부산광역시청', link: '/' },
    { id: 2, site: '부산지방공단스포원', link: '/' },
    { id: 3, site: '부산환경공단', link: '/' },
    { id: 4, site: '한국철도공사', link: '/' },
    { id: 5, site: '부산김해경전철(주)', link: '/' },
    { id: 6, site: '부산관광공사', link: '/' },
  ]
  return (
    <div className="bottom_footer">
      <div className="container">
        <div className="left">
          <h2>
            <Link to="/">
              <img src="./footer_logo.png" alt="humetro" />
            </Link>
          </h2>
          <div className="address">
            <strong>(47353) 부산광역시 부산진구 중앙대로 644번길 20 (범천동)</strong>
            <Link to="/">대표전화 : 1544-5005</Link>
          </div>
          <p>본 홈페이지에 게시된 이메일 주소 자동수집을 거부하며, 이를 위반 시 정보통신법에 의해 처벌됨을 유념하시기 바랍니다.</p>
          <em>&copy; 2015 Busan Transportation Corporation. All Rights Reserved.</em>
        </div>
        <div className="right">
          <strong>유관기관</strong>
          <select name="related" id="related_site" className="related">
            {relatedSite.map((it, idx) => {
              return (
                <option value="test">{it.site}</option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <TopFooter />
      <BottomFooter />
    </footer>
  )
}

export default Footer;