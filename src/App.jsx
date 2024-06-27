import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MediaProvider } from './context/context';
import Header from './header';
import Menu from './menu';
import Home from './pages/Home';
import Videocam from './pages/Videocam';
import Favorite from './pages/Favorite';
import Account from './pages/Account';
import Navigation from './navigationBar';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MediaProvider>
      <Router>
        <div className="head">
          <Header />
        </div>
        <main>
          {!isMobile && <Menu />}
         <div className="temp_">
         <Navigation />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videocam" element={<Videocam />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/account" element={<Account />} />
          </Routes>
         </div>
        </main>
      </Router>
    </MediaProvider>
  );
}

export default App;
