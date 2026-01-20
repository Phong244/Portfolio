import React from 'react';
import {FaCode, FaPencilAlt, FaPython} from 'react-icons/fa';

const ServiceItem = ({ icon, title, description }) => (
  <div className="service-item flex flex-col justify-around items-center rounded-lg w-[350px] h-[300px] p-5 m-5 relative hover:shadow-inner-light transition-all duration-300">
    <div className="text-mainColor text-5xl">{icon}</div>
    <h5 className="text-white tracking-wider text-xl my-2.5">{title}</h5>
    <p className="text-whiteLight text-lg">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="services my-24 bg-bg">
      <div className="container mx-auto">
        <div className="services-content text-center">
          <div className="services-heading text-center uppercase mb-12">
            <h2 className="text-5xl opacity-100 my-4">My Services</h2>
          </div>
        </div>
        <div className="service-item-container w-full flex justify-evenly items-center text-center flex-wrap">
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
