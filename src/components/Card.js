import React from 'react'

const Card = (props) => {
  return (
    <div className='card-container'>
        <img className='card-img' src={`./images/${props.item.img}`} alt='card-img' />
        <div className='card-details'>
            <img className='symbol' src={`./images/${props.item.symbol}`} alt='symbol'/>
            <span className='card-country'>{props.item.country}</span>
            <span className='card-map'>View on Google Maps</span>
            <div className='card-name'>{props.item.name}</div>
            <div className='card-date'>{props.item.date}</div>
            <div className='card-description'>{props.item.description}</div>
        </div>
    </div>
  )
}

export default Card