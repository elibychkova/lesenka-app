import React from 'react';
import logoImg from '../../images/logo.svg';
import { HeaderMenu } from '../HeaderMenu';
import { HeaderFeedback } from '../HeaderFeedback';
import './header.scss';

export const Header = () => {
    return (
        <section className="header">
            <div className='logoContainer'>
                <img src={logoImg} alt="logo" className='logo'/>
            </div>
            <HeaderMenu/>
            <HeaderFeedback/>
        </section>
    );
};
