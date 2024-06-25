import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem nihil inventore recusandae magni corrupti corporis maxime assumenda rerum! Odit ipsa incidunt nemo? Quidem quia cumque nobis ducimus ad perspiciatis.</p>
        <button className='btn'>Explore More<img src={dark_arrow} alt="arrow" /></button>
      </div>
    </div>
  )
}

export default Hero
