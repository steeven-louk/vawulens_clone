import React from 'react'
import SectionHead from '../sectionHead/SectionHead'

import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../../data';
import FaqUI from '../../UI/faqs/Faq';

import './style/style.scss';



const Faqs = () => {
  return (
    <section className='faqs'>
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion/>} title="FAQs" />

            <div className="faq__wrapper">
                {faqs.map(({id,question,answer})=>{
                    return (
                        <FaqUI key={id} question={question} answer={answer} />
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Faqs