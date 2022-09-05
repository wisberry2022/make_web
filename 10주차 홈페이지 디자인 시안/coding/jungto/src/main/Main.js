import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Practice from './practice/Practice.js';
import Donation from './donation/Donation.js';

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
    </main>
  )
}

export default Main;