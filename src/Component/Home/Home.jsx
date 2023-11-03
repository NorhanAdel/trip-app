import React from 'react'
import './Home.css'
const Home = ()=> {
  return (
 <section className='home'>
      <div className="sectioncontainer container">
    <div className="homeText">
        <h1 className='title'>Plan Your Trip With Travel Dot </h1>
        <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi sapiente velit.
        </p>
        <button className='btn'>Exploar Now</button>
    </div>
    <div className="homeCard flex">
<div className="locationDiv">
    <label htmlFor="location">Location</label>
    <input type='text' placeholder='Dream Destination'/>
</div>
<div className="distDiv">
    <label htmlFor="distance">Destination</label>
    <input type='text' placeholder='11/Meters'/>
</div>
<div className="priceDiv">
    <label htmlFor="price">Price</label>
    <input type='text' placeholder='$140-$500'/>
</div>
<button className='btn'>Search</button>
    </div>
  </div>
 </section>
  )
}

export default Home