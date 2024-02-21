import React from 'react'
import './products.css';

const products = (props) => {
  return (
    <div className='cards'>
        <h1>{props.title}</h1>
        <img src={props.img} width='300px' height='250px'alt="" />
        <p>{props.description}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default products