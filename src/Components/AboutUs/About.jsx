import React from 'react'
import './about.css';
import AboutUs from '../../assets/about.jpg'

const About = () =>{
    return (
<>
<main className="">
<div className='container'>
      <h1>
        <span>About </span>us
      </h1>

      <div className="container-flex">
        <div className="image-container">
          <img src={AboutUs} alt="" />
          <h3>Best Vegetable Sellers</h3>
        </div>
        <section>
          <h1>Why choose us?</h1>
          <p>
            VeggieVilla is the best vegetable seller in the town. We run B2B
            enterprise which provides fresh, organic, and best quality
            vegetables to the restraunts and caterers, from fields to the
            tables.
          </p>
          <span>
            <button type="button" className="btn">
              Contact us
            </button>
          </span>
        </section>
      </div>
      </div>
    </main>
</>

    )
}
export default About
