import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Practice from './practice/Practice.js';
import Donation from './donation/Donation.js';
import Training from './training/Training.js';

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
    </main>
  );
}

export default Main;