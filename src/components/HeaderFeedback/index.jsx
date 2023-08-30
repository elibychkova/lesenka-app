import { React } from 'react';
import Button from '../Button/button';
import './headerFeedback.scss';

export function HeaderFeedback() {
  return (
    <section className='headerFeedback'>
      <div className='phone'>{process.env.REACT_APP_FEEDBACK_PHONE}</div>
      <Button />
    </section>
  );
}
