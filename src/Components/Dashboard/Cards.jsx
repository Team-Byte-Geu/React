import React from 'react'
import './Dashboard.css'

const Cards = (props) => {
  return (
    <div className='container'>
    <div className="m-2 card-item">
  <div className="col">
    <div className="card h-100 card-main">
    <div className='p-4 card card-image'>
      <img src={props.url} className="card-img-top card-image" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className='d-flex justify-content-center'>  
        <div className='container d-flex'>
        <p className="card-text d-flex ">{props.weight}</p>
</div>
<div className='container d-flex'>
        <button className="btn-cart"><i className="fa-solid fa-cart-plus fa-2xl cart-icon"></i></button>
        </div>
        <div className='container d-flex'>
        <span><i className="fa-solid fa-indian-rupee-sign"></i> <span id="item-price-1 ">{props.price}</span></span>
        </div>
</div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Cards
