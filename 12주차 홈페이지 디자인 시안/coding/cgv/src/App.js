import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Movie from './pages/detail/movie/Movie';
import Theater from './pages/detail/theater/Theater';
import Ticketing from './pages/detail/ticketing/Ticketing';
import Store from './pages/detail/store/Store';
import Event from './pages/detail/event/Event';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/theater" element={<Theater />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/store" element={<Store />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
