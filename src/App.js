import './App.css';

function App() {
  return (
    <div className="App">
    <header>
        <h1><a href="/undex.html">Caid's Portfolio</a></h1>
        <div class="nav">
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    </header>

    <section class="title-image">
        <div class="subtitle">
            <h2>When life gives you code,<br/>debug it.</h2>
        </div>
    </section>
    
    <section class="items" id="about">
        <div class="section-titles">
            <h3>About Me</h3>
        </div>
        <div class="info">
            <p>Hello there. My name is Acadia Huber, but I prefer to go by Caid. I am twenty-six years old and have been casually messing with code for almost a decade now. I began on tumblr where I would run different writing blogs and would want to have a theme to match the character I was writing on said blog. Though most of my experience comes from using a free code provided by another creator, I became familiar with the concept and layout the more I practiced.</p>
            <p>Last year was the first time I had ever taken a formal class, in which I took Rutger's online Front-End Web Developer course. As much as that helped me to improve my skills, I did not feel I retained enough information or learned as much as I felt I should have. So I decided to take this course and further develop my skills. This will be the site where I host all that I have done so far, and I am certain it is going to only become more developed and nicer the more I learn.</p>
        </div>
    </section>

    <section class="items" id="projects">
        <div class="section-titles">
            <h3>Projects</h3>
        </div>
        <div class="project-sites">
            <div class="image-1">
                <a href="https://ahuber25.github.io/run-buddy/" target="_blank" rel="noopener noreferrer"><img src="../public/images/run-buddy.jpg" alt="run buddy title"/>
                <p>Run Buddy</p></a>
            </div>
            <div class="image-2">
                <a href="https://ahuber25.github.io/" target="_blank" rel="noopener noreferrer"><img src="../public/images/horiseon.jpg" alt="horiseon project"/>
                <p>Horiseon</p></a>
            </div>
            <div class="image-2">
                <a href="https://cmarvann.github.io/Group2-Project1/index.html" target="_blank" rel="noopener noreferrer"><img src="../public/images/ampersand.png" alt="first dnd creator"/>
                <p>First DnD Creator</p></a>
            </div>
            <div class="image-2">
                <a href="https://dry-sands-22029.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="../public/images/4e_black_dragon.webp" alt="second DnD creator"/>
                <p>Second DnD Creator</p></a>
            </div>
            <div class="image-2">
                <a href="/index.html" target="_blank" rel="noopener noreferrer"><img src="../public/images/horiseon.jpg" alt="horiseon project"/>
                <p>More to come.</p></a>
            </div>
        </div>
    </section>

    <section class="items" id="contact">
        <div class="section-titles">
            <h3>Contact Me</h3>
        </div>
        <div class="find-me">
            <ul>
                <li>215-530-2314</li>
                <li><a href="mailto:horsinaround235@gmail.com">horsinaround235@gmail.com</a></li>
                <li><a href="https://github.com/ahuber25" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
        </div>
    </section>
    </div>
  );
}

export default App;
