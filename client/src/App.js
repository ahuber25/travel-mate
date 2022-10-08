import React from "react";
import { 
  Route,
  Routes } from "react-router-dom";
import Nav from './components/Nav/index';
import Header from './components/Header';
import Home from './components/Home/index';
import Login from './components/Login/index';
import Calendar from './components/Calendar/index';
import Days from './components/Days/index';
import Footer from './components/Footer';
import './App.css';

function App() {
  
    return (
      <div>
          <Nav></Nav>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/calendar" element={<Calendar/>}/>
            <Route exact path="/days" element={<Days/>}/>
            <Route exact path="/login" element={<Login/>}/>
          </Routes>
          <Footer/>
      </div>
    );
}

export default App;
