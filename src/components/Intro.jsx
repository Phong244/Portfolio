import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
// Import icons từ react-icons
import { FaReact, FaPython, FaCode } from 'react-icons/fa';

const Intro = () => {
  const introRef = useRef(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
    // Giữ nguyên logic cũ, stagger 0.4 để các dòng hiện lên lần lượt
    tl.to('.intro-text .text', { y: '0%', duration: 1, stagger: 0.4 });
  }, []);

  const handleExplore = () => {
    if (isExiting) return;
    setIsExiting(true);

    const tl = gsap.timeline({
      onComplete: () => {
        if (introRef.current) {
          introRef.current.style.display = 'none';
        }
      }
    });

    tl.to('.intro-btn', { opacity: 0, y: -100, duration: 1 })
        .to('.intro-text .text', { y: '-100%', duration: 1 }, '-=0.5')
        .to('.slider', { y: '-100%', duration: 1.5, ease: 'expo.inOut' }, '-=1')
        .to('.slider-2', { y: '-100%', duration: 1.5, ease: 'expo.inOut' }, '-=1.2')
        .to(introRef.current, { y: '-100%', duration: 1, ease: 'power2.inOut' }, '-=1');
    // Đoạn .fromTo('.content'...) bạn có thể thêm lại nếu đã có class .content ở ngoài component này
  };

  return (
      <div ref={introRef} className="intro bg-[#0a0a0a] fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col z-[1000]">
        <div className="intro-text text-white font-sans text-2xl md:text-4xl space-y-4">

          {/* Dòng 1: ReactJS */}
          <h2 className="hide overflow-hidden">
          <span className="text flex items-center gap-4 translate-y-full">
            <FaReact className="text-[#61DAFB] animate-[spin_10s_linear_infinite]" />
            Building the web
          </span>
          </h2>

          {/* Dòng 2: Python */}
          <h2 className="hide overflow-hidden">
          <span className="text flex items-center gap-4 translate-y-full">
            <FaPython className="text-[#FFD43B]" />
            Automating the rest
          </span>
          </h2>

          {/* Dòng 3: Dev */}
          <h2 className="hide overflow-hidden">
          <span className="text flex items-center gap-4 translate-y-full">
            <FaCode className="text-[#A78BFA]" />
            One line at a time
          </span>
          </h2>

        </div>

        <button
            className="intro-btn block py-3 px-8 font-bold text-xs tracking-[4px] text-white border border-white outline-none font-sans overflow-hidden bg-transparent hover:bg-white hover:text-black transition-all duration-500 relative mt-12 z-10"
            onClick={handleExplore}
        >
          EXPLORE
        </button>

        {/* Sliders giữ nguyên */}
        <div className="slider bg-[#22c55e] fixed top-0 left-0 w-full h-full translate-y-full z-[1000]"></div>
        <div className="slider-2 bg-[#7c3aed] fixed top-0 left-0 w-full h-full translate-y-full z-[1000]"></div>
      </div>
  );
};

export default Intro;