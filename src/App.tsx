import './App.css';
import Core from './pages/core';
import Analytics from './pages/analytics';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import orangeCube from './assets/3d-image-orange.png';
import pinkIcosahedron from './assets/3d-image-pink-ball.png';
import pinkTwirlRing from './assets/3d-image-pink.png';


function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="left-section">
        <div className="logo">ZYNCO</div>
        <h1 className="main-heading">YOUR AI<br />LIFE<br />COACH</h1>
        <p className="subheading">UNTANGLE YOUR LIFE</p>
        <button className="connect-btn" onClick={() => navigate('/core')}>
          CONNECT HERE
        </button>
      </div>

      <div className="right-section">
        <div className="shape shape-top-right">
          <img src={pinkIcosahedron} alt="3D Shape" />
        </div>
        <div className="shape shape-mid-left">
          <img src={orangeCube} alt="3D Shape" />
        </div>
        <div className="shape shape-bottom-right">
          <img src={pinkTwirlRing} alt="3D Shape" />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/core" element={<Core />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
