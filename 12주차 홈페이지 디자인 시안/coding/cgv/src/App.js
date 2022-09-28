import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Movie from './pages/detail/movie/Movie';
import Theater from './pages/detail/theater/Theater';
import Ticketing from './pages/detail/ticketing/Ticketing';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/theater" element={<Theater />} />
        <Route path="/ticketing" element={<Ticketing />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
