import React, { Suspense, useRef } from 'react';
import { useVisible } from './hooks/useVisible';
import RocketLoader from './components/RocketLoader/RocketLoader';
import astronaut from './assets/images/astronaut.png';
import './App.css';

// import RocketComponent from './components/Rocket/Rocket';
const RocketSection = React.lazy(
  () => import('./components/RocketSection/RocketSection')
);

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
      {/* when second section is visible on the screen, we will start lazy loading of rocket loader component */}
      {isVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <RocketLoader />
        </Suspense>
      )}
    </>
  );
}

export default App;
