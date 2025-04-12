import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import WorkME from "../../assets/workMe.png";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={WorkME} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Yaroslav Pedrovic, and I'm based in Kropyvnytskyi, Ukraine
              . I hold
              a bachelor's degree in Computer Science from the Lviv State University of Life Safety .
              <br />
              <br />
              I am a Professional Full-Stack Developer with extensive experience
              in building dynamic and responsive web applications. My expertise
              spans both frontend and backend technologies, enabling me to
              create seamless user experiences and robust server-side logic.
              <br/>
              Fastforward to today, and I can honestly say it's been a beautiful
              journery and I hope to grow even further as Software Engineer.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>JavaScript, TypeScript, HTML5, CSS3</li>
              <li>C#, ASP, .Net, DJango, SpringBoot</li>
              <li>Node, Python, ORM</li>
              <li>React, Next, Electron, Vue, Angular, Django</li>
              <li>RESTFul API, GraphQL</li>
              <li>Docker, AWS</li>
              <li>Postgres SQL, MongoDB, MySQL</li>
              <li>Tailwind,SASS, ARIA, Charts</li>
              <li>Data Structure & Algorithms</li>
              <li>Git, CI/CD, Webpack, NPM</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
