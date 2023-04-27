import React, { useRef } from 'react';
import { useVisible } from './hooks/useVisible';
import astronaut from './assets/images/astronaut.png';
import RocketSection from './components/RocketSection/RocketSection';
import './App.css';

import RocketLoader from './components/RocketLoader/RocketLoader';
// const RocketLoader = lazy(() => import('./components/RocketLoader/RocketLoader'));

function App() {
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(sectionTwoRef);
  console.log('SECTION 2 is visible', isVisible);

  return (
    <>
      <div className="section section-first">
        <img src={astronaut} className="astronaut" alt="astronaut" />
      </div>
      <div ref={sectionTwoRef} className="section section-second">
        <RocketSection />
      </div>
      <RocketLoader />
    </>
  );
}

export default App;
