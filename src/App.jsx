import React from 'react';
import { Intro } from './containers/intro';
import { Header } from './components/header';

import './styles/app.scss';

export const App = () => {
  return (
    <section className="">
      <div className="main-bg">
        <Header />
        <Intro />
      </div>
    </section>
  );
};
