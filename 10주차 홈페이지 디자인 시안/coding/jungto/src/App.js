import './Common.css';
import './Basic.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} component={<Header />}></Route>
          <Route path="/login" component={<Header />}></Route>
          <Route path="/sitemap" component={<Header />}></Route>
          <Route path="/eng" component={<Header />}></Route>
        </Routes>
      </BrowserRouter>
      <Main />
      <BrowserRouter>
        <Footer />
        <Routes>
          <Route path="/" exact={true} component={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
