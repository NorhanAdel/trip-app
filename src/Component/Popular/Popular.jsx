import React from 'react'
import './Popular.css'
import IMG1 from '../../assests/r1.png';
import IMG2 from '../../assests/r2.png';
import IMG3 from '../../assests/r3.png';
const Data=[
  {
id:1,
imge:IMG1,
destination:'Mochu Picchu',
location:'Mixcio',
garde:'CULTURAL RELAX'
  },
  {
    id:1,
    imge:IMG2,
    destination:'Mochu Picchu',
    location:'Mixcio',
    garde:'CULTURAL RELAX'
      },
      {
        id:2,
        imge:IMG3,
        destination:'Mochu Picchu',
        location:'Mixcio',
        garde:'CULTURAL RELAX'
          },
          {
            id:3,
            imge:IMG1,
            destination:'Mochu Picchu',
            location:'Mixcio',
            garde:'CULTURAL RELAX'
              },
]
function Popular() {
  return (
<section className='popular section  container'>
<div className="sectionContainer">
    <div className="secheader flex">
<div className="textdiv">
  <h1 className='secTitle'>Popular Destination</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam hic, dolores ven.
  </p>
</div>
<div className="iconDiv flex">
 
<i class="fa fa-arrow-left"></i>
<i class="fa fa-arrow-right"></i>
 
</div>
<div className="maincontainer flex">
 {
  Data.map((item)=>{
return(
  <div className="singldestination">
  <div className="destimage">
    <img src={item.imge}/>
    <div className="overlayinfo">
<h3>{item.destination}</h3>
<p>{item.location} </p>
<i class="fa fa-arrow-right"></i>
    </div>
  </div>
  <div className="destfooter">
    <div className="number">0{item.id}</div>
    <div className="desttext flex">
<h6>{item.location}</h6>
<span className='flex'>
<span className='dot'>.</span>
Dot
</span>
    </div>
  </div>
</div>
)
  })
 }
</div>
    </div>
</div>
</section>
  )
}

export default Popular