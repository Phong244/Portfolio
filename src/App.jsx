import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Cursor from './components/Cursor';


function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Cursor/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </>
    );
}

export default App;
