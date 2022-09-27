import React from 'react';
import { Link } from 'react-router-dom';

import './style/style.scss';

const NotFound = () => {
  return (
    <section className='notfound'>
      <div className=" notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound