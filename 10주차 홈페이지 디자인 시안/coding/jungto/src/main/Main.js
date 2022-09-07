import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Practice from './practice/Practice.js';
import Donation from './donation/Donation.js';
import Training from './training/Training.js';
import News from './news/News.js';

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Practice />
        <Routes>
          <Route path="/" exact={true} componenet={<Practice />}></Route>
        </Routes>
      </BrowserRouter>
      <Donation />
      <BrowserRouter>
        <Training />
        <Routes>
          <Route path="/" exact={true} component={<Training />}></Route>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <News />
        <Routes>
          <Route path="/" exact={true} component={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;