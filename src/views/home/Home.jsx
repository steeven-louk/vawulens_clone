import React from 'react'
import HeaderComp from '../../components/headerComp/HeaderComp'
import Programs from '../../components/Programs/Programs'
import './style/style.scss'

const Home = () => {
  return (
    <div className="">
      <HeaderComp/>

      <Programs/>
    </div>
  )
}

export default Home