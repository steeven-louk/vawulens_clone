import React from 'react'
import Header from '../../components/header/Header';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';

import './style/style.scss';

const Contact = () => {
  return (
    <div className='contactPage'>
      <Header title="Get In Touch" image="./images/header_bg_2.jpg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima rem adipisci vero est facere, laudantium, temporibus, veniam asperiores molestiae ullam quaerat dolorem libero dolor!
      </Header>
      <div className="contact">
        <div className=" contact__container">
          <div className="contact__wrapper">
            <a href='mailto:support@egattor.com' target="_blank" rel="noopener noreferrer"><MdEmail/></a>
            <a href="http://m.me/ernest_achiever" target="_blank" rel="noopener noreferrer"><BsMessenger/></a>
            <a href="http://wa.me/+233557097546" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact