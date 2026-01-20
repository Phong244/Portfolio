import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/img/avatar.jpg"

const About = () => {
  return (
      <section id="about" className="about mt-24 md:mt-52 py-8 px-4 md:px-24 relative">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className="profile-img flex-1 mb-10 lg:mb-0 lg:mr-10 z-10 relative w-full max-w-[350px] lg:max-w-[510px]">
            <img
                src={avatar}
                alt="Phong Le"
                className="w-full h-auto object-cover grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105"
            />
          </div>
          <div className="about-content flex-1 text-base leading-loose">
            <div className="about-heading text-center uppercase mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl opacity-100">About Me</h2>
            </div>
            <p className="font-light text-left text-white text-sm md:text-base">
              I am a recent IT graduate with a strong interest in
              programming and software development. I enjoy learning
              new technologies and improving my problem-solving skills
              through practical experience.
              <br />
              <br />
              While I may not have much professional experience yet,
              I am eager to apply my knowledge and continue growing in the field.
              I am open to challenges, always willing to learn from others,
              and excited to contribute to meaningful projects.
              <br />
              <br />
              As a developer who loves <b>ReactJS</b> and <b>Python</b>, I focus on building
              efficient solutions and constantly exploring new ways to automate and optimize workflows.
            </p>

            <div className="about-cta text-center my-8 text-sm md:text-base">
              <a href="#contact" className="skills-cta font-extrabold relative text-greenAlt">Hire me</a>
              <span className="mx-2">—</span>
              <Link to="/about" className="exp-cta font-extrabold relative text-pink">More about me</Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;