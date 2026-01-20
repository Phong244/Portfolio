import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);

    document.documentElement.classList.add('transition');
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1200);

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="switch"
        name="theme"
        checked={!isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <label className="toggle" htmlFor="switch">Toggle</label>
    </div>
  );
};

export default ThemeToggle;
