import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import avatar from '../assets/img/avatar.jpg'

const AboutPage = () => {
  // Placeholder data
  const skills = [
    'HTML', 'CSS/SASS', 'ReactJS', 'Javascript',
    'TailwindCSS', 'Redux',
    'styled-components', 'Vite', 'Figma', 'Git/Github'
  ];

  const experiences = [
    {
      date: 'Sep 2022 - Feb 2023',
      title: 'Frontend Engineer - Company A',
      tasks: [
        'Coded using Typescript, NextJS and TailwindCSS.',
        'Designed and updated layouts.',
        'Worked with product designers and backend developers.',
        'Adhered to React and NextJS best practices.',
      ],
    },
    // Add more experiences...
  ];

  const educations = [
    {
      date: '2018-Present',
      title: 'BSc. in Computer Science - University Name'
    }
    // Add more education...
  ]


  return (
      <section className="more-about p-8 text-whiteLight">
        <Link to="/" className="logo fixed top-4 left-8 z-50">
          <img src="/logo.svg" alt="Logo" className="w-16 bg-bg bg-opacity-75 p-1" />
        </Link>
        <ThemeToggle />
        <div className="container mx-auto mt-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl uppercase">
              Phong <span className="text-secondColor">Le</span>.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <img src={avatar} alt="Phong Le" className="w-full h-auto max-w-md mx-auto" />
            </div>
            <div className="md:w-3/5">
              <p>
                Frontend Web Developer based in Da Nang City focused on designing
                engaging UI, building interactive experiences & bringing products
                to life through ReactJS and Vite.
              </p>
              <br />
              <p>
                I advocate for a minimalistic, user-focused approach to development.
                In my spare time, I'm either automating workflows with Python or playing DOTA 2.
              </p>

              <h3 className="text-xl mt-12 mb-6">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <div key={skill} className="bg-darkBlue border border-mainColor py-1 px-4 rounded-full text-sm">
                      {skill}
                    </div>
                ))}
              </div>

              {/* Tabs for Experience and Education can be added here */}

            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutPage;