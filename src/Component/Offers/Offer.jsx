import React from 'react'
import './Offer.css'
import IMG1 from '../../assests/6.jpg';
const Offer = ()=> {
  return (
    <div className='offer container section'>
<div className="sectionContainer">
    <div className="secIntro">
        <h2 className="secTitle">
Special Offers
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur totam modi earum Maxime eveniet exercitationem .</p>
    </div>
    <div className="mainContent grid">
        <div className="singleOffers">
            <div className="destimage">
                <img src={IMG1}/>
                <span className='discount'>30% Off</span>
            </div>
        <div className="offerbody">
        <div className="price flex">
        <h4>$1000</h4>
        <span className='status'>For Rent</span>
        </div>
        <div className="amenit flex">
        <div className="singleamenity flex">
        <i></i>
        <small>2Bods</small>
        
        </div>
          <div className="singleamenity flex">
        <i className='fa fa-wifi'></i>
        <small>1Bath</small>
        
        </div>
        <div className="singleamenity flex">
        <i className='fa fa-car-side'></i>
        <small>2Bods</small>
        
        </div>
        </div>
        <div className="location flex">
            <i className='fa fa-location-dot'></i>
            <small>450 Vine $310 , London</small>
        </div>
        <button className='btn flex'>
          View Details
          <i class="fa fa-arrow-right"></i>
        </button>
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Offer