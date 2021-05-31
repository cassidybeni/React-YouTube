import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="projectDescription">
        <h1>React Youtube</h1>
        <p>
          This project is a simple React application that allows the user to
          search for YouTube videos using the YouTube API, then choose a video
          from a list to watch.
        </p>
      </div>
      <div className="Cassidy">
        <div className="img">
          <img src="/assets/Cassidy.png" alt="Cassidy"></img>
          <a
            href="https://github.com/cassidybeni"
            target="_blank"
            rel="noreferrer"
          >
            Cassidy Beni
          </a>
        </div>
        <p>
          Hello! My name is Cassidy Beni and I am a Web Developer from New York
          City. Currently, I am enrolled in the highly selective Pursuit
          fellowship for rising tech professionals and I am refining my
          technical and professional skills. I would like to improve the
          statistics of women of color in technology by contributing to this
          group's ability to network and grow in the tech industry. I’m a
          patient, resilient, and diligent web developer looking for
          opportunities to blend my career with my passions. I have experience
          in JavaScript, HTML and CSS as a full stack developer. I am passionate
          about music, fashion, and NBA, as well as, communication, teamwork,
          and problem-solving.
        </p>
      </div>
    </div>
  );
}

export default About;
