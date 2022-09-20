import './Common.css';
import './Basic.css';
import Total from './Total';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Total />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
