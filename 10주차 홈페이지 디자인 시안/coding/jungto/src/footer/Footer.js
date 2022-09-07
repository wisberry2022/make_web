import './footer.scss';
import { Link } from 'react-router-dom';


const TopFooter = () => {

  const list_arr = ['월간정토', '실천장소 소개', '삼보수호비', '기부금영수증'];

  return (
    <div className="top_ft">
      <div className="container">
        <ul className="top_list">
          {list_arr.map((el, idx) => (
            <Link to="/"><li key={idx}><span>{el}</span><i className="xi-angle-right"></i></li></Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

const BottomFooter = () => {
  return (
    <div className="bottom_ft">
      hello
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <TopFooter />
      <BottomFooter />
    </footer>
  )
}

export default Footer;