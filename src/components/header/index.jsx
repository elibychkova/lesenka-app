import React from 'react';
import logoImg from '../../images/logo.svg';
import './header.scss';

export const Header = () => {
    return (
        <section className="header">
            <img src={logoImg} alt="logo" />
        </section>
    );
};
