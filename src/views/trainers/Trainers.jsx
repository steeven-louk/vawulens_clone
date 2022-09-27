import React from 'react';

import Header from '../../components/header/Header';
import Trainer from '../../UI/trainer/Trainer';

import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

import './style/style.scss'


const Trainers = () => {
  return (
    <>
      <Header title="Our Trainer" image="./images/header_bg_5.jpg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestias quae repellat natus? Ipsam vero beatae tempora aliquid doloribus reiciendis maiores?
      </Header>
      <section className="trainers">
        <div className="container trainer__container">
            {
              trainers.map(({id, image, name, job, socials})=>{
               return (
                <Trainer key={id} name={name} image={image} job={job} socials={
                [
                  {icon:<BsInstagram/>, link: socials[0] },
                  {icon:<AiOutlineTwitter/>, link: socials[1] },
                  {icon:<FaFacebookF/>, link: socials[2] },
                  {icon:<FaLinkedinIn/>, link: socials[3] },
                ]
               } />
               )
              })
            }
        </div>
      </section>
    </>
  )
}

export default Trainers