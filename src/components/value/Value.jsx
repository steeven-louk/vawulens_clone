import React from 'react'
import SectionHead from '../sectionHead/SectionHead';
import Card from '../../UI/cards/card'
import {values} from "../../data";

import {GiCutDiamond} from 'react-icons/gi';

import './style/style.scss';


const Value = () => {
  return (
    <section className='value'>
        <div className="container value__container">
            <div className="left__container">
                <div className="value__img">
                    <img src='./images/values.jpg' alt="value img" />
                </div>
            </div>
            <div className="right__container">
                <SectionHead icon={<GiCutDiamond/>} title="Our Values"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab consectetur consequatur corrupti! dolor?</p>
                <div className="value__wrapper">
                    {values.map(({id,icon,title,desc})=>{
                        return(
                            <Card key={id}>
                                <span> {icon} </span>
                                <h4> {title} </h4>
                                <small>{desc}</small>
                            </Card>
                        )
                    })}
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Value