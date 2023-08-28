import React from 'react';
import './headerMenu.scss';

export const HeaderMenu = () => {
    return (
        <section className="headerMenu">
            <HeaderMenuButton title="О компании"/>
            <HeaderMenuButton title="Каталог"/>
            <HeaderMenuButton title="Примеры работ"/>
            <HeaderMenuButton title="Блог"/>
            <HeaderMenuButton title="Контакты"/>
            
        </section>
    );
};


const HeaderMenuButton = ({title}) => {
    return(
        <div className='menuButton'>
            {title}
        </div>
    )
}