import React from 'react';
import {FaCode, FaPencilAlt, FaPython} from 'react-icons/fa';

const ServiceItem = ({ icon, title, description }) => (
  <div className="service-item flex flex-col justify-around items-center rounded-lg w-full md:w-[350px] h-auto md:h-[300px] p-5 m-5 relative hover:shadow-inner-light transition-all duration-300 bg-bg border border-whiteLight border-opacity-10">
    <div className="text-mainColor text-4xl md:text-5xl mb-4 md:mb-0">{icon}</div>
    <h5 className="text-white tracking-wider text-lg md:text-xl my-2.5">{title}</h5>
    <p className="text-whiteLight text-base md:text-lg">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="services my-16 md:my-24 bg-bg px-4">
      <div className="container mx-auto">
        <div className="services-content text-center">
          <div className="services-heading text-center uppercase mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl opacity-100 my-4">My Services</h2>
          </div>
        </div>
        <div className="service-item-container w-full flex flex-col md:flex-row justify-center items-center text-center flex-wrap gap-4">
          <ServiceItem
            icon={<FaCode />}
            title="Frontend Development"
            description="I craft responsive and user-friendly websites using modern web development technologies."
          />
          <ServiceItem
            icon={<FaPython />}
            title="Python"
            description="A passionate Python intern who loves writing auto-game scripts, integrating openCV and utilizing new AI technologies."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
