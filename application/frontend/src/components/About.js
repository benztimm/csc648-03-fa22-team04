import React from 'react';
import { Link } from 'react-router-dom';


import Ekarat from './pages/Ekarat';
import Jerry from './pages/Jerry';
import Mahisha from './pages/Mahisha';
import Ruben from './pages/Ruben';
import Sophia from './pages/Sophia';
import Sudhanshu from './pages/Sudhanshu';

function About(location) {
    return (
    <div className="team">
        <Ekarat/>
        <Jerry/>
        <Mahisha/>
        <Ruben/>
        <Sophia/>
        <Sudhanshu/>
    </div>
    );
}

export default About;