import React from 'react'
import Header from '../../components/header/Header';

import {plans} from '../../data';
import Card from '../../UI/cards/card';

import './style/style.scss';


const Plans = () => {
  return (
   <>
      <Header title="Membership Plans" image="./images/header_bg_4.jpg" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ratione ipsa totam velit. Quae, tempore. Nesciunt tempora dolorem unde reprehenderit accusamus?
      </Header>
      
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features})=>{
            return(
              <Card key={id} className='plan' >
                <h3> {name} </h3>
                <small>{desc}</small>
                <h1> {`$${price}`} </h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index)=>{
                    return <p key={index} className={!available ? 'disabled' :""}>{feature} </p>
                  })
                }
              </Card>
            )
          })
        }
      </div>
    </section>
   </>

  )
}

export default Plans