import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-bg py-12 md:py-20 px-4 md:px-20 relative z-10">
      <hr className="border-whiteLight border-opacity-40 mb-12 md:mb-16" />
      <div className="footer-head mt-8 text-sm md:text-base font-medium">
        <h5 className="uppercase tracking-[.2em] mb-4">Thanks for visiting!</h5>
        <div className="link-container text-thirdColor flex flex-col md:flex-row flex-wrap">
          <div className="footer-links mb-8 md:mb-12 md:mr-60">
            <p className="mb-4"><a href="#" className="text-mainColor hover:text-thirdColor transition-colors duration-300">phong.le@abc.com</a></p>
            <p><a href="#" className="text-mainColor hover:text-thirdColor transition-colors duration-300">fb.com/...</a></p>
          </div>
          <div className="footer-links flex flex-row">
            {/*<p className="ml-6"><a href="#" className="text-mainColor"><FaTwitter /></a></p>*/}
            {/*<p className="ml-6"><a href="#" className="text-mainColor"><FaGithub /></a></p>*/}
            {/*<p className="ml-6"><a href="#" className="text-mainColor"><FaLinkedin /></a></p>*/}
            {/*<p className="ml-6"><a href="#" className="text-mainColor"><FaCodepen /></a></p>*/}
          </div>
        </div>
      </div>
      <div className="footer-copy text-whiteLight pt-24 md:pt-36 text-center md:text-right text-sm md:text-base">
        &copy; Phong Le 2026
      </div>
    </footer>
  );
};

export default Footer;
