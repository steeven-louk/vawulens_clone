import React from 'react';
import { Link } from 'react-router-dom';
import './style/styles.scss';


const HeaderComp = () => {
  return (
    <header className='header__component'>
        <div className="container">
            <div className="left-side">
                <span>#100DayChallengeOfWorkout</span>
                <h2>Join the legends of <br /> The Fitness work</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore obcaecati nesciunt saepe repellendus necessitatibus rem? Tempore iste omnis molestias.</p>
                <Link to="/" className="btn lg btn-submit">get started</Link>
            </div>

            <div className="right-side">
                <div className="right-side-circle"></div>
                <img src="./images/main_header.png" className='img-header' alt="header" />
            </div>
        </div>
    </header>
  )
}

export default HeaderComp