import './Store.scss';
import Header from '../../mainPage/header/Header';
import Footer from '../../mainPage/footer/Footer';
import MainStore from './mainStore/MainStore';
import SubStore from './subStore/SubStore';

const Store = () => {
  return (
    <div className="store_wrapper">
      <Header />
      <MainStore />
      <SubStore />
      <Footer />
    </div>
  )
}

export default Store;