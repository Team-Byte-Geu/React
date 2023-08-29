import React from 'react'
import './intro.css'
const Intro = () => {
  return (
    <section className='main-div'>
    <div className='container p-5'>
    <div className='p-5'>
    <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/natural-organic-food-background_1284-9919.jpg?w=740&t=st=1692720039~exp=1692720639~hmac=5a8b8556bfd53cc2456e393fb190dd3a60b6fe38c8353e3a1a2b13ccfc579399" className="d-block img-fluid mx-auto ads-images" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/pleased-young-female-gardener-uniform-wearing-gardening-hat-holds-vegetable-basket-head_141793-70958.jpg?w=900&t=st=1692719546~exp=1692720146~hmac=cd25b7c0784214df46cf185544599872625291ded39c9a08f50e52097165e49e" className="d-block img-fluid mx-auto ads-images" alt="..."/>
    </div>
    <div className="carousel-item ">
          <img src="https://img.freepik.com/premium-psd/water-splashing-fresh-red-tomatoes-red-background_33736-3685.jpg?size=626&ext=jpg" className="d-block img-fluid mx-auto ads-images"  alt="..."/>
    </div>
    
    <div className="carousel-item ">
      <img src="https://img.freepik.com/premium-photo/mangos_57665-10035.jpg?w=900" className="d-block img-fluid mx-auto ads-images" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src="https://img.freepik.com/premium-vector/funny-vegetable-isolated-cartoon-characters_124507-4292.jpg?w=900" className="d-block img-fluid mx-auto ads-images" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
    </section>
    
  )
}

export default Intro
