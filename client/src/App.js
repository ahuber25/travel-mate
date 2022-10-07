<<<<<<< HEAD
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
=======
import './App.css';

function App() {
  return (
    <div className="App">
    <header>
        <h1>Travel Mate</h1>
        <div class="nav">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/login.html">Login</a></li>
                <input type="text" placeholder="Search.."></input>
            </ul>
        </div>
    </header>

    <body>

    <section class="title-image">
        <div class="subtitle">
            <h2>World Traveler</h2>
        </div>
    </section>
    
    <section class="items" id="about">
        <div class="section-titles">
            <h3>Where shall we take you?</h3>
        </div>
        <div class="info">
            <p>Travel Mate description here</p>
        </div>
    </section>
    </body>
    <footer>&copy; 2022</footer>
>>>>>>> 55ce8b85b2c707184ae73e4d69f3e874c0e88999
    </div>
  );
}

export default App;
