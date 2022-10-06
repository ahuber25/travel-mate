import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <div>
    <Nav></Nav>
    <Home></Home>
    <Login></Login>
    <Footer></Footer>
    </div>
  );
}

export default App;
