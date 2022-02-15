import React from 'react'
import img from './Path.png'

const Header = () => {
  return (
    <div className='header'>
        <img className='image'src={img} alt='img'/>
        My Travel Journal
        </div>
  )
}

export default Header