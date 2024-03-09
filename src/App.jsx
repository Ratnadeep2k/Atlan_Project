import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ExploreModel from './components/ExploreModel';
import CreateModel from './components/CreateModel';
import FavModel from './components/FavModel';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ToastContainer/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreModel />} />
          <Route path="/create" element={<CreateModel />} />
          <Route path="/favourite" element={<FavModel />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
