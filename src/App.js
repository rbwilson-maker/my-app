import './styles/App.css';

function App() {
  return (
    <>
    <div className="App">
      <div class="header">
        <img class="portrait" src="images/fys-headshot.svg" alt='portrait'/>
        <div class="bio-info">
            <h1 class="name">Rachel Wilson</h1>
            <p>
                I am pursuing a Bachelor's Degree in Computer Science at
                Carnegie Mellon University with a minor in Hispanic Studies.
                Beyond computer science and my love of languages, I have
                a passion for teaching. I am fortunate enough
                to further pursue these interests as part of the 
                Fifth Year Scholars program in the 2024-25 academic year.
            </p>
            <p>
                Some of my personal interests include crosswords, ping pong,
                lots of television, and all things chocolate!
            </p>
            <p>
                Email:
                <a href="mailto:rbwilson@andrew.cmu.edu">
                    <tt>rbwilson@andrew.cmu.edu</tt>
                </a><br></br>
                GitHub: 
                <a href="https://github.com/rbwilson-maker">
                    <tt>rbwilson-maker</tt>
                </a>
            </p>
        </div>
    </div>
    <div class="links">
        <div class="link-item">
            <a href="resume.pdf">Resume</a>
        </div>
        <div class="link-item">
            <a href="https://www.cmu.edu/student-affairs/dean/fifth/index.html">Fifth Year Scholars</a>
        </div>
        <div class="link-item">
            <a href="https://csd.cmu.edu/news/wilson-earns-2023-krulcik-scholarship">Krulcik Scholarship</a>
        </div>
        <div class="link-item">
            <a href="../src/pets.html">Pets</a>
        </div>
    </div>
    </div>
    </>
  );
}

export default App;
