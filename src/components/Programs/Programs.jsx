import React from 'react'
import { FaCrown } from 'react-icons/fa'
import {AiFillCaretRight} from 'react-icons/ai'
import SectionHead from '../sectionHead/SectionHead'

import {programs} from '../../data';
import Card from '../../UI/cards/card';
import { Link } from 'react-router-dom';

import "./style/style.scss"


    console.log('====================================');
    console.log(programs);
    console.log('====================================');

const Programs = () => {
  return (

    <section className="program">
        <div className="container program__container">
            <SectionHead icon={<FaCrown/>} title="Programs" />

            <div className="program__wrapper">
            {
                programs.map(({id,icon,title,info,path})=>{
                    return(
                        <Card className="programs__program" key={id}>
                            <span> {icon} </span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className="btn sm">Learn more <AiFillCaretRight/></Link>
                        </Card>
                    )
                })
            }
        </div>
        </div>

       
    </section>
  )
}

export default Programs