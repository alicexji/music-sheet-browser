// App.jsx
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import SheetDetail from './pages/SheetDetail';
import './App.css';
import Header from './components/Header';
import Web_Card from './components/Web_Card';
import Nav from './components/Nav';
import { useLocation } from 'react-router-dom';
import About from './pages/About';
import Library from './pages/Library';
import Upload from './pages/Upload';


function App() {

  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      
      <Nav/>
      
      <>
        {/* {isHome ? (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        ) : (
          <main className="container-fluid py-5 fade-in">
            <div className="content-wrapper">
              <Routes>
                <Route path="/sheet/:id" element={<SheetDetail />} />
                <Route path="/library" element={<Library />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>
        )} */}
        <main className="container-fluid fade-in">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sheet/:id" element={<SheetDetail />} />
                <Route path="/library" element={<Library />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/about" element={<About />} />
              </Routes>
          </main>
      </>

      <footer className="text-center text-muted py-4 border-top">
        &copy; {new Date().getFullYear()} Vincent Ji. All rights reserved.
      </footer>
    </>
  );
}

export default App;
