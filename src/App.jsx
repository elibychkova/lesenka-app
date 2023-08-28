import React, {useRef, useState, useEffect} from 'react';
import { Intro } from './containers/Intro';
import { Header } from './components/Header';

import './styles/app.scss';

export const App = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    console.log('width :>> ', ref.current.offsetWidth);
  }, [width]);

  return (
      <div ref={ref} className="main-bg">
        <Header />
        <Intro />
      </div>
  );
};
