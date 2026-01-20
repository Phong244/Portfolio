import React from 'react';
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';
import shopphone from '../assets/img/shopphone.png';
import vpt from '../assets/img/vpt.png';
import xunxian from '../assets/img/Xunxian.jpg'
import comingsoon from '../assets/img/comingsoon.jpg'

const ProjectBox = ({title, tech, github, live, image}) => (
    <div
        className="project-box p-6 md:p-8 h-64 md:h-72 flex flex-col gap-8 md:gap-12 relative bg-bg border border-white hover:bg-darkBlue transition-all duration-200 group overflow-hidden">
        {image && (
            <>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{backgroundImage: `url(${image})`}}
                />
                <div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"/>
            </>
        )}
        <a href={live} target="_blank" rel="noopener noreferrer"
           className="absolute top-0 left-0 w-full h-full z-10"></a>
        <div className="project-box__link self-end w-full flex justify-end items-center relative z-20">
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="mr-4">
                    <FaGithub className="w-5 h-5 md:w-6 md:h-6 text-white"/>
                </a>
            )}
            <a href={live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="w-5 h-5 md:w-6 md:h-6 text-white"/>
            </a>
        </div>
        <div className="project-box__content self-center text-center relative z-20">
            <h3 className="mb-8 md:mb-12 tracking-tight leading-8 text-xl md:text-2xl font-extrabold capitalize text-whiteLight">{title}</h3>
            <h5 className="text-secondColor text-sm md:text-base font-normal">{tech}</h5>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Shop Phone",
            tech: "Team project at Codegym",
            github: "https://github.com/lean1835/Manager-Shop-Phone/",
            live: "https://manager-shop-phone.vercel.app/",
            image: shopphone
        },
        {title: "Shaman King Game", tech: "But it closed", image: vpt},
        {title: "Xunxian Auto Farm", tech: "Arcade game, can't public", image: xunxian},
        {title: "Something new", tech: "Coming soon...", image: comingsoon},


    ];

    return (
        <section id="projects" className="project max-w-7xl mx-auto py-16 md:py-24 px-4">
            <h5 className="uppercase text-whiteLight text-xs md:text-sm tracking-[3px]">— check out some</h5>
            <h2 className="text-3xl md:text-4xl capitalize tracking-tighter">Stuff I’ve worked on 💻</h2>
            <div className="project-item-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 md:mt-24">
                {projects.map((p, i) => <ProjectBox key={i} {...p} />)}
            </div>
        </section>
    );
};

export default Projects;
