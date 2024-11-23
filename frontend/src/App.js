import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
