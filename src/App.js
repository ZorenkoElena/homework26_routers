import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WrapperForHeros from './components/wrapperForHeros.js';
import WrapperForEpisodes from './components/wrapperForEpisodes.js';
import WelcomePage from './components/welcomePage.js';
import Hero from './components/hero.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/heroes" element={<WrapperForHeros />}>
          <Route path="hero/:id" element={<Hero />} />
        </Route>
        <Route path="/episodes" element={<WrapperForEpisodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
