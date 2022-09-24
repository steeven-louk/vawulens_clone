import React from 'react'
import HeaderComp from '../../components/headerComp/HeaderComp'
import Programs from '../../components/Programs/Programs'
import Value from '../../components/value/Value'
import './style/style.scss'

const Home = () => {
  return (
    <div className="">
      <HeaderComp/>

      <Programs/>

      <Value/>
    </div>
  )
}

export default Home