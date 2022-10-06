import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div>
    <Nav></Nav>
    <Header></Header>
    <Home></Home>
    <Login></Login>
    <Signup></Signup>
    <Footer></Footer>
    </div>
  );
}

export default App;
