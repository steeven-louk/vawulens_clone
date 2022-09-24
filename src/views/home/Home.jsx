import React from 'react'
import Faqs from '../../components/Faqs/Faqs'
import Footer from '../../components/footer/Footer'
import HeaderComp from '../../components/headerComp/HeaderComp'
import Programs from '../../components/Programs/Programs'
import Testimonials from '../../components/testimonials/Testimonials'
import Value from '../../components/value/Value'

import './style/style.scss'

const Home = () => {
  return (
    <>
      <HeaderComp/>
      <Programs/>
      <Value/>
      <Faqs/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home