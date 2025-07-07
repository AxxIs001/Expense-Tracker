import './App.css';
import Landing from './component/landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
