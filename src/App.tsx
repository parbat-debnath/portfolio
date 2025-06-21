import React from "react";
import Htmllogo from "./Assets/images/html-logo.png";
import Csslogo from "./Assets/images/css-logo.png";
import Jslogo from "./Assets/images/js-logo.png";
import Tslogo from "./Assets/images/ts-logo.png";
import Reactlogo from "./Assets/images/react-logo.png";
import myphoto from "./Assets/images/myphoto.jpg";
import call from "./Assets/images/call-logo.png";
import email from "./Assets/images/email-logo.png";
import whatsapp from "./Assets/images/whatsapp-logo.png";

const App = () => {
  return (
    <div className="page">
      <Navbar />
      <Interoduction />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

function Navbar() {
  return (
    <div className="navbar">
      <div id="logo">
        <p>logo</p>
      </div>
      <div className="other-nav-parts">
        <a href="#home">
          <div><p>Home</p></div>
        </a>
        <a href="#about">
          <div><p>About</p></div>
        </a>
        <a href="#skills">
          <div><p>Skills</p></div>
        </a>
        <a href="#contact">
          <div><p>Contact</p></div>
        </a>
      </div>
    </div>
  );
}

function Interoduction() {
  return (
    <div id="home">
      <div className="intro-container">
        <div className="introduction">
          <h1>Hi.</h1>
          <h2>Welcome to my profile.</h2>
        </div>
        <div className="profileimg-cover">
          <div className="profileimg"></div>
        </div>
      </div>
      <div className="intro-para">
        <p>
          I am Parbat Debnath. A disciplined and creative Computer Science
          major, I specialize in building dynamic web applications and enjoy
          exploring intersections of technology, science, and design to solve
          real-world problems.
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="about-container">
        <div className="about-element">
          <h2>In short</h2>
          <p>
            Name is Parbat Debnath. A sailor in the vast ocean of technology. I
            am a Computer Science undergraduate with a strong foundation in{" "}
            <b> full-stack web development</b> and a deep interest in
            technology, science, and digital innovation.
          </p>
        </div>
        <div className="about-element">
          <p>
            I have completed my higher secondary from Ganrapota High School.
            Currently studing Computer Science in Dinabandhu Mahavidyalaya as
            honours course under West Bengal state Univercity. I was among the{" "}
            <b>top 20 percent student</b> in H.S.
          </p>
          <h2>Education</h2>
        </div>
        <div className="about-element">
          <h2>Professional value</h2>
          <p>
            I believe in disciplined learning, creative problem-solving, and
            pushing boundaries through experimentation and continuous growth. I
            enjoy challenges and aim to deliver work that is both technically
            sound and visually engaging.
          </p>
        </div>
        <div className="about-element">
          <p>
            Outside of coding, I am a <b>portrait artist</b> and{" "}
            <b>violin enthusiast</b>. I also enjoy studying mathematics,
            physics, and philosophy — subjects that feed my curiosity and shape
            my approach to problem-solving.
          </p>
          <h2>Hobbies</h2>
        </div>
        <div className="about-element">
          <h2>Goal</h2>
          <p>
            I’m currently looking for opportunities to contribute to meaningful
            projects, collaborate with like-minded individuals, and further
            refine my skills as a developer and thinker.
          </p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skill-container">
        <div className="skill-element">
          <img src={Htmllogo} alt="" id="html-logo" />
          <p>HTML</p>
        </div>
        <div className="skill-element">
          <img src={Csslogo} alt="" id="css-logo" />
          <p>CSS</p>
        </div>
        <div className="skill-element">
          <img src={Jslogo} alt="" id="js-logo" />
          <p>JavaScript</p>
        </div>
        <div className="skill-element">
          <img src={Tslogo} alt="" id="ts-logo" />
          <p>Typescript</p>
        </div>
        <div className="skill-element">
          <img src={Reactlogo} alt="" id="react-logo" />
          <p>React</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact</h1>
      <div className="contact">
      <div className="photo">
        <div className="photo-wrapper">
          <img src={myphoto} alt="" />
        </div>
      </div>
      <div className="contact-details">
        <h2>Parbat Debnath</h2>
        <p>Email : <span id="email-address">parbatdebnathofficial@gmail.com</span> , <span>l83269256@gmail.com</span></p>
        <p>Github : <span>https://github.com/parbat-debnath</span></p>
        <p>Phone : <span>7029990619</span></p>
        <p></p>
      </div>
    </div>
    </div>
  );
}



export default App;
