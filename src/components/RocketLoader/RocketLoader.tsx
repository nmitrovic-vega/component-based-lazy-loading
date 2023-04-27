import React, { useEffect } from 'react';
import { ReactComponent as RocketLoading } from '../../assets/images/launch.svg';
import './RocketLoader.css';

const RocketLoader = () => {
  // component with performance bottleneck
  useEffect(() => {
    for (let i = 0; i < 100_000; i++) {
      console.log('hola');
    }
  }, []);

  return (
    <div className="rocket-loader__wrapper">
      <div className="pulse rocket-loader">
        <RocketLoading width="100" height="100" />
      </div>
    </div>
  );
};

export default RocketLoader;
