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
            <p><input type="text" placeholder="Search.."></input></p>
        </div>
        <div class="info">
            <p>Travel Mate description here</p>
        </div>
    </section>
    </body>
    <footer>&copy; 2022</footer>
    </div>
  );
}

export default App;
