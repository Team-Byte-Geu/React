import React from 'react'

import Cards from './Cards'
import details from './vegDetails'
import veg from './fruitDetails'
import Intro from './Intro'
import Footer from '../Footer/Footer'
const Dashboard = () => {
    

  return (
    <>   
    <div className='main-div'>
        <Intro/>
    <section className='container'>
    <div class="container-item">
                <h2 className='text-center item-heading'>Fresh Veggies</h2>
                <div className='container'>   
                <div className="row row-cols-1 row-cols-md-4 g-4 m-2 ">
                {
                    details.map((e)=>{
                        return(
                            <Cards url={e.imageURL} name = {e.name} weight={e.weight} price={e.price}/>
                        )
                    })
                }
                </div>
                </div>
    </div>
</section>
                <section className="container">
                <div className='container-item'>
                <h2 className='text-center item-heading'>Fresh Fruits</h2>
                <div className='container'>   
                <div className="row row-cols-1 row-cols-md-4 g-4 m-2 ">
                {
                    veg.map((e)=>{
                        return(
                            <Cards url={e.imageURL} name = {e.name} weight={e.weight} price={e.price}/>
                        )
                    })
                }
                </div>
                </div>
                </div>
            </section>
    </div>
 
 </>
  )
}

export default Dashboard
