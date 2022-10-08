import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Calendar from './components/Calendar';
import Days from './components/Days';
import Footer from './components/Footer';
import './App.css';


function App() {


  return (
    <div>
      <Nav></Nav>
    <Header></Header>
    <Home></Home>
    <Login></Login>
    <Calendar></Calendar>
    <Days></Days>
    <Footer></Footer>
    </div>
  );
}

export default App;
