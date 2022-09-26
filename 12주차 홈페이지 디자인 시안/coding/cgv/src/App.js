import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Movie from './pages/detail/movie/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
