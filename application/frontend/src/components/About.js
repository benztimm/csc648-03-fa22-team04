/* 
Filename: About.jss

Date: 11/20/22
Authors: Ruben Ponce
Description: Amalgamation of all team member's About Us page into single page.

*/
import React, {useEffect} from 'react';

import Ekarat from './pages/Ekarat';
import Jerry from './pages/Jerry';
import Mahisha from './pages/Mahisha';
import Ruben from './pages/Ruben';
import Sophia from './pages/Sophia';
import Sudhanshu from './pages/Sudhanshu';
import ReactGA from 'react-ga';

function About(location) {

    useEffect(() => {
        console.log(window.location.pathname + window.location.search);
        try{
          ReactGA.pageview(window.location.pathname + window.location.search);
        }
        catch(e){
          console.error(e);
        }
        
      }, []);

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