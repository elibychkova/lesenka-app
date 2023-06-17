import React from 'react';
import { Intro } from './containers/Intro/index.jsx';
import { Header } from './components/Header/index.jsx';

import './styles/app.scss';

export const App = () => {
  return (
      <div className="main-bg">
        <Header />
        <Intro />
      </div>
  );
};
