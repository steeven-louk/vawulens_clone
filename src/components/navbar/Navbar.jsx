import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';
import {links} from '../../data'
import {GoThreeBars} from 'react-icons/go';
import {MdOutlineClose} from 'react-icons/md'
import './style/style.scss'

const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false);


    return (
    <nav>
      <div className="navbar-item">
        <Link to="/" className='logo_C'>
          <img src="/images/logo.png" alt="" className="logo" />
        </Link>

      <ul className={isNavShowing? 'navbar_nav' : 'navbar_nav show-nav'}>
        {links.map(({ name, path }, index) => (
          <li key={index} className="nav-item">
            <NavLink to={path} className={({isActive}) => isActive? 'active-nav' : ''}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="nav__toggleBtn" onClick={()=>setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <GoThreeBars/> : <MdOutlineClose/>}
      
      </button>
      </div>
    </nav>
  );
}

export default Navbar