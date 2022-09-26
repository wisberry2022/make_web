import { Link } from 'react-router-dom';
import './Footer.scss';

const TopFooter = () => {
  const footerList = [
    { id: 1, title: '회사소개', link: '/' },
    { id: 2, title: '인재채용', link: '/' },
    { id: 3, title: '사회공헌', link: '/' },
    { id: 4, title: '제휴/광고/부대사업문의', link: '/' },
    { id: 5, title: '이용약관', link: '/' },
    { id: 6, title: '위치기반서비스 이용약관', link: '/' },
    { id: 7, title: '개인정보처리방침', link: '/' },
    { id: 8, title: '윤리경영', link: '/' },
    { id: 9, title: 'IR', link: '/' },
    { id: 10, title: '편성기준', link: '/' },
    { id: 11, title: '법적고지', link: '/' },
    { id: 12, title: '이메일주소 무단수집거부', link: '/' },
    { id: 13, title: '사이버감사실', link: '/' }
  ]
  return (
    <div className="tf">
      <ul className="tf_list">
        {footerList.map((it) => {
          return (
            <li key={it.id}>
              <Link to={it.link}>
                {it.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Left = ({ footerList }) => {
  return (
    <div className="left">
      <h2>
        <Link to="/">
          <img src="./cgv_logo.png" alt="cgv" />
        </Link>
      </h2>
      <ul className="bf_list">
        {footerList.map((it, idx) => {
          return (
            <li key={it.id}>
              {it.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Right = ({ snsList }) => {
  const selectList = [
    { id: 0, site: '계열사 바로가기' },
    { id: 1, site: 'CJ 제일제당' },
    { id: 2, site: 'CJ 푸드빌' },
    { id: 3, site: 'CJ 프레시웨이' },
    { id: 4, site: 'CJ 대한통운' },
    { id: 5, site: 'CJ 대한통운 건설부문' },
  ]
  return (
    <div className="right">
      <strong>CGV SNS</strong>
      <ul className="sns_list">
        {snsList.map((it, idx) => {
          return (
            <li key={it.id}>
              <Link to={it.link}>
                <i className={it.icon}></i>
              </Link>
            </li>
          )
        })}
      </ul>
      <select name="related" className="related_site">
        {selectList.map((it) => {
          return (
            <option key={it.id} value={it.site}>{it.site}</option>
          )
        })}
      </select>
    </div>
  )
}

const BottomFooter = () => {
  const footerList = [
    { id: 1, title: '(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)' },
    { id: 2, title: '대표이사 : 허민회 · 사업자등록번호 : 104-81-45690 · 통신판매업신고번호 : 2017-서울용산-0662' },
    { id: 3, title: '호스팅사업자 : CJ올리브네트웍스 · 개인정보보호 책임자 : 심준범 · 대표이메일 : cjcgvmaster@cj.net' },
    { id: 4, title: 'COPYRIGHT ©CJ CGV. All Rights Reserved' },
  ]

  const snsList = [
    { id: 1, icon: 'xi-facebook-official', link: '/' },
    { id: 2, icon: 'xi-instagram', link: '/' },
    { id: 3, icon: 'xi-youtube-play', link: '/' },
    { id: 4, icon: 'xi-line-messenger', link: '/' },
  ]
  return (
    <div className="bf">
      <Left footerList={footerList} />
      <Right snsList={snsList} />
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