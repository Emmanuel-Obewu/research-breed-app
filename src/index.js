import React from 'react';
import ReactDOM from 'react-dom';
import HowDtWorks from './DanTSection';
import Featured from './Featured';
import Navbar from './Heading';
import HeroSection from './Main';
import Research from './researchSection';
// import Img from './logo512.png';

import  './styles.css';


ReactDOM.render(
  <>
 <Navbar/>
 <HeroSection/>
 <Featured/>
 <Research/>
 <HowDtWorks/>
 </>,
    document.getElementById("root")
)

