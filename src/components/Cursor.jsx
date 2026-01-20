import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = e.pageY + 'px';
        cursorRef.current.style.left = e.pageX + 'px';
      }
    };

    window.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseover', () => cursorRef.current?.classList.add('link-grow'));
      link.addEventListener('mouseleave', () => cursorRef.current?.classList.remove('link-grow'));
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseover', () => cursorRef.current?.classList.add('link-grow'));
        link.removeEventListener('mouseleave', () => cursorRef.current?.classList.remove('link-grow'));
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-effect hidden md:block"></div>;
};

export default Cursor;
