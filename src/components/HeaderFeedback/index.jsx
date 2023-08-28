import React from 'react';
import './headerFeedback.scss';

export const HeaderFeedback = () => {
    if (!!process.env.NODE_ENV) {

        console.log('process.env :>> ', process.env);
    }
    return (
        <section className="headerFeedback">
            {/* <div>{process.env.PHONE_ENV}</div> */}
        </section>
    );
};
