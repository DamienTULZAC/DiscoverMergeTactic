import React from 'react';
import NavBar from "./components/NavBar";
import Banniere from "./components/Banniere";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Leaders from "./pages/Leaders";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Routes, Route, Link } from 'react-router-dom';


// App principal avec Routes
export default function App() {
  return (
    <div>
      <div>
        <NavBar />
        <Banniere>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/leaders" element={<Leaders />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Banniere>
      </div>
      <Footer />
    </div>
  );
}
