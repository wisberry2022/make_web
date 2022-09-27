import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Movie from './pages/detail/movie/Movie';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
