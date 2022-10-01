import { Outlet } from 'react-router-dom';
import Header from '../mainPage/header/Header';
import Footer from '../mainPage/footer/Footer';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header className="layout_header" />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;