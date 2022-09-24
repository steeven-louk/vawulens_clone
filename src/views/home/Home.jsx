import React from 'react'
import Faqs from '../../components/Faqs/Faqs'
import HeaderComp from '../../components/headerComp/HeaderComp'
import Programs from '../../components/Programs/Programs'
import Testimonials from '../../components/testimonials/Testimonials'
import Value from '../../components/value/Value'
import './style/style.scss'

const Home = () => {
  return (
    <div className="">
      <HeaderComp/>
      <Programs/>
      <Value/>
      <Faqs/>
      <Testimonials/>
    </div>
  )
}

export default Home