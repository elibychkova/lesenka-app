import React from 'react';
import './headerFeedback.scss';

export const HeaderFeedback = () => { 
    return (
        <section className="headerFeedback">
            <div className="phone">{process.env.REACT_APP_FEEDBACK_PHONE}</div>
        </section>
    );
};
