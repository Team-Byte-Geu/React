import React from 'react'
import './Cart.css'

function Cart() {
  return (
    <>
    <div className="cart">
    <div className="container">
        <div id="cart-content">
            <div id="promo" className=''>
            <div className=''>
                <label for="promo-code" className="label m-3">Enter a Promotional Code<br/>
                    <input type="text" id="promo-code" className="field promo-input " placeholder="Your Code"/>
                </label>
                <button className="cart-btn p-2">Apply</button>
                </div>
            </div>
            </div>
    </div>



    <div className="container d-flex">
    <div className="col-md-9">
    <table className="table table-dark ">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src='https://5.imimg.com/data5/ANDROID/Default/2021/2/SZ/RH/AA/44089979/product-jpeg-500x500.jpg' width='80px'></img></th>
      <td><p>Vegetable - Potato</p><br/>Quantity 1 KG</td>
      <td><input type="" id="" className="" placeholder="1"/></td>
      <td><span><i className="fa-solid fa-indian-rupee-sign"></i>50.00</span></td>
    </tr>
    <tr>
      <th scope="row"><img src='https://veggies.my/cdn/shop/products/Tomatoes.png?v=1653972536' width='80px'></img></th>
      <td><p>Vegetable - Tomato</p><br/>Quantity 1 KG</td>
      <td><input type="" id="" className="" placeholder="1"/></td>
      <td><span><i className="fa-solid fa-indian-rupee-sign"></i>50.00</span></td>
    </tr>
    <tr>
    <th scope="row"><img src='https://www.jiomart.com/images/product/original/590003537/cauliflower-1-pc-approx-600-g-1000-g-product-images-o590003537-p590003537-0-202203170515.jpg?im=Resize=(1000,1000)' width='80px'></img></th>
    <td><p>Vegetable - Cauliflower</p><br/>Quantity 1 KG</td>
    <td><input type="" id="" className="" placeholder="1"/></td>
    <td><span><i className="fa-solid fa-indian-rupee-sign"></i>50.00</span></td>
    </tr>
  </tbody>
</table>
    </div>

<div className="col-md-3">
<div className="container">
<div className="card p-4 payment-card">
<h3>Items in Your bag</h3>
<hr/>
<div className="d-flex justify-content-between">
<p>Subtotal</p>
<p><span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span></p>
</div>
<hr/>
<hr/>
<div className="d-flex justify-content-between">
<h4>Total</h4>
<p><span><i className="fa-solid fa-indian-rupee-sign"></i>150.00</span></p>
</div>
<hr/>
<button className="cart-btn p-3">Go to Secure Checkout</button>
</div>
</div>
</div>
</div>
</div>
</>
  )
}

export default Cart
