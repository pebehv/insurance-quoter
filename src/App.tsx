//port logo from './logo.svg';
import './App.css';
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
// src/index.tsx o src/App.tsx
import './styles/main.scss';
import Home from './components/Home/Home';
import Plans from './components/Plans/Plans';

//import BannerSection from './components/BannerSection/BannerSection'
const App = () => (
  <Router>
    <div className="container-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Plans />} />
      </Routes>
    </div>
  </Router>
);

export default App;


